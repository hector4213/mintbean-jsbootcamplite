import React from 'react'
import { Typography } from '@material-ui/core'

const Header = ({ variant, color, align, children }) => {
	return (
		<Typography variant={variant} align={align} color={color}>
			{children}
		</Typography>
	)
}

export default Header
