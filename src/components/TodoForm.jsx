import React, { useState, useEffect } from 'react'
const initialFormValues =
{
    title: "",
    description: ""
}

export default function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);

        }else{
            setFormValues(initialFormValues)
        }
    }, [todoEdit])

    const handleInputChange = (e) => {
        const changeFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changeFormValues);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //agregar tarea
        if (title.trim() === '') {
            setError("Debes indicar un titulo");
            return;
        } else if (description.trim() === '') {
            setError("Debes indicar una descripcion");
            return;
        }

        else {
            if (todoEdit) {
                todoUpdate(formValues);
                setError(null);
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000);
                setSuccessMessage("Actualizado correctamente");
            } else {
                todoAdd(formValues)
                setFormValues(initialFormValues)
                setError(null);
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000);
                setSuccessMessage("Registrado correctamente");
            }


        }

    }
    return (

        <>
            <div className="mb-4">
                <h1 className="text-grey-darkest">{todoEdit ? 'Editar tarea' : "Agregar tarea"}</h1>
                {
                    todoEdit && (<button onClick={()=>setTodoEdit(null)} className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
                        Cancelar edicion
                    </button>)
                }

                <form onSubmit={handleSubmit}>
                    <input onChange={handleInputChange} name="title" value={title} className="w-full shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Titulo" />
                    <textarea onChange={handleInputChange} name="description" value={description} placeholder='Descripcion' className="shadow appearance-none border rounded mt-2 mb-2 w-full py-2 px-3 mr-4 text-grey-darker"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        {todoEdit ? "Actualizar tarea" : "Agregar tarea"}
                    </button>
                </form>
                <div>{error ? (error) : (successMessage)}</div>

            </div>
        </>
    )
}
