import React, { useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import TextEditor from '../components/TextEditor'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import InfoText from '../components/InfoText'
import BaseBtn from '../components/BaseBtn'
import { ReactComponent as VariableExample } from '../assets/variable.svg'
import VariableTheory from './VariableTheory'
import VariableAction from './VariableAction'

const EXAMPLE =
	'// This is an example here\nlet myCat = "fluffy"\nlet myCountry = "Canada"\nlet myRhyme = "It was all a dream, I used to read Word Up! magazine"'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
	paper: {
		padding: '10px',
	},
}))

const VariableLesson = ({ user }) => {
	const [code, setCode] = useState('')
	const [output, setOutput] = useState('')
	const [lesson, setLesson] = useState('theory') // theory, do
	const classes = useStyles()

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
