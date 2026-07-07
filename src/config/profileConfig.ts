import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/eat.png",

	// 名字
	name: "Fly me to moon",

	// 个人签名
	bio: "今、私、少しだけ夢に近づきました！",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/SpringFieldCafe",
			showName: false,
		},
		{
			name: "Zhihu",
			icon: "simple-icons:zhihu",
			url: "https://www.zhihu.com/people/a-zhe-31-50",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/493693137",
			showName: false,
		},
		{
			name: "Gitee",
			icon: "fa7-brands:gitee",
			url: "https://gitee.com/h-keduoli-q",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:2574703489@qq.com",
			showName: false,
		},
		{
			name: "CSDN",
			icon: "simple-icons:csdn",
			url: "https://blog.csdn.net/qq_40328089",
			showName: false,
		},

		{
			name: "Juejin",
			icon: "simple-icons:juejin",
			url: "https://juejin.cn/user/656823220448042",
			showName: false,
		},
		{
			name: "XiaoHongShu",
			icon: "simple-icons:xiaohongshu",
			url: "https://www.xiaohongshu.com/user/profile/95699968815",
			showName: false,
		},
		{
			name: "douyin",
			icon: "simple-icons:tiktok",
			url: "https://www.douyin.com/user/你的抖音ID",
			showName: false,
		},
	],
};
