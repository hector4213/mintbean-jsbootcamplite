import React from 'react'
import { Typography } from '@material-ui/core'

const InfoText = ({ align, children, variant, color }) => {
	return (
		<Typography align={align} variant={variant} color={color}>
			{children}
		</Typography>
	)
}

export default InfoText
