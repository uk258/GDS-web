import { atom } from "recoil";

// 固定状态
export const authPageState = atom({
  key: "authPageState",
  default: "login", // 默认显示登录
});