import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores";

export const AccessButton = () => {
  const [text, setText] = useState("hi");
  const $isModalOpen = useStore(isModalOpen);

  const openTab = () => {
    console.log("hi");
    setText("hello");
  };

  return (
    <>
      <button onClick={() => isModalOpen.set(!$isModalOpen)} className="cta">
        Gain access
      </button>
    </>
  );
};
