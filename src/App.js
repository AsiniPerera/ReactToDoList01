import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, AuthContext } from './src/components/pages/AuthContext';
import Register from './src/components/pages/Register';
import Login from './src/components/pages/Login';
import TodoList from './src/components/pages/TodoList';
import AddTodo from './src/components/pages/AddTodo';
import TodoPage from './src/components/pages/TodoPage';
import RegisterPage from './src/components/pages/RegisterPage';
import LoginPage from './src/components/pages/LoginPage';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleRegister = (user) => {
    console.log('User registered:', user);
  };

  const handleLogin = (user) => {
    console.log('User logged in:', user);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo, completed: false }]);
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage
            todos={todos}
            onAddTodo={handleAddTodo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />} />
          <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
