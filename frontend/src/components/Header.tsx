import { useEffect, useRef } from "react";
import "../styles/header.css";
import Contact from "./Contact";
import Tutorial from "./Tutorial";

export default function Header() {
  const contactRef = useRef<HTMLDialogElement>(null);
  const tutorialRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const contact = contactRef.current;
    const tutorial = tutorialRef.current;

    if (!contact || !tutorial) return;

    const closeContact = () => {
      contact.close();
      contact.classList.remove("visible");
    };

    const closeTutorial = () => {
      tutorial.close();
      tutorial.classList.remove("visible");
    };

    const closeContactBtn = contact.querySelector(
      "button"
    ) as HTMLButtonElement;
    const closeTutorialBtn = tutorial.querySelector(
      "button"
    ) as HTMLButtonElement;

    if (closeContactBtn)
      closeContactBtn.addEventListener("click", closeContact);
    if (closeTutorialBtn)
      closeTutorialBtn.addEventListener("click", closeTutorial);

    return () => {
      if (closeContactBtn)
        closeContactBtn.removeEventListener("click", closeContact);
      if (closeTutorialBtn)
        closeTutorialBtn.removeEventListener("click", closeTutorial);
    };
  }, []);

  const handleShowModal = (modalRef: React.RefObject<HTMLDialogElement>) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      modalRef.current.classList.add("visible");
    }
  };

  return (
    <>
      <header className="pl-4 pr-4 pt-2 top-0 bg-zinc-950 z-50">
        <ul className="flex gap-4 text-gray-50 items-center">
          <li className="font-bold text-5xl flex gap-1">
            <img src="logo.png" alt="" className="max-h-10"/>
            <h1>PosePal</h1>
          </li>
          <li className="ml-auto text-sm">
            <button onClick={() => handleShowModal(tutorialRef)}>
              Tutorial
            </button>
          </li>
          <li className="text-sm">
            <button onClick={() => handleShowModal(contactRef)}>Contact</button>
          </li>
        </ul>
      </header>
      <Contact ref={contactRef} />
      <Tutorial ref={tutorialRef} />
    </>
  );
}
