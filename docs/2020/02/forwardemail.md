---
title: 使用forwardemail.net搭建域名邮箱
categories:
  - 笔记
tags:
  - 邮箱
date: 2020-02-09
---

forwardemail 是针对自定义域名的免费、加密、开源的电子邮件转发服务。
官网：<https://forwardemail.net/>

<!-- more -->

## 官方文档

<https://forwardemail.net/zh/faq>

## 配置

### 在 DNS 记录中添加两条 MX 记录

| Name    | TTL  | Type | 优先级 | Value                |
| ------- | ---- | ---- | ------ | -------------------- |
| @或留空 | 3600 | MX   | 10     | mx1.forwardemail.net |
| @或留空 | 3600 | MX   | 20     | mx2.forwardemail.net |

> TTL 不一定设为 3600，可以自行调整

### 添加转发规则

1 转发域名下所有邮箱（下例将所有邮件转发到 me@ddan.cc）  
| Name | TTL | Type | Value |
| ------- | ---- | ---- | ----------------------- |
| @或留空 | 3600 | TXT | forward-email=me@ddan.cc |

2 转发一个地址（下例将 hello@domain.com 转发到 me@ddan.cc ）
| Name | TTL | Type | Value |
| ------- | ---- | ---- | ----------------------------- |
| @或留空 | 3600 | TXT | forward-email=hello:me@ddan.cc |

3 转发多个地址：用逗号分隔（下例将 hello@domain.com 转发到 me@ddan.cc ，将 admin@domain.com 转发到 imnot@ddan.cc ）

| Name    | TTL  | Type | Value                                            |
| ------- | ---- | ---- | ------------------------------------------------ |
| @或留空 | 3600 | TXT  | forward-email=hello:me@ddan.cc,admin:imnot@ddan.cc |

4 域名全局转发（下例将 _@domain.com 转发到 _@ddan.cc ）

| Name    | TTL  | Type | Value                |
| ------- | ---- | ---- | -------------------- |
| @或留空 | 3600 | TXT  | forward-email=ddan.cc |

### 添加 spf 记录

| Name    | TTL  | Type | Value                                         |
| ------- | ---- | ---- | --------------------------------------------- |
| @或留空 | 3600 | TXT  | v=spf1 a mx include:spf.forwardemail.net -all |

> - ⚠️ 如果您使用的是 Google Apps，则需要附加 include:\_spf.google.com 到上面的值–例如 v=spf1 a mx include:spf.forwardemail.net include:\_spf.google.com -all。
> - 如果您已经有与“ v = spf1”相似的行，则需要附加 include:spf.forwardemail.net 在任何现有的“ include：host.com”记录之前，并且在同一行中的“ -all”之前，例如：”：  
>   v=spf1 a mx include:spf.forwardemail.net include:host.com -all
> - 请注意，“-all”和“〜all”之间有区别。 “-”表示 SPF 检查不匹配时应该失败，而“〜”表示 SPF 检查应该为 SOFTFAIL。我们建议使用“ -all”方法来防止域伪造。

## 问题

- 发件人包含 <no-reply@forwardemail.net>
- 可能有一些邮件收不到
