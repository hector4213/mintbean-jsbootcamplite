import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '20px',
		paddingBottom: '20px',
	},
}))

const Header = ({ variant, color, align, children }) => {
	const classes = useStyles()
	return (
		<Typography
			className={classes.root}
			variant={variant}
			align={align}
			color={color}
		>
			{children}
		</Typography>
	)
}

export default Header
