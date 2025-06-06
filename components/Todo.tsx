'use client';
import { useState } from 'react';
import styles from './Todo.module.css';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputText, setInputText] = useState('');

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: inputText.trim(),
                    completed: false,
                },
            ]);
            setInputText('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className={styles.container}>
            <h2>Todo List</h2>
            <form onSubmit={handleAddTodo} className={styles.form}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Add a new todo"
                    className={styles.input}
                />
                <button type="submit" className={styles.addButton}>
                    Add Todo
                </button>
            </form>

            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.todoItem}>
                        <span
                            className={`${styles.todoText} ${todo.completed ? styles.completed : ''
                                }`}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className={styles.deleteButton}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo; 