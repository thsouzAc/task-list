import './App.css'
import { useState } from 'react'

import {MdDelete} from 'react-icons/md';


interface Todo {
  id: number;
  title: string;
  check: boolean;
}


const App = ( ) => {


  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const submit = () => {

    if (value.trim() === "") return; // impede do que tarefas vazias sejam adicionadas na lista todos.
    console.log("submit", value);
    
    setTodos([...todos, { 
      id : new Date().getTime(), 
      title : value, 
      check: false}])
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

  const onToggle = (todo: Todo) => {
    setTodos(
      todos.map((obj) =>
        (obj.id === todo.id ? { ...obj, check: !todo.check } : obj)
      )
    );
    console.log('toggle', todos);
  };
  
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
