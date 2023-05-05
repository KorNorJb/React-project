import { useState, useEffect } from 'react'
import styles from '../styles/Todo_Block.module.scss'
import { supabase } from '../supabaseClient';


function Todo_Block({ todo, setTodo, Delete, Done, Edit, setModalActive, modalActive }) {
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchTodo = async () => {
            const { data, error } = await supabase
                .from('Tasks')
                .select()

            if (error) {
                setFetchError('Could not fetch the Tasks')
                setTodo(null)
                console.log(error);
            }
            if (data) {
                setTodo(data)
                setFetchError(null)
            }
        }

        fetchTodo()
    }, [])
    return (
        <>
            {fetchError && (<p>{fetchError}</p>)}
            {todo && (<div className={styles.list}>
                <h1 className={styles.title}>List</h1>
                <div className={styles.list__block} >
                    {
                        todo?.map((item) =>
                            <div className={styles.list__item} key={item.id}>
                                <p className={item.done ? styles.done : ''}>{item.name}</p>
                                <div className={styles.list__btns}>
                                    <button className={[styles.btn, styles.edit].join(" ")} onClick={() => { setModalActive(true); console.log(modalActive); console.log(item.id) }}>✎</button>
                                    <button className={[styles.btn, styles.delete].join(" ")} onClick={() => Delete(item.id)}>✖</button>
                                    <button className={[styles.btn, styles.done__btn].join(" ")} onClick={() => Done(item.id)}>✓</button>
                                </div>
                            </div>
                        ).reverse()
                    }

                </div>
            </div >)}
        </>
    )
}

export default Todo_Block
