import { Overlay, StyledModal, StyledCancelSVG } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { modalContext } from 'contexts/context';
import ClientForm from 'components/ClientForm/ClientForm';

const modalRoot = document.getElementById('modal-root');

const Modal = () => {
    const { isAddClientBtn, toggleModal, disableButtons } =
        useContext(modalContext);

    const currentAction = isAddClientBtn ? 'addClient' : 'editClient';

    const renderModalMarkup = () => {
        return (
            <StyledModal>
                <StyledCancelSVG
                    onClick={() => {
                        toggleModal();
                        disableButtons();
                    }}
                />
                <ClientForm formType={currentAction} />
            </StyledModal>
        );
    };

    return createPortal(<Overlay>{renderModalMarkup()}</Overlay>, modalRoot);
};

export default Modal;
