import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores";

const Modal = () => {
  const $isModalOpen = useStore(isModalOpen);

  return $isModalOpen ? (
    <div className="fixed z-20 inset-0 glass flex justify-center items-center">
      <div className="box-static relative">
        <i
          className="fa-solid fa-xmark absolute top-1 right-1 cursor-pointer"
          onClick={() => isModalOpen.set(!$isModalOpen)}
        ></i>
        <h1
          className="text-xl font-bold
        "
        >
          Gain access
        </h1>
        <div>
          <p>secret code</p>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
