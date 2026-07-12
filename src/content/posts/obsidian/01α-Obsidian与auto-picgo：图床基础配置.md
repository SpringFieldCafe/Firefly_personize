---
title: 01α-Obsidian与auto-picgo：图床基础配置
published: 2026-06-27
pinned: false
description: 配置Picgo图床以及插件
tags: [Obsidian]
category: Obsidian笔记


---


# 01α-Obsidian与auto-picgo：图床基础配置
## 一，前言
通过picgo云存储图片，以便文章进行移植和保存。

如果只是个人在 Obsidian 中~~瞎写~~，并不需要用 PicGo。直接使用 Obsidian 把图片统一存放在一个专门的图片文件夹中，再通过相对路径引用即可。

如果想折腾的话，可以设为 `private`，但这些图片链接不适合作为公开文章的外链使用，因为外部平台无法直接访问`private`仓库中的图片。

如果像我一样需要将文章发布到公开平台，图片必须放在公网可访问的位置。用 GitHub 作为图床时，一定要将图床仓库设为 `public`。

==**不下载Picgo本体无法使用Obsidian上的Picgo插件**==

---

## 二，下载安装Picgo本体

### 下载

[官方主页](https://picgo.app/)

[github下载发布页](https://github.com/Molunerfinn/PicGo/releases)

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/download.png)
>直接进入发布页下载最新对应操作系统和cpu架构版本就行，Windows一般选红框内的

## 安装

下载完直接默认安装即可，可以改路径

建议为所有用户安装

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/setup.png)

---

## 三，配置Picgo

### 建立代码仓库

直接自己创造一个仓库就行了，跟平常的代码仓库无异，流程都是一样的，就是要给Picgo token

打开个人github页面

https://github.com/settings/

### 设置访问权限

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/developer_settings.png)
> 点击developer settings

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token1.png)

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token2.png)

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token3.png)
>按顺序generate

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token4.png)

### 配置Picgo

打开Picgo，为github图床设置，这里的用户是自己的GitHub账户

如果要在同一仓库里面给多个文章放图片，建议按下面的例子多创几个不同的配置文件，这样可以分别传送。

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/picgo1.png)

设置好后切换到首页，切回刚刚的配置，直接上传就可以

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/Picgo2.png)

上传完毕以后，就可以直接在Gallery看自己刚刚上传的图片，而且还可以复制 URL。

### 复制URL

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/Picgo3.png)
>这样选择复制出来是符合markdown语法的URL

```markdown
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token4.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token3.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token2.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/token1.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/setup.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/Picgo2.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/picgo1.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/download.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/developer_settings.png)
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/show1.png) 
![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/Picgo3.png)
```


复制图床链接效果如下

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/show1.png)

**删除Gallery 里面的图片只会删除 Picgo 本体在Gallery显示的图片，不会删除对应图床Github仓库里面的图片。**


---

## 四，auto-Picgo插件

### 安装启用插件

**这里我自己尝试使用链接，在知乎等平台只会显示![[]],下面会给原文**
![[00-Obsidian与auto-git#关闭安全模式与寻找第三方插件]]



![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/GitPlugin/setting.png)

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/GitPlugin/plugin1.png)

![](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/plug1.png)

跟之前git插件启用方式是一样的 ,不赘述

![[00-Obsidian与auto-git#下载安装git插件]]

### 设置插件

打开插件设置

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629095559302.png)

根据电脑上自己的上传器选择对应的版本。我这里电脑上是 Picgo，就选择 Picgo 本体。

其他保持默认即可。如果自己Picgo本体端口号改变了，就去对应的 PickGo 文件设置里面看一下自己的端口号，并改成对应的端口。

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629095834179.png)

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629095347434.png)


效果如下：

粘贴图片后，插件会先插入一个 uploading 临时链接。

上传完成后，临时链接会被替换成 GitHub 图床的 Markdown 图片链接。

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629095930393.png)

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629095937041.png)

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/obsidian_public/obsidian/PicgoPlugin/20260629100045003.png)

如果你想放在不同的图床，==**一定要改Picgo图床配置**==，不然每次粘贴的时候图片都上传到同一个图床。

**只有粘贴到 Obsidian的Markdown文章 里面，这个图片才会自动上传到图床。如果你粘贴到其他的应用文件里面，是不会自动上传的。**