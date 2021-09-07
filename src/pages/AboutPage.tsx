import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage: React.FC = () => {
	return (
		<React.Fragment>
			<h1>Страница информации</h1>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, nihil?</p>
			<Link to='/'>
				<button className='btn blue-grey darken-2'>Обратно с кписку дел</button>
			</Link>
		</React.Fragment>
	)
}

export default AboutPage
