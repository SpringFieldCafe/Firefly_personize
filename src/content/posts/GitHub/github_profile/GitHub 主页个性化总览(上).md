---
title: GitHub 主页个性化总览(上)
published: 2026-07-10
description: 记录一下 GitHub 个人主页个性化。
tags: [GitHub]
category: Github
draft: false
---

# GitHub 主页个性化总览(上)

GitHub 主页本质上就是一个特殊仓库的 `README.md`。

只要仓库名和 GitHub 用户名完全一致，仓库保持公开，并在仓库根目录放置 `README.md`，这个 README 就会显示在个人主页顶部。

个性化有很多花哨的玩法，比如这个：[BEPb (Andrej Marinchenko)](https://github.com/BEPb)

这是他的仓库，基本涵盖了各个 GitHub 主页的个性化玩法：[BEPb/BEPb: Config files for my GitHub profile.](https://github.com/BEPb/BEPb)

可以挑选其中中意的，然后问AI到底是哪个项目，怎么调。

不过不建议搞太多花哨的，找几个中意的玩一下就行

GitHub 主页 README 官方教程：[Managing your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme)

---

## 个性化源仓库及官网

### 打字机效果

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=The+five+boxing+wizards+jump+quickly)](https://git.io/typing-svg)

打字机效果官网：[Readme Typing SVG - Demo Site](https://readme-typing-svg.demolab.com/demo/)

打字机效果仓库（内含参数说明）:[DenverCoder1/readme-typing-svg: ⚡ Dynamically generated, customizable SVG that gives the appearance of typing and deleting text for use on your profile page, repositories, or website.](https://github.com/DenverCoder1/readme-typing-svg)

官网可以直接图形化进行操作，很简单，一下就能上手，打开后填写文字、字体、字号、停顿时间，然后复制生成的链接即可。实在想进一步定制化，看看这个仓库里的教程，再结合 AI 优化，比如问AI有哪些英文字体。

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260711183444284.png)

### 萌萌计数器

![:1111111eeeeeeee](https://count.getloli.com/@:1111111eeeeeeee?theme=asoul)

萌萌计数器官网：[Moe Counter!](https://count.getloli.com/)

萌萌计数器仓库(内含部署说明): https://github.com/journey-ad/Moe-Counter

官网以及代码仓库下面都讲解了怎么使用，还可以选择主题。

#### 直接使用

对于普通 GitHub 个人主页，直接使用官方服务就够了。

直接使用时，引用了官方服务器生成 SVG 的地址，并没有把 SVG 文件复制到自己的仓库。[Moe Counter!](https://count.getloli.com/)官网讲了怎么用，可以在官网上直接看。

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/GitHub/Github_profile_120260711190228268.png)

下载的这个SVG图片是一次性静态的，不会随着访问数变化而变化，要保留访问计数功能，必须一直引用在线接口地址。

把生成的链接放进 `README.md`：

```html
<p align="center">
  <img
    src="https://count.getloli.com/@404?theme=nixietube-1"
    alt="访问计数"
  />
</p>
```

这种方式不需要自行维护服务，也不需要运行 Docker 或使用 pnpm 安装源码。

README 加载时，GitHub 会请求这个图片地址，然后将服务器返回的 SVG 显示出来。

可以改主题

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/GitHub/Github_profile_120260711190442071.png)


```html
<img src="https://count.getloli.com/@404?theme=minecraft" />
```

把`theme=`等于号后面的，这里是`minecraft`，换成你想要的主题即可。

这里的 `404` 是计数器 ID，`@` 是地址中的固定格式，也不要求必须和 GitHub 用户名一致。

不过建议使用自己的 GitHub 用户名，避免和其他人共用同一个计数器。

计数器 ID 决定访问量记录，`theme` 只决定显示样式，只修改主题不会重新计数。

#### Docker 部署

Docker 适合把 Moe Counter 部署到自己的服务器上。

官方已经提供了构建好的镜像：

```bash
docker pull ghcr.io/journey-ad/moe-counter:latest  # 拉取镜像
```

Docker 会把程序运行环境一起打包，不需要手动配置项目依赖。

正式部署时，还需要注意**数据库目录持久化** 和 **改域名（如果有自己的域名的话）**

项目的 Docker 配置和环境变量可以查看：[Moe Counter 官方部署说明](https://github.com/journey-ad/Moe-Counter#usage)

---

#### pnpm 从源码运行

使用 pnpm 前，需要确保已安装 Node.js 和 pnpm。

要求：Node.js >= 22 , pnpm >= 10

pnpm 方式是直接从源代码运行项目。

基础命令如下：

```bash
git clone https://github.com/journey-ad/Moe-Counter.git
cd Moe-Counter

pnpm install
pnpm start
```

pnpm更适合研究项目代码和二次开发

`pnpm start` 只是启动项目。要在服务器上长期运行，通常还要配置Nginx，数据库等。

