import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onEdit, onDelete, onToggle }) => (
  <div>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </div>
);

export default TodoList;
