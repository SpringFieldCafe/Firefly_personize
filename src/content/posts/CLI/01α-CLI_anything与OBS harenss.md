---
title: 01-CLI_anything与OBS
publish: 2026-07-08
pinned: false
draft: false
description: 使用CLI_anything操控OBS
tags: [agents与CLI]
category: Agents
---

使用CLI的目的：

如果只是让 Agent 搭 OBS 场景，可以用 CLI-Anything 官方 OBS harness；

如果要让 Agent 实时开始录制某个窗口，应该通过 OBS 28+ 内置的 obs-websocket，再封装一个 CLI/MCP 工具给 Agent 调用。CLI-Anything 负责理解和调用，obs-websocket 负责真正控制 OBS。

α篇记录怎么用 CLI-anything 的官方 harness。

# 01-CLI_anything与OBS

CLI-Anything项目地址：[HKUDS/CLI-Anything: "CLI-Anything: Making ALL Software Agent-Native" ](https://github.com/HKUDS/CLI-Anything)

CLI-Anything OBS harness[OBS harness](https://github.com/HKUDS/CLI-Anything/tree/main/obs-studio/agent-harness)

其他教程：[CLI-Anything：一行命令让所有软件支持 AI 自动化，Qwen CLI 直接封神CLI-Anything 保姆 - 掘金](https://juejin.cn/post/7617137848920457268)

前提：

**安装claude code**

## 第一步：安装并配置CLI_anything

按照快速开始里面的配置，下好插件

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708165635392.png)

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708164947573.png)

## 第二步 : 获取CLI-Anything的官方harness

本篇先测试 CLI-Anything 官方 OBS harness。它的作用是用 CLI 生成/编辑 OBS 场景配置 JSON

它不会直接启动 OBS，也不会实时控制 OBS。实时控制要用 OBS 28+ 内置的 obs-websocket 来做。

克隆repo，并且通过Anaconda 配置环境。
```Powershell
git clone https://github.com/HKUDS/CLI-Anything.git
cd CLI-Anything
```

```
conda create -n cli-anything-obs python=3.11 -y
conda activate cli-anything-obs
```

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708190855265.png)

```
python -m pip install -e .\obs-studio\agent-harness
```

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708191438675.png)

通过help参数看命令

```
cli-anything-obs-studio --help
```

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708192509353.png)

## 第三步：实验

根据下面命令来测试，产生的 Json 文件会在当前的文件夹里面，我换了个文件夹

```
cli-anything-obs-studio project new --name "obs_window_demo" -o project.json
cli-anything-obs-studio --project project.json scene add --name "Window Recording"
cli-anything-obs-studio --project project.json source add window_capture --name "Target Window" --scene 1
cli-anything-obs-studio --project project.json source add text --name "Title" --scene 1 --position 40,40 --size 600x80 --setting text="Window Recording Demo"
cli-anything-obs-studio --project project.json output recording --format mp4 --quality high
cli-anything-obs-studio --project project.json project info
cli-anything-obs-studio --project project.json project json
```

![image.png](https://cdn.jsdelivr.net/gh/SpringFieldCafe/blog@main/CLI_Anything/OBS/20260708193545997.png)

这个生成的 JSON 文件是专门给智能体用的，可以认为为这是OBS 自动化的“配置草稿”或“中间表示”。

Agent 可以通过 CLI-Anything harness 生成它，从而把“创建场景、添加窗口采集、设置录制参数”这些意图结构化保存下来。

但它本身不能直接导入 OBS，也不能直接控制 OBS 推流或录制。

真正要让 OBS 动起来，还需要通过 obs-websocket 。