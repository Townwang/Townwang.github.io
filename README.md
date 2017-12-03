![](/town.jpg)

# 博客地址

[文科中的技术宅](https://townwang.com/)


# 项目结构 
```css
    ├── _config.yml # 配置文件
    ├── _includes # 页面组件方便重用
    |   ├── footer.html # 页脚
    |   └── head.html # html文档的头部内容
    |   └── header.html # 顶部菜单栏
    |   └── pageNav.html # 文章列表分页组件
    ├── _layouts # 布局模板
    |   ├── default.html # 默认模板
    |   └── post.html # 文章页面模板
    ├── _posts # 这里放文章
    |   ├── 2017-05-03-elements-of-javascript-style.md # 命名格式：年-月-日-文章标题.md
    |   └── 2007-02-21-life-on-mars.md
    ├── _site # Jekyll将源码处理后生成的站点文件，里面的内容可直接发布
    ├── assets # 存放用于线上环境的静态资源.
    |   ├── css # assets文件夹中sass编译后的样式文件
    |   └── fonts # 字体文件
    |   └── icons # 图标文件
    |   └── img #  图片文件
    |   └── js # assets文件夹中处理后的脚本文件
    |   ├── js # 存放脚本源码
    |   └── sass # 样式源码
    |   └── app.scss # 整合下面的所有样式文件
    |   └── base.scss # 引入字体、Reset部分样式
    |   └── common.scss # 模板的主要样式
    |   └── helper.scss # 工具样式
    |   └── layouts.scss # 响应式布局
    └── gulpfile.js # 自动化任务脚本
    └── index.html # 模板首页
    └── tags.html # 标签页面
    └── 404.html # 404页面
    └── package.json # 管理项目的依赖项
```
#  文章支持高亮 

HTML

CSS

Sass

JavaScript

CoffeeScript

Java

C-like

Swift

PHP

Go

Python

# 评论系统

采用Github issues 

感谢@imsun 开源 [地址](https://github.com/imsun/gitment)




