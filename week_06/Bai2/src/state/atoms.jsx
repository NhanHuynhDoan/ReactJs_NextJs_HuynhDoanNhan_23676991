import { atom } from "recoil";

export const counterAtom = atom({
    key: "counterAtom",
    default: 0
});

export const themeAtom = atom({
    key: "themeAtom", 
    default: localStorage.getItem('theme') || "light"
});