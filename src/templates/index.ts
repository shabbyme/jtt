import { advancedTemplates } from './advanced'
import { animationTemplates } from './animations'
import { valentineTemplates } from './animations/valentineTemplates'
import { basicTemplates } from './basic'
import { chartTemplates } from './charts'
import { componentTemplates } from './components'
import { contentStyleTemplates } from './contentStyles'
import { imageContentTemplates } from './imageContent'
import { layoutTemplates } from './layouts'
import { titleStyleTemplates } from './titleStyles'
import { wechatTemplates } from './wechat'

// 导出所有模板
export const templates = {
  basic: {
    title: `基础模板`,
    items: basicTemplates,
  },
  valentine: {
    title: `情人节模板`,
    items: valentineTemplates,
  },
  components: {
    title: `组件模板`,
    items: componentTemplates,
  },
  layouts: {
    title: `布局模板`,
    items: layoutTemplates,
  },
  animations: {
    title: `动画特效`,
    items: animationTemplates,
  },
  advanced: {
    title: `高级语法`,
    items: advancedTemplates,
  },
  wechat: {
    title: `公众号模板`,
    items: wechatTemplates,
  },
  charts: {
    title: `图表模板`,
    items: chartTemplates,
  },
  contentStyles: {
    title: `内容样式`,
    items: contentStyleTemplates,
  },
  titleStyles: {
    title: `标题样式`,
    items: titleStyleTemplates,
  },
  imageContent: {
    title: `图片内容`,
    items: imageContentTemplates,
  },
  // ... 其他分类模板
}

// 导出模板类型
export interface Template {
  name: string
  content: string
  description?: string
  tags?: string[]
}

export interface TemplateCategory {
  title: string
  items: Template[]
}

export interface Templates {
  [key: string]: TemplateCategory
}
