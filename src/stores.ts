import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const isModalOpen = atom(false);

export const secretKey = atom("poop");

export const authorized = persistentAtom("false");
