import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import Drawer from '../components/Drawer'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		justifyContent: 'center',
	},
}))

const Layout = ({ children, userPoints }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Drawer userPoints={userPoints} />
			<Box className={classes.column}>{children}</Box>
		</div>
	)
}

export default Layout
