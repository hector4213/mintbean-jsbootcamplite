import { useState } from 'react'
import { Container } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const VariableLesson = () => {
	const [code, setCode] = useState('')

	return (
		<Container>
			<h1>I'm the variables lesson</h1>
			<TextField placeholder='Try your code out here!' />
		</Container>
	)
}

export default VariableLesson
