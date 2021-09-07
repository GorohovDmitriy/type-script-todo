import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import AboutPage from './pages/AboutPage'
import TodosPage from './pages/TodosPage'



const App: React.FC = () => {

	return (
		<React.Fragment>
			<Navbar />
			<div className='container'>
				<Switch>
					<Route path='/' exact component={TodosPage} />
					<Route path='/about' component={AboutPage} />
				</Switch>
			</div>
		</React.Fragment>
	)
}

export default App
