import { atom } from "nanostores";

export const $currentDate = atom<string>(new Date().toISOString());
