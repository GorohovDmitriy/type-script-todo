import React, { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { ITodo } from '../interface'

const TodosPage: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([])


	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
		setTodos(saved)
		console.log(saved)

	}, [])
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const addHandlet = (title: string): void => {
		const newTodo: ITodo = {
			id: Date.now(),
			title: title,
			completed: false,
		}
		setTodos((prevState) => [newTodo, ...prevState])
	}

	const toggleHandler = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			}),
		)
	}
	const removeHandler = (id: number) => {
		const onConfirm = window.confirm('Вы уверены что хотите удалить задачу?')
		if (onConfirm) {
			setTodos((prev) => prev.filter((todo) => todo.id !== id))
		}
	}

	return (
		<React.Fragment>
			<TodoForm onAdd={addHandlet} />
			<TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
		</React.Fragment>
	)
}

export default TodosPage
