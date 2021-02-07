import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const VariableLesson = () => {
	const [code, setCode] = useState('hello world')

	const onCodeChange = (e) => {
		setCode(e.target.value)
	}

	return (
		<Container>
			<h1>I'm the variables lesson</h1>
		</Container>
	)
}

export default VariableLesson
