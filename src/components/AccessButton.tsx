import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores";
import { authorized } from "../stores";

export const AccessButton = () => {
  const $isModalOpen = useStore(isModalOpen);
  const $authorized = useStore(authorized);

  return $authorized === "true" ? null : (
    <>
      {
        <button onClick={() => isModalOpen.set(!$isModalOpen)} className="cta">
          Gain access
        </button>
      }
    </>
  );
};
