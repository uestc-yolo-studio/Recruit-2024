import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Yolo Recruit",
  description: "Yolo 工作室 2024 招新",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
