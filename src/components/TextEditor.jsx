import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/javascript/javascript')

const TextEditor = ({ code, setCode, isReadOnly, onClick }) => {
	return (
		<>
			<button onClick={onClick}>Run</button>
			<CodeMirror
				value={code}
				options={{
					mode: 'javascript',
					theme: 'material',
					lineNumbers: true,
				}}
				onBeforeChange={(editor, data, value) => {
					setCode(value)
				}}
				onChange={(editor, data, value) => {
					setCode(value)
				}}
			/>
		</>
	)
}

export default TextEditor
