import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores";

export const AccessButton = () => {
  const $isModalOpen = useStore(isModalOpen);

  return (
    <>
      <button onClick={() => isModalOpen.set(!$isModalOpen)} className="cta">
        Gain access
      </button>
    </>
  );
};
