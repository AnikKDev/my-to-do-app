import React from 'react';

const ToDoList = ({ todoItem, deleteHandler, todoList, setTodoList }) => {
    // console.log(todoItem)
    const { title, description, completed, id } = todoItem;

    const completeHandler = () => {
        setTodoList(todoList.map(item => {
            if (item.id === todoItem.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return (
        <div class="card lg:max-w-lg  bg-base-100 border-2 shadow-xl">
            <div class="card-body">
                <h2 class={`card-title ${completed ? 'line-through' : ''}`}>{title}</h2>
                <p className={completed ? 'line-through' : ''}>{description}</p>
                <div class="card-actions justify-between my-6">
                    <button onClick={completeHandler} class="btn  btn-sm">Complete</button>
                    <button onClick={() => deleteHandler(id)} class="btn  btn-sm">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default ToDoList;