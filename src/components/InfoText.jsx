import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	paragraph: {
		paddingTop: '10px',
	},
}))

const InfoText = ({ align, children, variant, color }) => {
	const classes = useStyles()
	return (
		<Typography
			className={classes.paragraph}
			align={align}
			variant={variant}
			color={color}
		>
			{children}
		</Typography>
	)
}

export default InfoText
