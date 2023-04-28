import { useState } from "react";

export const AccessButton = () => {
  const [text, setText] = useState("hi");

  const openTab = () => {
    console.log("hi");
    setText("hello");
  };

  return (
    <>
      <button onClick={openTab} className="cta">
        Gain access
      </button>
    </>
  );
};
