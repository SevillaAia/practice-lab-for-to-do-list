import React, { useState } from 'react'
import generateShortId from '../utils/generateShortId'
    
function Cards() {
  const [todos, setTodos] = useState([
            {id: 1, list: "Grocery", time: "09:30"},
            {id: 2, list: "Work", time: "10:30"},
            {id: 3, list: "Meeting", time: "13:00"},
            {id: 4, list: "Gym", time: "17:30"},
            {id: 5, list: "Call Kyle", time: "18:30"},
            {id: 6, list: "Dinner Date", time: "20:00"}
        ]);

  const [newList, setNewList] = useState('');
  const [newTime, setNewTime] = useState('');

  const addTodo = () => {
    const trimmed = newList.trim();
    if (!trimmed) return;
    const newTodo = { id: generateShortId(), list: trimmed, time: newTime };
    setTodos(prev => [...preconnect, newTodo]);
    setNewList('');
    setNewTime('');
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }


  return (
    <div className='card-container'>
            <p>Today list</p>

            <div className='add-todo'>
            <input value={newList} placeholder='What to do?' onChange={e => setNewList(e.target.value)} />

            <input value={newTime} placeholder='Time' onChange={e => setNewTime(e.target.value)} />
            <button className='add' onClick={addTodo}>Add</button>
          </div>

           {todos.map((todo) => (
             <div key={todo.id} className='todo-card'>
                <p>{todo.list}</p>
                <p>{todo.time}</p>
                <button className='delete' onClick={() => deleteTodo(todo.id)}>
                    del
                </button>
            </div>
           ))}
       
    </div>
  )
}

export default Cards;