import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import VariableTheory from './VariableTheory'
import VariableAction from './VariableAction'

const VariableLesson = ({ user, userPoints, setUserPoints }) => {
	const [code, setCode] = useState('')
	const [output, setOutput] = useState('')
	const [lesson, setLesson] = useState({
		completed: false,
		lessonType: 'theory',
	}) // types: theory, action

	const goToAction = () => {
		setLesson((lesson) => ({ ...lesson, lessonType: 'action' }))
	}

	const completeLesson = () => {
		if (!lesson.completed) {
			setLesson((lesson) => ({ ...lesson, completed: true }))
			setUserPoints((prevPoints) => prevPoints + 20)
		} else {
			setOutput('You have already completed this lesson! Try another one')
		}
	}

	const checkCodeAnswer = (codeString) => {
		if (codeString === `let myName = "${user}"`) {
			setOutput('correct!')
			completeLesson()
		}
	}

	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Hello {user}, Let's learn about Variables!
			</Header>
			{lesson.lessonType === 'theory' && (
				<VariableTheory onClick={goToAction} />
			)}
			{lesson.lessonType === 'action' && (
				<VariableAction
					code={code}
					setCode={setCode}
					output={output}
					checkCodeAnswer={checkCodeAnswer}
					setLesson={setLesson}
				/>
			)}
		</Container>
	)
}

export default VariableLesson
