import { Overlay, StyledModal } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = () => {
    return createPortal(
        <Overlay>
            <StyledModal>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere totam animi consequatur deserunt perferendis repellat
                    eaque, earum velit culpa blanditiis?
                </p>
            </StyledModal>
        </Overlay>,
        modalRoot
    );
};

export default Modal;
