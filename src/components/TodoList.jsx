'use client'
import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import Image from 'next/image'


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setNewTodo(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos)
    }

    return (
        <section className='py-32'>
            <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg border border-blue-400">
                <div className='flex justify-end items-center border-b-2 border-blue-500 mb-2'>
                    <Image src='/zeke logo.png' alt='' width={80} height={80} />
                    
                    <h1 className="text-2xl font-bold mb-4 text-center">Zeke Todo List</h1>
                </div>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Insert your daily task here"
                        className="flex-grow p-2 border-b-2 border-l-2 border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </div>

                <ul className="space-y-2">
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-2 border rounded-md ${todo.completed ? 'bg-green-100' : 'bg-white'
                                }`}
                        >
                            <div className="flex items-center">

                                <span className={`${todo.completed ? 'line-through' : ''}`}>
                                    {todo.text}
                                </span>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(index)}
                                    className="mr-2"
                                />
                                <button
                                    onClick={() => deleteTodo(index)}
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                    <MdDeleteForever className='text-md' />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TodoList