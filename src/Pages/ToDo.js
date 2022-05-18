import React, { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const ToDo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [todoList, setTodoList] = useState([]);

    const deleteHandler = (id) => {
        console.log(id);
        setTodoList(todoList.filter(element => element.id !== id))
    };


    return (
        <div>
            <ToDoInput title={title} setTitle={setTitle} description={description} setDescription={setDescription} todoList={todoList} setTodoList={setTodoList}></ToDoInput>

            <div className="grid grid-cols-12 md:grid-cols-2 lg:grid-cols-3 gap-10 p-12">
                {
                    todoList.map((todoItem, index) => <ToDoList todoItem={todoItem} key={index + 1} id={todoItem.id} deleteHandler={deleteHandler} setTodoList={setTodoList} todoList={todoList}></ToDoList>)
                }
            </div>
        </div>
    );
};

export default ToDo;