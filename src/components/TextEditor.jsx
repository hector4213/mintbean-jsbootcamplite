import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import BaseBtn from './BaseBtn'
import { makeStyles } from '@material-ui/core/styles'
require('codemirror/mode/javascript/javascript')

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
	},
}))

const TextEditor = ({ code, setCode, isReadOnly, checkCodeAnswer }) => {
	const classes = useStyles()
	const onCodeChange = (userCode) => {
		setCode(userCode)
		console.log(userCode)
	}
	return (
		<div className={classes.root}>
			<CodeMirror
				value={code}
				options={{
					mode: 'javascript',
					theme: 'material',
					lineNumbers: true,
					readOnly: isReadOnly,
				}}
				onBeforeChange={(editor, data, value) => {
					onCodeChange(value)
				}}
				onChange={(editor, data, value) => {
					onCodeChange(value)
				}}
			/>
			{typeof isReadOnly !== 'string' ? (
				<BaseBtn onClick={() => checkCodeAnswer(code)} text={'Run Code'} />
			) : null}
		</div>
	)
}

export default TextEditor
