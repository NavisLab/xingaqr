---
title: 使用github+jsdelivr+PicGo搭建图床
categories:
  - 笔记
tags:
  - 图床
  - 工具
date: 2019-11-27
---

jsdelivr 是国外一家免费、公共、开源的 CDN 服务提供商，节点多，国内外速度都很快。  
可以为 npm，github，wordpress 提供 CDN 服务。

<!-- more -->

![jsdelivr][]

## 通过 jsdelivr 访问 github 仓库的文件

加载任何 GitHub 版本、提交或分支

https://cdn.jsdelivr.net/gh/user/repo@version/file

> user 是用户名, repo 是仓库名  
> @version 是 release 版本号(可以省略，省略后默认加载最新版本)  
> file 就是目录+文件名了(可省略，省略后查看目录下所有文件)

其他用法可以前往 jsdelivr 官网 查看

像下面这样访问一张图片

<https://cdn.jsdelivr.net/gh/xingaqr/img/2020/11/08/23-49-50-2b21b3.png>

我们可以通过 PicGo 工具一键传图并复制链接到剪切板。

## PicGo 的设置

PicGo 是基于 Electron 的开源的图片上传工具，支持主流三平台，下载安装后打开 github 图床设置

![picgo][]

结合截图工具 Snipaste，一键截图并复制，一键上传并复制链接，相当方便。

PicGo 还提供了很多有用的插件，推荐使用 super-prefix 插件按时间上传到不同文件夹。

[jsdelivr]: https://cdn.jsdelivr.net/gh/xingaqr/img/2020/11/09/20-25-30-47dbe1.png 'jsdelivr节点分布'
[picgo]: https://cdn.jsdelivr.net/gh/xingaqr/img/2020/11/09/20-25-54-965acb.png 'PicGo设置'
