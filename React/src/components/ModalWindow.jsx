import React from "react";
import styles from "../styles/ModalWindow.module.scss"

function ModalWindow({ setModalActive, Edit, setName }) {
    return (
        <div className={styles.modal} onClick={() => setModalActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <h1>Edit</h1>
                <form className={styles.modal__form} onSubmit={Edit}>
                    <input type="text" placeholder="Your task" className={styles.inpt} onChange={(e) => setName(e.target.value)} />
                    <button className={styles.btn} type="submit" >Change</button>
                </form>
            </div>
        </div>
    )
}

export default ModalWindow