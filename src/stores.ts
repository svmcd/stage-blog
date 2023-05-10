import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const isModalOpen = atom(false);

const key = import.meta.env.PUBLIC_KEY;

export const secretKey = atom(key);

export const authorized = persistentAtom("false");
