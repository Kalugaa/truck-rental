import ReactDOM from "react-dom";

export const ModalPortal = ({ children }) => {
    const modalRoot = document.getElementById("modal-root");
    return ReactDOM.createPortal(children, modalRoot);
};

