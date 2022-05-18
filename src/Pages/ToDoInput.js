import React, { useState } from 'react';

const ToDoInput = ({ setTitle, setDescription, title, description, todoList, setTodoList }) => {



    const titleHandler = e => {
        setTitle(e.target.value)
    };

    const descriptionHandler = e => {
        setDescription(e.target.value)
    };

    const handleAddToDo = e => {
        e.preventDefault();
        setTodoList(
            [...todoList, { title: title, description: description, completed: false, id: Math.floor(Math.random() * 1000000000000) }]
        )
        console.log(todoList)

    };
    return (
        <div className="flex items-center justify-center my-14">
            <form onSubmit={handleAddToDo} className="flex flex-col w-2/5">
                <input value={title} onChange={titleHandler} type="text" placeholder="Title" className="input input-bordered w-full my-6" />
                <textarea value={description} onChange={descriptionHandler} className="textarea textarea-bordered" placeholder="Description"></textarea>
                <button type='submit' className="btn my-6">ADD TASK</button>
            </form>
        </div>
    );
};

export default ToDoInput;