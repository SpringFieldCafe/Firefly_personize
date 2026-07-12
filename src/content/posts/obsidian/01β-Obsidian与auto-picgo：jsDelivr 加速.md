---
title: 01β-Obsidian与auto-picgo：jsDelivr 加速
published: 2026-06-31
pinned: false
description: 使用jsDelivr加速
tags: [Obsidian]
category: Obsidian笔记


---


# 01β-Obsidian与auto-picgo：jsDelivr 加速

## 一，前言

在α里，我用 PicGo + GitHub 搭了一个图床。

本来以为这样就结束了，结果有经典问题：

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin-b/20260629202707180.png)

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin-b/20260629204508764.png)

我决定使用jsDelivr作为CDn，加速其他平台读取

可参考：[通过picgo获取图片链接（GitHub图床）](https://blog.csdn.net/2402_89218457/article/details/149030549)

---

## 二，CDN与CDN选择

### 为什么用CDN

不用 CDN 的话，我上传的平台就要去 GitHub 的源仓库里拉取raw图片链接，速度很慢，还特别容易失败。用了 CDN 以后，CDN会把这些 GitHub 源仓库的图片分发到 CDN 附近的节点，从而加速这些平台的拉取图片。

**用了CDN后，PicGo 最终还是会把图片上传到 GitHub 源仓库里面。只是改变 PicGo 上传完成以后返回的图片链接，不会改变图片的实际上传位置。**

### 为什么选择jsDelivr

jsDelivr不需要注册，免费，快速简单,改图片链接的域名就行了，Picgo里面直接就能改。和cloudflare一样是CDN，适合作为图床的CDN。只要 GitHub 仓库是 `public`，文件路径正确，就可以通过 jsDelivr 的规则访问。

---

## 三，替换与配置

### 替换和增加的CDN URL格式

前面我Picgo里面已经配置好了path，下面只用写username,reponame和branch就可以了。
格式为
```
https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/
```

我自己的为例
```
https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main
```

### 对已上传图片的替换

之前已经上传了图片，但是没有改CDN域名的。在Obsidian里面可以用`Ctrl + H`批量改

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin-b/20260629200533892.png)
> 上面输入的是要查找即替换前的内容，下面输入替换后的内容，最后全部替换即可

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin-b/20260629200726851.png)
> 替换后

### 配置Picgo本体

在想要改的对应的配置文件里加就可以了

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin-b/20260629201012543.png)

### 立刻生效性

把 Markdown 里的链接从 GitHub raw 改成 jsDelivr是立即生效，渲染时会请求新的 CDN 地址。

把 GitHub 仓库里的同名图片替换掉，换成了新图，由于CDN缓存问题，jsDelivr 不会立刻刷新。

---

