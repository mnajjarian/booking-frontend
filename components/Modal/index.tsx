const Modal = (props) => (
    <div className="modal">
        <div className="modal__content">
            {props.children}     
        </div>
    </div>
);

export default Modal;