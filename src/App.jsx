import './App.css'
import { useState } from 'react'
import StartButton from './components/StartButton'
import HomePage from './HomePage'
import Container from '@material-ui/core/Container'

const App = () => {
	const [start, setStart] = useState(null)

	const startApp = () => {
		setStart(true)
	}

	if (start) {
		return <HomePage />
	}

	return (
		<div className='App'>
			<Container>
				<StartButton text={'Lets get started'} onClick={startApp} />
			</Container>
		</div>
	)
}

export default App
