import React from 'react'
import Button from '@material-ui/core/Button'

const BaseBtn = ({ text, onClick }) => {
	return (
		<Button variant='contained' color='primary' onClick={onClick}>
			{text}
		</Button>
	)
}

export default BaseBtn
