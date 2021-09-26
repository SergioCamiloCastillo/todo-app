import React, { useState, useEffect } from 'react'
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";

const initialTodos = [
    {
        id: 1,
        title: "Todo numero 1",
        description: "DEscription numero 1",
        completed: false
    }, {
        id: 2,
        title: "Todo numero 2",
        description: "DEscription numero 2",
        completed: true
    }

];
const localTodos = JSON.parse(localStorage.getItem('todos'));
export default function App() {

   

    const [todos, setTodos] = useState(localTodos || initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const todoToogleCompleted = (todoId) => {

        const changeTodos = todos.map(todo => (
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        ))
        setTodos(changeTodos);
    }
    const todoAdd = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        const changeTodos = [
            newTodo,
            ...todos

        ]
        setTodos(changeTodos);
    }
    const todoDelete = (todoId) => {
        if (todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null);
        }
        const changeTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changeTodos);
    }
    const todoUpdate = (todoEdit) => {
        const changedTodos = todos.map((todo) => (
            todo.id === todoEdit.id ? todoEdit : todo
        ))
        setTodos(changedTodos);
    }
    return (
        <div className=''>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div className="bg-white  p-6 m-4 w-full lg:w-3/4">
                    {
                        todos.length === 0
                        &&
                        (
                            <div>No hay tareas. Porfavor agrega una.</div>
                        )
                    }
                    <TodoForm setTodoEdit={setTodoEdit} todoUpdate={todoUpdate} todoEdit={todoEdit} todoAdd={todoAdd} />
                    {
                        todos.map(todo =>
                            <TodoList setTodoEdit={setTodoEdit} todoToogleCompleted={todoToogleCompleted} todoDelete={todoDelete} key={todo.id} todo={todo} />

                        )
                    }


                </div>
            </div>
        </div>
    )
}
