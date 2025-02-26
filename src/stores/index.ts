import type { ReadTimeResults } from 'reading-time'
import DEFAULT_CONTENT from '@/assets/example/markdown.md?raw'
import DEFAULT_CSS_CONTENT from '@/assets/example/theme-css.txt?raw'
import { altKey, codeBlockThemeOptions, colorOptions, fontFamilyOptions, fontSizeOptions, legendOptions, shiftKey, themeMap, themeOptions } from '@/config'
import { addPrefix, css2json, customCssWithTemplate, customizeTheme, downloadMD, exportHTML, formatDoc } from '@/utils'

import { initRenderer } from '@/utils/renderer'
import CodeMirror from 'codemirror'
import { marked } from 'marked'

export const useStore = defineStore(`store`, () => {
  // 是否开启深色模式
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  // 是否开启 Mac 代码块
  const isMacCodeBlock = useStorage(`isMacCodeBlock`, true)
  const toggleMacCodeBlock = useToggle(isMacCodeBlock)

  // 是否在左侧编辑
  const isEditOnLeft = useStorage(`isEditOnLeft`, true)
  const toggleEditOnLeft = useToggle(isEditOnLeft)

  // 是否开启微信外链接底部引用
  const isCiteStatus = useStorage(`isCiteStatus`, false)
  const toggleCiteStatus = useToggle(isCiteStatus)

  // 是否统计字数和阅读时间
  const isCountStatus = useStorage(`isCountStatus`, false)
  const toggleCountStatus = useToggle(isCountStatus)

  // 是否开启段落首行缩进
  const isUseIndent = useStorage(addPrefix(`use_indent`), false)
  const toggleUseIndent = useToggle(isUseIndent)

  const output = ref(``)

  // 文本字体
  const theme = useStorage<keyof typeof themeMap>(addPrefix(`theme`), themeOptions[0].value)
  // 文本字体
  const fontFamily = useStorage(`fonts`, fontFamilyOptions[0].value)
  // 文本大小
  const fontSize = useStorage(`size`, fontSizeOptions[2].value)
  // 主色
  const primaryColor = useStorage(`color`, colorOptions[0].value)
  // 代码块主题
  const codeBlockTheme = useStorage(`codeBlockTheme`, codeBlockThemeOptions[23].value)
  // 图注格式
  const legend = useStorage(`legend`, legendOptions[3].value)

  const fontSizeNumber = computed(() => Number(fontSize.value.replace(`px`, ``)))

  // 编辑器实例
  const editor = ref<CodeMirror.Editor | null>(null)

  // 文章列表
  const posts = useStorage(addPrefix(`posts`), [{
    title: `默认文章`,
    content: DEFAULT_CONTENT,
    groupId: `default`,
  }])

  // 分组列表
  const groups = useStorage(addPrefix(`groups`), [{
    id: `default`,
    title: `默认分组`,
  }])

  // 回收站
  const recycleBin = useStorage(addPrefix(`recycle_bin`), {
    groups: [] as { id: string, title: string, deletedAt: number }[],
    posts: [] as { title: string, content: string, groupId: string, deletedAt: number }[],
  })

  // 当前文章索引
  const currentPostIndex = useStorage(addPrefix(`currentPostIndex`), 0)

  // 当前分组ID
  const currentGroupId = useStorage(addPrefix(`currentGroupId`), `default`)

  // 是否是首次使用
  const isFirstUse = useStorage(`isFirstUse`, true)

  // 侧边栏状态
  const isOpenRightSlider = useStorage(addPrefix(`is_open_right_slider`), false)
  const isOpenPostSlider = useStorage(addPrefix(`is_open_post_slider`), false)

  // 获取指定分组下的文章列表
  const getPostsByGroupId = (groupId: string) => {
    return posts.value.filter(post => post.groupId === groupId)
  }

  // 获取当前分组下的文章列表
  const currentGroupPosts = computed(() => {
    return getPostsByGroupId(currentGroupId.value)
  })

  // 更新输出内容
  const updateOutput = () => {
    const groupPosts = getPostsByGroupId(currentGroupId.value)
    if (groupPosts.length === 0) {
      output.value = ``
      return
    }
    const post = groupPosts[currentPostIndex.value]
    if (!post) {
      output.value = ``
      return
    }
    const rendered = marked.parse(post.content)
    if (typeof rendered === `string`) {
      output.value = rendered
    }
  }

  // 编辑器刷新
  const refreshEditor = () => {
    nextTick(() => {
      if (editor.value) {
        editor.value.refresh()
        updateOutput()
      }
    })
  }

  // 监听分组切换，重置当前文章索引
  watch(currentGroupId, () => {
    const groupPosts = getPostsByGroupId(currentGroupId.value)
    currentPostIndex.value = groupPosts.length > 0 ? 0 : -1
    // 如果是默认分组且没有文章，添加默认文章
    if (currentGroupId.value === `default` && groupPosts.length === 0) {
      posts.value.push({
        title: `默认文章`,
        content: DEFAULT_CONTENT,
        groupId: `default`,
      })
      currentPostIndex.value = 0
    }
  })

  // 文章管理
  const addPost = (title: string, groupId: string = currentGroupId.value) => {
    // 添加文章到指定分组
    const newPost = {
      title,
      content: `# ${title}`,
      groupId,
    }
    posts.value.push(newPost)

    // 如果添加到当前分组，设置为当前文章
    if (groupId === currentGroupId.value) {
      const groupPosts = getPostsByGroupId(groupId)
      currentPostIndex.value = groupPosts.length - 1
    }
  }

  const renamePost = (index: number, title: string) => {
    // 只能重命名当前分组下的文章
    const groupPosts = getPostsByGroupId(currentGroupId.value)
    const post = groupPosts[index]
    if (post) {
      const globalIndex = posts.value.findIndex(p => p === post)
      posts.value[globalIndex].title = title
    }
  }

  const delPost = (index: number) => {
    // 只能删除当前分组下的文章
    const groupPosts = getPostsByGroupId(currentGroupId.value)
    const post = groupPosts[index]
    if (post) {
      // 将文章移入回收站
      recycleBin.value.posts.push({
        ...post,
        deletedAt: Date.now(),
      })

      // 删除文章
      const globalIndex = posts.value.findIndex(p => p === post)
      posts.value.splice(globalIndex, 1)
      // 更新当前文章索引
      const newGroupPosts = getPostsByGroupId(currentGroupId.value)
      currentPostIndex.value = Math.min(index, newGroupPosts.length - 1)
    }
  }

  // 监听文章切换
  watch(currentPostIndex, () => {
    if (editor.value) {
      const groupPosts = getPostsByGroupId(currentGroupId.value)
      if (groupPosts.length === 0) {
        editor.value.setValue(``)
        editor.value.clearHistory()
        editor.value.refresh()
        return
      }
      const post = groupPosts[currentPostIndex.value]
      if (!post) {
        editor.value.setValue(``)
        editor.value.clearHistory()
        editor.value.refresh()
        return
      }
      editor.value.setValue(post.content)
      editor.value.clearHistory()
      editor.value.refresh()
    }
  })

  // 清空当前编辑器内容
  const clearCurrentContent = () => {
    if (editor.value) {
      const groupPosts = getPostsByGroupId(currentGroupId.value)
      if (groupPosts.length === 0 || !groupPosts[currentPostIndex.value]) {
        return
      }
      const post = groupPosts[currentPostIndex.value]
      post.content = ``
      editor.value.setValue(``)
      editor.value.clearHistory()
      editor.value.refresh()
      updateOutput()
    }
  }

  // 每次应用启动时检查是否是首次使用
  onMounted(() => {
    // 确保默认分组在第一位
    const defaultGroupIndex = groups.value.findIndex(g => g.id === `default`)
    if (defaultGroupIndex === -1) {
      // 如果没有默认分组，添加到第一位
      groups.value.unshift({
        id: `default`,
        title: `默认分组`,
      })
    }
    else if (defaultGroupIndex > 0) {
      // 如果默认分组不在第一位，移动到第一位
      const defaultGroup = groups.value.splice(defaultGroupIndex, 1)[0]
      groups.value.unshift(defaultGroup)
    }

    // 如果是首次使用
    if (isFirstUse.value) {
      // 重置为默认文章
      posts.value = [{
        title: `默认文章`,
        content: DEFAULT_CONTENT,
        groupId: `default`,
      }]
      currentPostIndex.value = 0
      isFirstUse.value = false

      // 初始化侧边栏状态
      isOpenPostSlider.value = false
      isOpenRightSlider.value = false
    }

    // 确保至少有一篇文章
    if (posts.value.length === 0) {
      posts.value.push({
        title: `新文章`,
        content: `# 新文章`,
        groupId: `default`,
      })
      currentPostIndex.value = 0
    }

    // 初始化编辑器内容
    nextTick(() => {
      if (editor.value) {
        const groupPosts = getPostsByGroupId(currentGroupId.value)
        const post = groupPosts[currentPostIndex.value]
        if (post) {
          editor.value.setValue(post.content)
          editor.value.clearHistory()
          editor.value.refresh()
          updateOutput()
        }
      }
    })
  })

  // 格式化文档
  const formatContent = () => {
    formatDoc((editor.value!).getValue()).then((doc) => {
      posts.value[currentPostIndex.value].content = doc
      toRaw(editor.value!).setValue(doc)
      refreshEditor()
    })
  }

  // 切换 highlight.js 代码主题
  const codeThemeChange = () => {
    const cssUrl = codeBlockTheme.value
    const el = document.querySelector(`#hljs`)
    if (el) {
      el.setAttribute(`href`, cssUrl)
    }
    else {
      const link = document.createElement(`link`)
      link.setAttribute(`type`, `text/css`)
      link.setAttribute(`rel`, `stylesheet`)
      link.setAttribute(`href`, cssUrl)
      link.setAttribute(`id`, `hljs`)
      document.head.appendChild(link)
    }
  }

  // 自义定 CSS 编辑器
  const cssEditor = ref<CodeMirror.EditorFromTextArea | null>(null)
  const setCssEditorValue = (content: string) => {
    (cssEditor.value!).setValue(content)
  }
  // 自定义 CSS 内容
  const cssContent = useStorage(`__css_content`, DEFAULT_CSS_CONTENT)
  const cssContentConfig = useStorage(addPrefix(`css_content_config`), {
    active: `方案1`,
    tabs: [
      {
        title: `方案1`,
        name: `方案1`,
        // 兼容之前的方案
        content: cssContent.value || DEFAULT_CSS_CONTENT,
      },
    ],
  })
  onMounted(() => {
    // 清空过往历史记录
    cssContent.value = ``
  })
  const getCurrentTab = () => cssContentConfig.value.tabs.find((tab) => {
    return tab.name === cssContentConfig.value.active
  })!
  const tabChanged = (name: string) => {
    cssContentConfig.value.active = name
    const content = cssContentConfig.value.tabs.find((tab) => {
      return tab.name === name
    })!.content
    setCssEditorValue(content)
  }

  // 重命名 css 方案
  const renameTab = (name: string) => {
    const tab = getCurrentTab()!
    tab.title = name
    tab.name = name
    cssContentConfig.value.active = name
  }

  const addCssContentTab = (name: string) => {
    cssContentConfig.value.tabs.push({
      name,
      title: name,
      content: DEFAULT_CSS_CONTENT,
    })
    cssContentConfig.value.active = name
    setCssEditorValue(DEFAULT_CSS_CONTENT)
  }
  const validatorTabName = (val: string) => {
    return cssContentConfig.value.tabs.every(({ name }) => name !== val)
  }

  const renderer = initRenderer({
    theme: customCssWithTemplate(css2json(getCurrentTab().content), primaryColor.value, customizeTheme(themeMap[theme.value], { fontSize: fontSizeNumber.value, color: primaryColor.value })),
    fonts: fontFamily.value,
    size: fontSize.value,
    isUseIndent: isUseIndent.value,
  })

  const readingTime = ref<ReadTimeResults | null>(null)

  // 更新编辑器
  const editorRefresh = () => {
    codeThemeChange()
    renderer.reset({ citeStatus: isCiteStatus.value, legend: legend.value, isUseIndent: isUseIndent.value, countStatus: isCountStatus.value })

    const { markdownContent, readingTime: readingTimeResult } = renderer.parseFrontMatterAndContent(editor.value!.getValue())
    readingTime.value = readingTimeResult
    let outputTemp = marked.parse(markdownContent) as string

    // 阅读时间及字数统计
    outputTemp = renderer.buildReadingTime(readingTimeResult) + outputTemp

    // 去除第一行的 margin-top
    outputTemp = outputTemp.replace(/(style=".*?)"/, `$1;margin-top: 0"`)
    // 引用脚注
    outputTemp += renderer.buildFootnotes()
    // 附加的一些 style
    outputTemp += renderer.buildAddition()

    if (isMacCodeBlock.value) {
      outputTemp += `
        <style>
          .hljs.code__pre > .mac-sign {
            display: flex;
          }
        </style>
      `
    }

    outputTemp += `
      <style>
        .code__pre {
          padding: 0 !important;
        }

        .hljs.code__pre code {
          display: -webkit-box;
          padding: 0.5em 1em 1em;
          overflow-x: auto;
          text-indent: 0;
        }
      </style>
    `

    output.value = renderer.createContainer(outputTemp)
  }

  // 更新 CSS
  const updateCss = () => {
    const json = css2json(cssEditor.value!.getValue())
    const newTheme = customCssWithTemplate(json, primaryColor.value, customizeTheme(themeMap[theme.value], { fontSize: fontSizeNumber.value, color: primaryColor.value }))
    renderer.setOptions({
      theme: newTheme,
    })

    editorRefresh()
  }
  // 初始化 CSS 编辑器
  onMounted(() => {
    const cssEditorDom = document.querySelector<HTMLTextAreaElement>(`#cssEditor`)!
    cssEditorDom.value = getCurrentTab().content
    const theme = isDark.value ? `darcula` : `xq-light`
    cssEditor.value = markRaw(
      CodeMirror.fromTextArea(cssEditorDom, {
        mode: `css`,
        theme,
        lineNumbers: false,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        autofocus: true,
        extraKeys: {
          [`${shiftKey}-${altKey}-F`]: function autoFormat(editor: CodeMirror.Editor) {
            formatDoc(editor.getValue(), `css`).then((doc) => {
              getCurrentTab().content = doc
              editor.setValue(doc)
            })
          },
        },
      } as never),
    )

    // 自动提示
    cssEditor.value.on(`keyup`, (cm, e) => {
      if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 189) {
        (cm as any).showHint(e)
      }
    })

    // 实时保存
    cssEditor.value.on(`update`, () => {
      updateCss()
      getCurrentTab().content = cssEditor.value!.getValue()
    })
  })

  watch(isDark, () => {
    const theme = isDark.value ? `darcula` : `xq-light`
    toRaw(cssEditor.value)?.setOption?.(`theme`, theme)
  })

  // 重置样式
  const resetStyle = () => {
    isCiteStatus.value = false
    isMacCodeBlock.value = true
    isCountStatus.value = false

    theme.value = themeOptions[0].value
    fontFamily.value = fontFamilyOptions[0].value
    fontFamily.value = fontFamilyOptions[0].value
    fontSize.value = fontSizeOptions[2].value
    primaryColor.value = colorOptions[0].value
    codeBlockTheme.value = codeBlockThemeOptions[23].value
    legend.value = legendOptions[3].value

    cssContentConfig.value = {
      active: `方案 1`,
      tabs: [
        {
          title: `方案 1`,
          name: `方案 1`,
          // 兼容之前的方案
          content: cssContent.value || DEFAULT_CSS_CONTENT,
        },
      ],
    }

    cssEditor.value!.setValue(DEFAULT_CSS_CONTENT)

    updateCss()
    editorRefresh()

    toast.success(`样式重置成功~`)
  }

  // 为函数添加刷新编辑器的功能
  const withAfterRefresh = (fn: (...rest: any[]) => void) => (...rest: any[]) => {
    fn(...rest)
    editorRefresh()
  }

  const getTheme = (size: string, color: string) => {
    const newTheme = themeMap[theme.value]
    const fontSize = Number(size.replace(`px`, ``))
    return customCssWithTemplate(css2json(getCurrentTab().content), color, customizeTheme(newTheme, { fontSize, color }))
  }

  const themeChanged = withAfterRefresh((newTheme: keyof typeof themeMap) => {
    renderer.setOptions({
      theme: customCssWithTemplate(css2json(getCurrentTab().content), primaryColor.value, customizeTheme(themeMap[newTheme], { fontSize: fontSizeNumber.value })),
    })
    theme.value = newTheme
  })

  const fontChanged = withAfterRefresh((fonts) => {
    renderer.setOptions({
      fonts,
    })

    fontFamily.value = fonts
  })

  const sizeChanged = withAfterRefresh((size) => {
    const theme = getTheme(size, primaryColor.value)
    renderer.setOptions({
      size,
      theme,
    })

    fontSize.value = size
  })

  const colorChanged = withAfterRefresh((newColor) => {
    const theme = getTheme(fontSize.value, newColor)
    renderer.setOptions({
      theme,
    })

    primaryColor.value = newColor
  })

  const codeBlockThemeChanged = withAfterRefresh((newTheme) => {
    codeBlockTheme.value = newTheme
  })

  const legendChanged = withAfterRefresh((newVal) => {
    legend.value = newVal
  })

  const macCodeBlockChanged = withAfterRefresh(() => {
    toggleMacCodeBlock()
  })

  const citeStatusChanged = withAfterRefresh(() => {
    toggleCiteStatus()
  })

  const countStatusChanged = withAfterRefresh(() => {
    toggleCountStatus()
  })

  const useIndentChanged = withAfterRefresh(() => {
    toggleUseIndent()
  })

  // 导出编辑器内容为 HTML，并且下载到本地
  const exportEditorContent2HTML = () => {
    exportHTML(primaryColor.value)
    document.querySelector(`#output`)!.innerHTML = output.value
  }

  // 导出编辑器内容到本地
  const exportEditorContent2MD = () => {
    downloadMD(editor.value!.getValue())
  }

  // 导入 Markdown 文档
  const importMarkdownContent = () => {
    const body = document.body
    const input = document.createElement(`input`)
    input.type = `file`
    input.name = `filename`
    input.accept = `.md`
    input.onchange = () => {
      const file = input.files![0]
      if (!file) {
        return
      }

      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (event) => {
        (editor.value!).setValue((event.target!).result as string)
        toast.success(`文档导入成功`)
      }
    }

    body.appendChild(input)
    input.click()
    body.removeChild(input)
  }

  const isOpenConfirmDialog = ref(false)

  // 重置样式
  const resetStyleConfirm = () => {
    isOpenConfirmDialog.value = true
  }

  // 导入内容
  const importContent = async (content: string) => {
    if (!editor.value)
      return

    try {
      // 先清空编辑器
      editor.value.setValue(``)
      // 等待下一个渲染周期
      await nextTick()
      // 重置编辑器状态
      editor.value.clearHistory()
      // 设置新内容
      editor.value.setValue(content)
      // 移动光标到开始位置
      editor.value.setCursor(0, 0)
      // 刷新编辑器
      editor.value.refresh()
      // 更新存储的内容
      posts.value[currentPostIndex.value].content = content
      // 更新输出
      updateOutput()
    }
    catch (error) {
      console.error(`更新编辑器内容时出错:`, error)
      throw new Error(`更新编辑器内容失败`)
    }
  }

  // 分组管理
  const addGroup = (title: string) => {
    const id = Date.now().toString()
    // 将新分组添加到默认分组之后
    const defaultGroupIndex = groups.value.findIndex(g => g.id === `default`)
    groups.value.splice(defaultGroupIndex + 1, 0, {
      id,
      title,
    })
    return id
  }

  const renameGroup = (id: string, title: string) => {
    const group = groups.value.find(g => g.id === id)
    if (group) {
      group.title = title
    }
  }

  const deleteGroup = (id: string) => {
    // 不允许删除默认分组
    if (id === `default`)
      return

    // 将分组移入回收站
    const group = groups.value.find(g => g.id === id)
    if (group) {
      recycleBin.value.groups.push({
        ...group,
        deletedAt: Date.now(),
      })
    }

    // 将该分组下的文章移入回收站
    const groupPosts = posts.value.filter(post => post.groupId === id)
    recycleBin.value.posts.push(...groupPosts.map(post => ({
      ...post,
      deletedAt: Date.now(),
    })))

    // 删除分组及其文章
    posts.value = posts.value.filter(post => post.groupId !== id)
    const index = groups.value.findIndex(g => g.id === id)
    if (index > -1) {
      groups.value.splice(index, 1)
    }

    // 如果删除的是当前分组，切换到默认分组
    if (currentGroupId.value === id) {
      currentGroupId.value = `default`
    }
  }

  // 从回收站恢复分组
  const restoreGroup = (id: string) => {
    const groupIndex = recycleBin.value.groups.findIndex(g => g.id === id)
    if (groupIndex === -1)
      return

    // 恢复分组
    const group = recycleBin.value.groups[groupIndex]
    groups.value.push({
      id: group.id,
      title: group.title,
    })

    // 恢复该分组下的文章
    const groupPosts = recycleBin.value.posts.filter(p => p.groupId === id)
    posts.value.push(...groupPosts.map(({ title, content, groupId }) => ({
      title,
      content,
      groupId,
    })))

    // 从回收站中移除
    recycleBin.value.groups.splice(groupIndex, 1)
    recycleBin.value.posts = recycleBin.value.posts.filter(p => p.groupId !== id)
  }

  // 从回收站恢复文章
  const restorePost = (index: number) => {
    const post = recycleBin.value.posts[index]
    if (!post)
      return

    // 如果文章所属分组不存在，先恢复到默认分组
    if (!groups.value.find(g => g.id === post.groupId)) {
      post.groupId = `default`
    }

    // 恢复文章
    posts.value.push({
      title: post.title,
      content: post.content,
      groupId: post.groupId,
    })

    // 从回收站中移除
    recycleBin.value.posts.splice(index, 1)
  }

  // 清空回收站
  const clearRecycleBin = () => {
    recycleBin.value.groups = []
    recycleBin.value.posts = []
  }

  return {
    isDark,
    toggleDark,

    isEditOnLeft,
    toggleEditOnLeft,

    isMacCodeBlock,
    isCiteStatus,
    citeStatusChanged,
    isUseIndent,
    useIndentChanged,

    isCountStatus,
    countStatusChanged,

    output,
    editor,
    cssEditor,
    theme,
    fontFamily,
    fontSize,
    primaryColor,
    codeBlockTheme,
    legend,
    readingTime,

    editorRefresh,

    themeChanged,
    fontChanged,
    sizeChanged,
    colorChanged,
    codeBlockThemeChanged,
    legendChanged,
    macCodeBlockChanged,

    formatContent,
    exportEditorContent2HTML,
    exportEditorContent2MD,

    importMarkdownContent,

    isOpenConfirmDialog,
    resetStyleConfirm,
    resetStyle,

    cssContentConfig,
    addCssContentTab,
    validatorTabName,
    setCssEditorValue,
    tabChanged,
    renameTab,
    posts,
    currentPostIndex,
    addPost,
    renamePost,
    delPost,
    isOpenPostSlider,
    isOpenRightSlider,
    importContent,
    clearCurrentContent,
    groups,
    currentGroupId,
    addGroup,
    renameGroup,
    deleteGroup,
    currentGroupPosts,
    recycleBin,
    restoreGroup,
    restorePost,
    clearRecycleBin,
  }
})

export const useDisplayStore = defineStore(`display`, () => {
  // 是否展示 CSS 编辑器
  const isShowCssEditor = ref(false)
  const toggleShowCssEditor = useToggle(isShowCssEditor)

  // 是否展示插入表格对话框
  const isShowInsertFormDialog = ref(false)
  const toggleShowInsertFormDialog = useToggle(isShowInsertFormDialog)

  // 是否展示上传图片对话框
  const isShowUploadImgDialog = ref(false)
  const toggleShowUploadImgDialog = useToggle(isShowUploadImgDialog)

  return {
    isShowCssEditor,
    toggleShowCssEditor,
    isShowInsertFormDialog,
    toggleShowInsertFormDialog,
    isShowUploadImgDialog,
    toggleShowUploadImgDialog,
  }
})

export * from './ai'
