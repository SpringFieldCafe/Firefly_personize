---
title: GitHub 主页个性化总览(下)
published: 2026-07-11
description: 记录 GitHub 个人主页静态徽章和技术栈图标的添加方法。
tags: [GitHub]
category: Github
draft: false
---

# GitHub 主页个性化总览（下）

上篇介绍了  [[GitHub 主页个性化总览(上)|打字机效果和萌萌计数器]]  ，这篇继续介绍静态徽章和技术栈图标。

[Compare GitHub Repositories — Star History](https://www.star-history.com/compare)这个显示星星数的趋势图我也想玩，但是可惜我没有starred过 。

---

## Shields.io 静态徽章

GitHub 官方只提供少量特定用途的徽章，主要用于 GitHub Actions 工作流状态、仓库状态等官方场景。不能自由定制。对于Logo、跳转链接等，GitHub 官方并不提供对应徽章

GitHub Actions 状态徽章官方教程：[添加工作流状态徽章](https://docs.github.com/zh/actions/how-tos/monitor-workflows/add-a-status-badge)

一般使用 Shields.io 统一生成，既能自定义样式，也能接入 GitHub、npm、PyPI 等平台的动态数据。

静态徽章可以用来展示社交平台和联系方式，Shields.io 也支持从外部服务获取数据的动态徽章。

静态徽章官网：[Shields.io](https://shields.io/)

静态徽章生成页面：[Static Badge | Shields.io](https://shields.io/badges/static-badge)

徽章图标查询：[Simple Icons](https://simpleicons.org/)

其他教程：

[在Markdown中使用 Shields.io 生成的徽章 - 厚礼蝎 - 博客园](https://www.cnblogs.com/guangdelw/p/19213253)

[用 Shields.io 数据牌 + GitHub 统计卡片美化你的 GitHub profile - 知乎](https://zhuanlan.zhihu.com/p/217540872)

只介绍静态徽章，不介绍自动更新数据的动态徽章。

### 基础格式

静态徽章的基本地址格式如下：

```txt
https://img.shields.io/badge/左侧文字-右侧文字-颜色
```

`https://img.shields.io/badge/Blog-Visit-8A2BE2`中blog为左侧文字，visit为右侧文字。

效果如下：

![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2)

---

### 添加图标

[Logos | Shields.io](https://shields.io/docs/logos)`SimpleIcons` 和 `logoColor parameter` 两节有相关教程

在链接后添加 `logo` 和 `logoColor` 参数：

```md
![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=github&logoColor=red)
```

`logo=github`表示使用 `github` 图标。

`logoColor=red`表示将图标设置为红色。

可以在 [Simple Icons](https://simpleicons.org/) 中搜索图标名称。

如果图标没有显示，通常是图标名称写错，或者 Shields.io 暂时不支持这个图标。

效果如下:

![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=github&logoColor=red)

---

### 添加跳转链接

[GitHub Markdown 基础语法](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)这个可以参考

只有图片时，点击徽章不会跳转：

```md
![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2)
```

可以在图片外面套一层链接：

```md
[![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=porkbun&logoColor=white)](https://springfieldcafe.github.io/404/)
```

也可以使用 HTML：

```html
<a href="https://springfieldcafe.github.io/404/">
  <img
    src="https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=porkbun&logoColor=white"
    alt="Blog"
  />
</a>
```

效果如下：

[![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=porkbun&logoColor=white)](https://springfieldcafe.github.io/404/)

---

### 居中展示多个徽章

[Quickstart for writing on GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github) 

页面开头的 `Introduction` 部分说明 Markdown 可以配合部分 HTML 标签使用；`Adding an image to suit your visitors` 部分给出了在 README 中使用 HTML 图片标签的示例。

Markdown 不方便精确控制多个徽章的位置和间距，所以这里使用 HTML。

每个 `<a>` 标签负责跳转，内部的 `<img>` 标签负责展示徽章。

普通换行和缩进产生的空白距离不方便控制，因此这里使用 `&nbsp;` 明确设置徽章间距。

为了避免徽章之间出现细蓝线，可以把 `<a>` 和内部的 `<img>` 写在同一行，不要在链接标签内部保留换行和缩进空白。

下面的写法本身没有语法错误，但在部分 Markdown 渲染器或博客主题中，`<a>` 标签内部的换行和缩进可能形成空白链接区域，并被显示成细蓝线：

```html
<p align="center">
  <a href="https://example.github.io/">
    <img
      src="https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=githubpages&logoColor=white"
      alt="Blog"
    />
  </a>
  <a href="https://space.bilibili.com/example">
    <img
      src="https://img.shields.io/badge/Bilibili-Follow-00A1D6?logo=bilibili&logoColor=white"
      alt="Bilibili"
    />
  </a>
</p>
```

徽章之间的间距使用 `&nbsp;` 控制，并且要放在 `</a>` 标签外面。

```html
<p align="center">
  <a href="https://example.github.io/"><img src="https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=githubpages&logoColor=white" alt="Blog" /></a>&nbsp;
  <a href="https://space.bilibili.com/example"><img src="https://img.shields.io/badge/Bilibili-Follow-00A1D6?logo=bilibili&logoColor=white" alt="Bilibili" /></a>&nbsp;
  <a href="https://www.zhihu.com/people/example-user"><img src="https://img.shields.io/badge/Zhihu-Read-0084FF?logo=zhihu&logoColor=white" alt="Zhihu" /></a>&nbsp;
  <a href="https://blog.csdn.net/example_user"><img src="https://img.shields.io/badge/CSDN-Blog-FC5531?logo=csdn&logoColor=white" alt="CSDN" /></a>&nbsp;
  <a href="mailto:example@example.com"><img src="https://img.shields.io/badge/Email-Contact-D14836?logo=gmail&logoColor=white" alt="Email" /></a>
</p>
```

效果如下：
<p align="center">
  <a href="https://example.github.io/"><img src="https://img.shields.io/badge/Blog-Visit-8A2BE2?logo=githubpages&logoColor=white" alt="Blog" /></a>&nbsp;
  <a href="https://space.bilibili.com/example"><img src="https://img.shields.io/badge/Bilibili-Follow-00A1D6?logo=bilibili&logoColor=white" alt="Bilibili" /></a>&nbsp;
  <a href="https://www.zhihu.com/people/example-user"><img src="https://img.shields.io/badge/Zhihu-Read-0084FF?logo=zhihu&logoColor=white" alt="Zhihu" /></a>&nbsp;
  <a href="https://blog.csdn.net/example_user"><img src="https://img.shields.io/badge/CSDN-Blog-FC5531?logo=csdn&logoColor=white" alt="CSDN" /></a>&nbsp;
  <a href="mailto:example@example.com"><img src="https://img.shields.io/badge/Email-Contact-D14836?logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

### 修改徽章样式

Shields.io 支持多种样式：

```txt
flat
flat-square
plastic
for-the-badge
social
```

```md
![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?style=for-the-badge&logo=porkbun&logoColor=white)
```

效果如下：

![Blog](https://img.shields.io/badge/Blog-Visit-8A2BE2?style=for-the-badge&logo=porkbun&logoColor=white)

未指定style时默认使用 `flat`

---

## 技术栈图标

技术栈图标可以直观展示自己使用过的语言、框架和工具。

我参考了这几个网址：

[Skill Icons](https://skillicons.dev/)

[免费的剪贴画和插图——矢量的SVG、PNG图像，下载的Ouch图像](https://igoutu.cn/illustrations)

[Getting Started](https://iconify.design/getting-started/)

[DEVICON | All programming languages and development tools related icons font](https://devicon.dev/)

还是认为skill icons最好，其他几个虽然图标比 Skill Icons 多，但是需要一个个下载，或者一个个输入 Markdown 在线网址，非常麻烦。Skill Icons 在线引用，一行html就可以搞定。

技术栈图标官网：[Skill Icons](https://skillicons.dev/)

技术栈图标仓库和完整图标列表：[tandpfun/skill-icons](https://github.com/tandpfun/skill-icons)

### 基础写法

```md
[![My Skills](https://skillicons.dev/icons?i=py,c,cpp)](https://skillicons.dev)
```

效果如下：

[![My Skills](https://skillicons.dev/icons?i=py,c,cpp)](https://skillicons.dev)

把 `i=` 后面的内容换成需要展示的图标名称，图标之间使用英文逗号分隔：

```txt
i=py,c,cpp
```

图标名称需要在 Skill Icons 仓库的图标列表中查找，如果仓库里面没有写上去的图标，它就不会显示。

---

### 设置明暗主题

不写的时候，默认是`theme=dark`

深色主题：

```md
![My Skills](https://skillicons.dev/icons?i=py,c,cpp&theme=dark)
```

![My Skills](https://skillicons.dev/icons?i=py,c,cpp&theme=dark)

浅色主题：

```md
![My Skills](https://skillicons.dev/icons?i=py,c,cpp&theme=light)
```

![My Skills](https://skillicons.dev/icons?i=py,c,cpp&theme=light)

---

### 设置每行数量

使用 `perline` 可以控制每行显示多少个图标：

```md
![My Skills](https://skillicons.dev/icons?i=py,c,cpp,cmake,latex,md,html,ts,js,css&perline=5)
```

这里表示每行显示五个图标。

图标较多时可以使用 `perline` 自动换行，也可以自己拆成多行。

---

### 展示示例

```md
## 🛠️ My Skills

---

### Languages

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=py,c,cpp,cmake,latex"
    alt="Languages"
  />
</p>

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=md,html,ts,js,css"
    alt="Languages"
  />
</p>

---

### Frameworks

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=pytorch,opencv,sklearn,qt,django,flask,fastapi"
    alt="Frameworks"
  />
</p>

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=ros,astro,react,vue"
    alt="Frameworks"
  />
</p>

---

### Dev Tools / DevOps

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=git,github,linux,docker,vscode,anaconda"
    alt="Development Tools"
  />
</p>

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=obsidian,notion,postman,ps,pr,ae"
    alt="Other Tools"
  />
</p>
```

## 🛠️ My Skills

---

### Languages

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=py,c,latex"
    alt="Languages"
  />
</p>

---

### Frameworks

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=pytorch,opencv,sklearn,django"
    alt="Frameworks"
  />
</p>

---

### Dev Tools / DevOps

<p align="center">
  <img
    src="https://skillicons.dev/icons?i=obsidian,notion,postman,ps,pr,ae"
    alt="Other Tools"
  />
</p>


