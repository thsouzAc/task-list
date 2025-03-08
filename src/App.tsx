import './App.css'

import {MdDelete} from 'react-icons/md';
import { useTodos } from "./hooks/useTodos";
import { CiMemoPad } from 'react-icons/ci';
import "./styles/App.css"

const App = ( ) => {

  const { value, todos, onChange, onKeyDown, onToggle, onRemove } = useTodos();
  
  return (
    <section id = "App" className='container'>
      <CiMemoPad className="icon-top-right" />
      <CiMemoPad className="icon-bottom-left" />
        <header>
          <h1 className='title'> Task list </h1>
        </header>
    <section className='main'>
        <input 
          className='new-todo' 
          placeholder='qual tarefa que você quer listar?'
          value = {value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul  className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span 
              className={['todo', todo.check ? 'check' : ''].join(' ')}
              onClick={()=> onToggle(todo)}
              onKeyPress={() => onToggle(todo)}
              >{todo.title}</span>
                <button 
                className='remove'
                type='button'
                onClick={()=> onRemove (todo) }>
                  <MdDelete size = {28} />
                </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
export default App
