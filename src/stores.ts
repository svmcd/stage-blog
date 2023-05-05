import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const isModalOpen = atom(false);

export const secretKey = atom("123");

export const authorized = persistentAtom("false");
