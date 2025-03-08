import './App.css'
import { useState } from 'react'

import {MdDelete} from 'react-icons/md';

const App = ( ) => {
  const [value, setValue] = useState<string>('');
  
  const inicialTodos = [
    { id : 1, title : 'Aprender Inglês', check: false},
    { id : 2, title : 'Aprender Dirigir', check: true},
    { id : 3, title : 'Aprender Pilotar', check: false},
    { id : 4, title : 'Aprender Docker', check: false},
  ];

  const [todos] = useState(inicialTodos);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const submit = () => {
    console.log("submit", value);
    erase();
  }
  const erase = () => {
    setValue('');
  }
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ( event.key === 'Enter' ) {
      submit();
      erase();
    } else if ( event.key === 'Escape' ) {
      erase();
    }

  }
  return (
    <section id = "App" className='container'>
        <header>
          <h1 className='title'> ToDo </h1>
        </header>
    <section className='main'>
        <input 
          className='new-todo' 
          placeholder='qual tarefa que você quer listar?'
          value = {value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className='todo'>{todo.title}</span>
                <button 
                className='remove'
                type='button'>
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
