import classes from './Modal.module.scss';

const Modal = ({closeModal}) => {
    return (
    <div className={classes.modalBackground}>

        <div className={classes.modalContainer}>
            <button onClick={() => closeModal(false)} className={classes.btn}> Close </button>
            <div className={classes.title}>
                <h1>Please, report us your problem</h1>
            </div>
            <div className={classes.body}>
                <textarea rows={5} className={classes.reportInput}></textarea>
            </div>
            <div className={classes.footer}>
                <button onClick={() => closeModal(false)} className={classes.btn}>Cancel</button>
                <button className={`${classes.btn} ${classes.btn_primary}`}> Continue </button>
            </div>
        </div>
    </div>
    );
}


export default Modal;