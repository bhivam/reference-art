import { forwardRef } from "react";
import "../styles/dialog.css";

const Contact = forwardRef<HTMLDialogElement>((props, ref) => (
  <dialog ref={ref} className="contact-modal rounded-xl max-w-4xl p-4 absolute m-auto left-0 right-0 bottom-0 top-0">
    <button className="absolute right-1 top-1 transition ease-out hover:fill-pink-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#0xeeeeee"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
    <h2>contact</h2>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laudantium
    voluptate harum repellat libero maxime sequi possimus ut sint? Illo
    laudantium dignissimos delectus quas cupiditate cum magnam autem adipisci
    expedita.
  </dialog>
));

export default Contact;
