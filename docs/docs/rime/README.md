---
title: 目录
date: 2021-01-04 21:38:54
---

## 文件(夹)定义

- `backgrounds/`: 同文 (trime) **主题图片**文件。
- `build/`: **编译结果**。部署成功后，会在此处生成*编译结果*文件，输入法程序运行时读取的也是这里的文件。
- `fonts/`: **字体**文件。
- `opencc/`: [OpenCC](https://github.com/BYVoid/OpenCC) **字形转换**配置及字典文件。
- `sync/`: **同步**文件夹。*备份*方案&词库及相关配置文件，导出的用户词典也存放在此处。
- `<词库id>.userdb/`: 用户**词库**。存储用户输入习惯。
- `default.yaml`: **全局配置**文件。Rime 各个平台通用的全局参数 (*功能键定义*、*按键捆绑*、*方案列表*、*候选条数*……)。
- `installation.yaml`: **安装信息**。输入法程序在首次运行及升级后写入*安装*、*升级时间*、*程序版本*等。
- `<方案id>.schema.yaml`: **输入方案**文件。
- `<词库id>.dict.yaml`: **词库**文件。
- `<词库id>.txt`: **文本格式的词库**文件。
- `<配置文件id>.custom.yaml`: **补丁**。用于配置文件 `<配置文件id>.schema.yaml` 或 `<配置文件id>.yaml` 的补丁。
- `symbols.yaml`: 扩充的**特殊符号**。提供了比`default.yaml`更为丰富的特殊符号。
- `<主题id>.trime.yaml`: 同文 (trime) **主题**文件。
- `user.yaml`: 用户**状态信息**。用来保存当前所使用的*方案id*，以及各种*开关的状态*。

## 学习路线

- 学习 yaml 语法: [YAML 入门教程](https://www.runoob.com/w3cnote/yaml-intro.html)
- 学习 Rime 配置文件语法: 
  - [yaml 基本语法](./yamlGrammer.md)
  - [配置文件中的一些 yaml 语法](./yamlInRime.md)
  - [Rime 配置文件](./Configuration.md)
- 定制方案
  - [dict.yaml 详解](./dict.yaml.md)
  - [schema.yaml 详解](./schema.yaml.md)
  - [拼写运算详解](./SpellingAlgebra.md)
  - [Rime 输入方案设计书](./RimeWithSchemata.md)
- 定制同文主题: 
  - [trime.yaml 详解](./trime.yaml.md)
- 实例
  - [Rime 定制指南](./CustomizationGuide.md)
  - [五笔双键配置案例详解](./wb2key.md)
  - [佛振教你写 Rime 输入方案之辅助码的作法](https://tieba.baidu.com/p/2094178562?see_lz=1)
- 其他
  - [yaml 文件开头注释是什么意思？](./yamlComment.md)
