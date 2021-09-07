import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
	return (
		<nav>
			<div className='nav-wrapper blue-grey darken-3 navbar'>
				<a href='/' className='brand-logo'>
					TypeScript
				</a>
				<ul className='right hide-on-med-and-down'>
					<li>
						<Link to='/'>Список дел</Link>
					</li>
					<li>
						<Link to='/about'>Информация</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
