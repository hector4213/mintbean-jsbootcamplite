import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import VariableTheory from './VariableTheory'
import VariableAction from './VariableAction'

const VariableLesson = ({ user }) => {
	const [code, setCode] = useState('')
	const [output, setOutput] = useState('')
	const [lesson, setLesson] = useState('theory') // theory, do

	const goToAction = () => {
		setLesson('action')
	}

	const checkCodeAnswer = (codeString) => {
		if (codeString === `let myName = "${user}"`) {
			setOutput('correct!')
		} else {
			setOutput('Not Correct')
		}
	}

	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Hello {user}, Let's learn about Variables!
			</Header>
			{lesson === 'theory' && <VariableTheory onClick={goToAction} />}
			{lesson === 'action' && (
				<VariableAction
					code={code}
					setCode={setCode}
					output={output}
					checkCodeAnswer={checkCodeAnswer}
					goBack={setLesson}
				/>
			)}
		</Container>
	)
}

export default VariableLesson
