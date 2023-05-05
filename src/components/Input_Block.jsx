import React, { useState, useEffect } from 'react'
import styles from '../styles/Input_Block.module.scss'
function Home({ Addtodo, setName }) {
    return (
        <form className={styles.main} onSubmit={Addtodo}>
            <h1 className={styles.title}>To-Do list on ReactJs</h1>
            <input type="Add new Todo" className={styles.inpt} onChange={(e) => setName(e.target.value)} />
            <button type='submit' className={styles.btn}>Add</button>
        </form>
    )
}

export default Home
