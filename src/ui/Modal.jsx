import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import Button from "./Button";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] mx-4 p-6 space-y-4 overflow-auto">
        <div className="flex justify-end">
          <Button
            onClick={close}
            styleType={"none"}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <HiXMark className="w-6 h-6 text-gray-600" />
          </Button>
        </div>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
