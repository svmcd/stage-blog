import { useStore } from "@nanostores/react";
import { isModalOpen } from "../stores";

const Modal = () => {
  const $isModalOpen = useStore(isModalOpen);

  return $isModalOpen ? (
    <div className="fixed z-20 inset-0 glass flex justify-center items-center">
      <div className="box-static relative max-w-md flex flex-col gap-6">
        <i
          className="fa-solid fa-xmark absolute top-5 text-stone-400 text-xl right-5 cursor-pointer"
          onClick={() => isModalOpen.set(!$isModalOpen)}
        ></i>
        <h1
          className="text-xl font-bold
        "
        >
          Gain access
        </h1>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="key">
            Fill in the secret key in order to get access to the blog content
          </label>
          <input className="input" type="text" id="key" />
        </div>
        <div className="flex gap-4 mt-2">
          <button className="cta2">Submit</button>
          <button
            className="cta3"
            onClick={() => isModalOpen.set(!$isModalOpen)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
