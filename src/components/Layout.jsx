import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, LinearProgress } from '@material-ui/core'
import Drawer from '../components/Drawer'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
	},
	column: {
		display: 'flex',
		flexDirection: 'column',
	},
}))

const Layout = ({ children }) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Drawer />
			<Box className={classes.column}>
				{children}
				<LinearProgress variant='determinate' value={50} />
			</Box>
		</div>
	)
}

export default Layout
