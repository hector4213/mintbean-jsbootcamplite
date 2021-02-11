import React, { useState } from 'react'
import FunctionTheory from './FunctionTheory'
import FunctionAction from './FunctionAction'
import { Container } from '@material-ui/core'
import Header from '../components/Header'

const FunctionsLesson = ({ user, userPoints, setUserPoints }) => {
	const [code, setCode] = useState('')
	const [output, setOutput] = useState('Goodluck!')
	const [lesson, setLesson] = useState({
		completed: false,
		lessonType: 'theory',
	})

	const goToAction = () => {
		setLesson((lesson) => ({ ...lesson, lessonType: 'action' }))
	}

	const backToTheory = () => {
		setLesson((lesson) => ({ ...lesson, lessonType: 'theory' }))
	}

	const correctAnswer = () => {
		let userCode = code
		if (eval(userCode) === user.split('').reverse().join('')) {
			return true
		} else {
			setOutput('Incorrect try again!')
		}
	}

	const checkCodeAnswer = () => {
		try {
			if (!lesson.completed && correctAnswer()) {
				setOutput('correct!')
				setLesson((lesson) => ({ ...lesson, completed: true }))
				setUserPoints((prevPoints) => prevPoints + 80)
			} else if (lesson.completed) {
				setOutput('You have already completed this lesson')
			}
		} catch (error) {
			setOutput(error.name)
		}
	}

	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Stay Funky with Functions!
			</Header>
			{lesson.lessonType === 'theory' && (
				<FunctionTheory onClick={goToAction} />
			)}
			{lesson.lessonType === 'action' && (
				<FunctionAction
					code={code}
					setCode={setCode}
					backToTheory={backToTheory}
					checkCodeAnswer={checkCodeAnswer}
					output={output}
					user={user}
				/>
			)}
		</Container>
	)
}

export default FunctionsLesson
