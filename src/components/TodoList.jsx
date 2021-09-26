import React from 'react'


export default function TodoList({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) {

    return (
        <>
            <div className="rounded shadow mb-4 items-center p-5">
                <div className='flex'>
                    <div className='w-3/5'>
                        <p className="w-full text-grey-darkest text-2xl font-bold">{todo.title}</p>
                        <p className='w-full text-grey-darkest text-xl'>{todo.description}<button onClick={() => todoToogleCompleted(todo.id)} className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-300" type="submit">{todo.completed ? 'Terminado' : 'Terminar'}</button>
                        </p>

                    </div>
                    <div className='w-2/5'>
                        <div className='flex space-x-3   justify-end '>
                            <button onClick={() => setTodoEdit(todo)} className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-300" type="submit">Editar</button>
                            <button onClick={() => todoDelete(todo.id)} className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-300" type="submit">Delete</button>
                        </div>

                    </div>

                </div>




            </div>
        </>
    )
}
