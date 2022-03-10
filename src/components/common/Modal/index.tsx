import "./styles.scss";
import { InputComponent } from "../Input";
import { useState } from "react";

const ModalComponent = ({
  setOpenModal,
  handleUpdateModal,
  itemModal,
}: any) => {
  const [itemEdit, setItemEdit] = useState({
    local: itemModal.local,
    meta: itemModal.meta,
  });

  return (
    <>
      <div className="modal-overlay" onClick={() => setOpenModal(false)}></div>
      <div className="modal">
        <div className="modal__modal-header">
          <InputComponent label="Local" state={{value:itemEdit, action: setItemEdit}} color="#000" shadow />
          <InputComponent data label="Meta" state={{value:itemEdit, action: setItemEdit}} color="#000" shadow />
        </div>

        <div className="modal__modal-body">
          <button
            className="modal__modal-body__button modal__modal-body__button--cancel"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </button>
          <button className="modal__modal-body__button modal__modal-body__button--save"
            onClick={() => handleUpdateModal({
              ...itemModal,
              local: itemEdit.local,
              meta: itemEdit.meta,
            })}
          >
            Salvar
          </button>
        </div>
      </div>
    </>
  );
};

export { ModalComponent };
