
import * as ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css';


const Backdrop = (props) => {
    console.log(classes)
    return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = props => {
    console.log(classes)
    const portalElement = document.getElementById('overlays');
    return (<Fragment>
        {ReactDOM.createPortal(<Backdrop  onClick={props.onCloseModal}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>)
}

export default Modal;