import React from 'react';
import toast from 'react-hot-toast';

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
        toast.success(`${!completed ? 'Successfully Done' : 'Redoing The Task'}`)
    };
    return (
        <div className="card lg:max-w-lg  bg-base-100 border-2 shadow-xl">
            <div className="card-body">
                <h2 class={`card-title ${completed ? 'line-through' : ''}`}>{title}</h2>
                <p className={completed ? 'line-through' : ''}>{description}</p>
                <div className="card-actions justify-between my-6">
                    <button onClick={completeHandler} className="btn  btn-sm">Complete</button>
                    <button onClick={() => deleteHandler(id)} className="btn  btn-sm">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default ToDoList;