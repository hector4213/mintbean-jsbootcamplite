import React from 'react'
import './App.css'
import { useState } from 'react'
import BaseBtn from './components/BaseBtn'
import Box from '@material-ui/core/Box'
import Layout from './components/Layout'
import HomePage from './HomePage'
import VariableLesson from './lessons/VariableLesson'
import FunctionsLesson from './lessons/FunctionsLesson'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '100vh',
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
	const [user, setUser] = useState('')
	const [userPoints, setUserPoints] = useState(0)

	const onNameChange = (e) => {
		setUser(e.target.value)
	}

	const startApp = () => {
		//TODO: validation for username
		if (user.length < 1) {
			return
		} else {
			setStarted(true)
		}
	}

	if (started) {
		return (
			<Router>
				<div className={classes.root}>
					<Switch>
						<Layout userPoints={userPoints}>
							<Route exact path='/'>
								<HomePage user={user} />
							</Route>
							<Route path='/variables'>
								<VariableLesson
									user={user}
									userPoints={userPoints}
									setUserPoints={setUserPoints}
								/>
							</Route>
							<Route path='/functions'>
								<FunctionsLesson
									user={user}
									userPoints={userPoints}
									setUserPoints={setUserPoints}
								/>
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

				<TextField
					onChange={onNameChange}
					value={user}
					placeholder='Enter your name'
				/>
				<BaseBtn text={'Lets get started'} onClick={startApp} />
			</Box>
		</div>
	)
}

export default App
