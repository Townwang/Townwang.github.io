![](https://i.loli.net/2017/12/05/5a2668ef9bdc6.png)

# 博客地址

[文科中的技术宅](https://townwang.com/)


# 项目结构 
```css
    ├── _config.yml # 配置文件
    ├── _includes # 页面组件方便重用
     |   ├── footer.html # 页脚
     |   └── head.html # html文档的头部内容
     |   └── header.html # 顶部菜单栏
     |   └── sidebar.html # 侧边栏
     |   └── pageNav.html # 文章列表分页组件
     |   └── gitment.html # 评论系统
    ├── _layouts # 布局模板
     |   ├── default.html # 默认模板
     |   └── post.html # 文章页面模板
    ├── _posts # 这里放文章
     |   ├── 2017-05-03-android.md # 命名格式：年-月-日-文章标题.md
     |   └── 2007-02-21-life.md
    ├── assets # 静态资源.
     |   ├── css # 样式文件
     |   └── fonts # 字体文件
     |   └── icons # 图标文件
     |   └── img #  图片文件
     |   └── js # 脚本文件
    ├──── pages # 页面文件
     |   └── android.md # 安卓开发页面
     |   └── tutorial.md # 实用教程页面
     |   └── software.md # 软件下载页面
     |   └── document.md # 文档资源页面
     |   └── life.md # 生活感悟页面
     |   └── tags.md # 标签页面
     |   └── link.md # 友情页面
    └── gulpfile.js # 自动化任务脚本
    └── index.html # 模板首页
    └── 404.md # 404页面
    └── README.md # github项目说明文件
    └── CNAME # 域名解析文件
    └── favicon.ico # 浏览器小图标
    └── search.json # 搜索依赖项
    └── package.json # 管理项目的依赖项
```
#  文章支持高亮 

HTML

CSS

Java

Git

Go

HTTP

JSON

Kotlin

PHP

Python

Rudy

C

C#

C++

Lua

Markdown

Nginx

Objective-c

Sql

Swiff

Vim


# 评论系统

采用Github issues 

```flow
st=>start: start:>http://www.baidu.com
op1=>operation: 操作1
cond1=>condition: YES or NO?
sub=>subroutine: 子程序
e=>end

st->op1->cond1
cond1(yes)->e
cond1(no)->sub(right)->op1  
```
