import React from 'react'
import Button from '@material-ui/core/Button'

const BaseBtn = ({ text, onClick, color }) => {
	return (
		<Button
			variant='contained'
			color={color ? color : 'primary'}
			onClick={onClick}
		>
			{text}
		</Button>
	)
}

export default BaseBtn
