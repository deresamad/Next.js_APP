'use client';
import { useState } from 'react';
import styles from './Todo.module.css';

/**
 * TodoItem Interface
 * Defines the structure of a todo item
 */
interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

/**
 * Todo Component
 * 
 * A feature-rich todo list component that allows users to manage their tasks.
 * 
 * Features:
 * - Add new todos
 * - Mark todos as complete/incomplete
 * - Delete todos
 * - Responsive design with animations
 * 
 * State Management:
 * - todos: Array of TodoItem objects tracking all todos
 * - inputText: String tracking the current input field value
 * 
 * Event Handlers:
 * - handleAddTodo: Adds a new todo when form is submitted
 * - toggleTodo: Toggles the completed status of a todo
 * - deleteTodo: Removes a todo from the list
 */
const Todo = () => {
    // State for managing todos and input field
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputText, setInputText] = useState('');

    // Handler for adding new todos
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

    // Handler for toggling todo completion status
    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // Handler for deleting todos
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
                            className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}
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