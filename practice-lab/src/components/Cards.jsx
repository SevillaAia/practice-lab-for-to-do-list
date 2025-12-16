import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
    
function Cards() {
  const [todos, setTodos] = useState([
            {id: 1, list: "Grocery", time: "09:30 AM"},
            {id: 2, list: "Work", time: "10:30 AM"},
            {id: 3, list: "Meeting", time: "13:00 PM"},
            {id: 4, list: "Gym", time: "17:30 PM"},
            {id: 5, list: "Call Kyle", time: "18:30 PM"},
            {id: 6, list: "Dinner Date", time: "20:00 PM"},
        ]);

  const [newList, setNewList] = useState('');
  const [newTime, setNewTime] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editList, setEditList] = useState('');
  const [editTime, setEditTime] = useState('');

  const addTodo = () => {
    const trimmed = newList.trim();
    if (!trimmed) return;
    const newTodo = { id: uuidv4(), list: trimmed, time: newTime };
    setTodos(prev => [newTodo, ...prev]);
    setNewList('');
    setNewTime('');
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditList(todo.list);
    setEditTime(todo.time);
  }

  const cancelEdit = () => {
    setEditingId(null);
    setEditList('');
    setEditTime('');
  }

  const saveEdit = (id) => {
    const trimmed = editList.trim();
    if (!trimmed) return;
    setTodos(prev => prev.map(t => t.id === id ? { ...t, list: trimmed, time: editTime } : t));
    cancelEdit();
  }


  return (
    <div className='card-container'>
            <p>Today list</p>

            <div className='add-todo'>
            <input value={newList} placeholder='What to do?' onChange={e => setNewList(e.target.value)} />

            <input value={newTime} placeholder='e.g. 09:00 AM' onChange={e => setNewTime(e.target.value)} />
            <button className='add' onClick={addTodo}>Add</button>
          </div>

           {todos.map((todo) => (
             <div key={todo.id} className='todo-card'>
                {editingId === todo.id ? (
                  <>
                    <input value={editList} onChange={e => setEditList(e.target.value)} />
                    <input value={editTime} onChange={e => setEditTime(e.target.value)} />
                    <button className='save' onClick={() => saveEdit(todo.id)}>Save</button>
                    <button className='cancel' onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p>{todo.list}</p>
                    <p>{todo.time}</p>
                    <button className='update' onClick={() => startEdit(todo)}>Edit</button>
                    <button className='delete' onClick={() => deleteTodo(todo.id)}>
                        del
                    </button>
                  </>
                )}
            </div>
           ))}
       
    </div>
  )
}

export default Cards;