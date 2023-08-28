import { atom } from "recoil";

export const firstInputState = atom<string>({
  key: "firstInputState",
  default: "",
});
export const secondInputState = atom<string>({
  key: "secondInputState",
  default: "",
});
export const thirdInputState = atom<string>({
  key: "thirdInputState",
  default: "",
});
export const typeState = atom<number>({
  key: "typeState",
  default: 1,
});
