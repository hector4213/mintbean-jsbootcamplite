import './App.css'
import { useState } from 'react'
import StartButton from './components/StartButton'
import Box from '@material-ui/core/Box'
import Layout from './components/Layout'
import HomePage from './HomePage'
import VariableLesson from './lessons/VariableLesson'
import FunctionsLesson from './lessons/FunctionsLesson'
import ArraysLesson from './lessons/ArraysLesson'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
	},
	start: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
	},
}))

const App = () => {
	const classes = useStyles()
	const [started, setStarted] = useState(false)

	const startApp = () => {
		setStarted(true)
	}
	//drawers will be the links that change the page in layout
	if (started) {
		return (
			<Router>
				<div className={classes.root}>
					<Switch>
						<Layout>
							<Route exact path='/'>
								<HomePage />
							</Route>
							<Route path='/variables'>
								<VariableLesson />
							</Route>
							<Route path='/functions'>
								<FunctionsLesson />
							</Route>
							<Route path='/Arrays'>
								<ArraysLesson />
							</Route>
						</Layout>
					</Switch>
				</div>
			</Router>
		)
	}

	return (
		<div className={classes.start}>
			<Box>
				<h1>Ready to learn some JS? Click below and</h1>
				<StartButton text={'Lets get started'} onClick={startApp} />
			</Box>
		</div>
	)
}

export default App
