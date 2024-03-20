import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

export const OpenModal = ({ item, onRequestClose, isOpen }) => {
  return (
    <Modal
      className={css.modalcontent}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        {item && (
          <img
            className={css.modalimg}
            src={item.urls.regular}
            alt={item.description}
          />
        )}
        <button onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};
