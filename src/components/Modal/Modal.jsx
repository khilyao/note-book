import { Overlay, StyledModal } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { modalContext } from 'contexts/context';
import ClientForm from 'components/ClientForm/ClientForm';
import Button from 'components/Button/Button';

const modalRoot = document.getElementById('modal-root');

const Modal = () => {
    const { isEditClientBtn, isAddClientBtn, toggleModal } =
        useContext(modalContext);

    const renderModalMarkup = () => {
        if (isAddClientBtn) {
            return (
                <StyledModal>
                    <Button onClick={toggleModal} />
                    <ClientForm formType={'addClient'} />
                </StyledModal>
            );
        }

        if (isEditClientBtn) {
            return (
                <StyledModal>
                    <Button onClick={toggleModal} />
                    <ClientForm formType={'editClient'} />
                </StyledModal>
            );
        }
    };

    return createPortal(<Overlay>{renderModalMarkup()}</Overlay>, modalRoot);
};

export default Modal;
