import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
function Home() {
    const [todo, setTodo] = useState("")
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>To-Do list on ReactJs</h1>
            <div className="input__block">
                <input type="text" name="todo" id="todo_inp" placeholder='Add a new todo' className={styles.inpt} onChange={(e) => {
                    setTodo(e.target.value);
                }} />
                <button id='todo_inp' className={styles.btn}>Add</button>
            </div>
        </div>
    )
}

export default Home
