---
title: julia更改package路径以及更换国内源
categories:
  - 笔记
tags:
  - julia
date: 2019-07-28
sidebar: false
---

网络不稳定对在国内的用户来说是个很严重的问题，直接影响到了使用甚至安装 Julia 的体验。  
`PkgMirrors.jl` 是一个用镜像站来加速下载的客户端。

<!-- more -->

## 更改默认扩展包 package 路径

新建一个环境变量，名为`JUlIA_DEPOT_PATH`，值为自定义 pkg 路径

## 更换国内源

1. 安装 PkgMirrors  
   打开 julia，输入 `]` 以进入包管理器的 REPL 模式

   ```julia
   (v1.1) pkg> add PkgMirrors  #最官方的安装方式
   (v1.1) pkg> add https://github.com/sunoru/PkgMirrors.jl.git  # 从源代码安装
   (v1.1) pkg> add https://mirrors.ustc.edu.cn/julia/PkgMirrors.jl.git  # 从镜像站安装（推荐）
   ```

1. 使用  
   输入 `using PkgMirrors` 使用包  
   输入 `availables()` 查看可用源  
   输入 `setmirror("源")` 设置源

   ```powershell
   julia> using PkgMirrors
   julia> availables()
   2-element Array{String,1}:
    "ZJU"
    "USTC"
   julia> setmirror("USTC")
   [ Info: Updating mirror information...
   [ Info: PkgMirror USTC activated.
   PkgMirrors.Types.PkgMirror("USTC", "https://mirrors.ustc.edu.cn/julia")
   ```

   你也可以手动停用镜像站，或者使用如下语句清除本地缓存的信息：

   ```julia
   julia> deactivate()
   [ Info: PkgMirror USTC deactivated.
   julia> clear()
   [ Info: Cache clear.
   ```
