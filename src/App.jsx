// Database name: Todo
// Database password: qmJMcDcNqkV2ZYeB
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

// Components
import Input_Block from './components/Input_Block'
import Todo_Block from './components/Todo_block'
import ModalWindow from './components/ModalWindow'

//Style
import styles from './styles/global.module.scss'

function App() {
  // Constants
  const [name, setName] = useState('')
  const [todo, setTodo] = useState([])
  const [modalActive, setModalActive] = useState(false)

  // FUNCTIONS

  function Addtodo(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 99999999),
      name,
      done: false
    }
    setTodo([...todo, newTodo])
    console.log(name);
    console.log(supabase);
  }

  function Delete(id) {
    const filtered = todo.filter((item) => item.id != id)
    setTodo(filtered)
  }

  function Edit(e, id, name) {
    e.preventDefault()
    const filtered = todo.map((item) => {
      return item.id === id ? { ...item, name } : item
    })
    setTodo(filtered)
    console.log(filtered);
  }

  function Done(id) {
    const filtered = todo.map((item) => {
      return item.id === id ? { ...item, done: true } : item
    })
    setTodo(filtered)
    console.log(todo);
  }

  return (
    <div className={styles.Ochko}>
      <Input_Block Addtodo={Addtodo} setName={setName} />
      <Todo_Block todo={todo} setTodo={setTodo} Delete={Delete} Done={Done} Edit={Edit} setModalActive={setModalActive} modalActive={modalActive} />
      {modalActive && <ModalWindow active={modalActive} setModalActive={setModalActive} modalActive={modalActive} Edit={Edit} setName={setName} />}
    </div>
  )
}

export default App
