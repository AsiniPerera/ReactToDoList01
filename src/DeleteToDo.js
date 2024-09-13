import React from 'react';

const DeleteTodo = ({ todo, onDelete, onCancel }) => (
  <div className="delete-todo-modal">
    <h2>Confirm Deletion</h2>
    <p>Are you sure you want to delete this todo?</p>
    <p><strong>{todo.title}</strong></p>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);

export default DeleteTodo;
