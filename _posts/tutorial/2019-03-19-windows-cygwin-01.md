---
layout: post
title:  "关于解决cygwin在cmd中出现中文乱码的最简方案"
date:   2018-03-19 
categories: tutorial
tags: money
author: Town
cover: https://i.loli.net/2019/04/04/5ca5ce6d6af0c.png
---

>cygwin是windows平台上运行的免费类UNIX模拟环境软件，可以提供许多模拟UNIX的dll以及各种UNIX/Linux下的命令支持，对初学Linux等很有帮助。但是安装后经常出现常见命令如ls, cat等命令遇到中文字符就编码错误，出现乱码的问题。网上找到的大多解决方案都很复杂，而且只能解决mintty.exe的问题，命令行直接用命令还是会出错。下面将为您介绍一种最简便的方法：修改环境变量

* 首先确认中文编码确实有问题

![微信截图_20190404172900.png](https://i.loli.net/2019/04/04/5ca5ce6d6af0c.png)

其实很简单，只要设置一下环境变量就行了。下面针对Win10系统，其他版本类似。

右键单击【此电脑】→【属性】→左边的【高级系统设置】→右下角的【环境变量】→在系统变量里添加一项，变量名为LANG，变量值为zh_CN，如图：

![微信截图_20190404173031.png](https://i.loli.net/2019/04/04/5ca5ceca729b8.png)

关闭窗口，重新跑cygwin的命令，发现中文正常了。

![a微信截图_20190404173132.png](https://i.loli.net/2019/04/04/5ca5cf00a83aa.png)