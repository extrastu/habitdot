import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "习惯点点",
  description: "持续不断打卡，意义自然浮现",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "帮助", link: "/intro" },
    ],

    sidebar: [
      {
        text: "简介",
        link: "/intro",
      },

      {
        text: "会员活动",
        items: [{ text: "免费领会员", link: "/gift" }],
      },
      {
        text: "常见问题",
        items: [{ text: "如何添加小组件", link: "/widget" }],
      },
      {
        text: "服务协议",
        items: [
          { text: "隐私协议", link: "/privacy_policy" },
          { text: "用户协议", link: "/user_policy" },
        ],
      },
    ],
    footer: {
      copyright: "©️2024 习惯点点 · <a href='https://beian.miit.gov.cn/'>沪ICP备17043019号-6</a>  ",
    },
  },
});
