import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "招新题",
    icon: "circle-info",
    prefix: "/recruit/",
    children: [
      {
        text: "frontend",
        link: "/recruit/frontend.md",
      },
      {
        text: "backend",
        link: "/recruit/backend.md",
      },
    ]
  }
]);
