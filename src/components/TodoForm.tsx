import React, { useRef } from 'react'



interface TodoFormProps {
	onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
	// const [title, setTitle] = useState<string>('')
	const ref = useRef<HTMLInputElement>(null)

	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value)
	// }
	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
			// setTitle('')
		}
	}

	return (
		<div className='input-field input__margin'>
			<i className='material-icons prefix'>assignment</i>
			<input
				ref={ref}
				onKeyPress={keyPressHandler}
				// onChange={changeHandler}
				// value={title}
				type='text'
				id='title'
				className='autocomplete '
				placeholder='Введите задачу'
			/>
			<label htmlFor='title' className='active '>
				Введите задачу
			</label>
		</div>
	)
}

export default TodoForm
