import React from 'react'
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@material-ui/core'
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},

	notes: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}))

const funcNotes = [
	'A function is a subprogram designed to perform a particular task',
	'Functions are executed when they are called. This is known as, invoking a function',
	'Values can be passed into functions and used within the function.',
	'Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined',
	'Functions are objects',
]

const FunctionNotes = () => {
	const classes = useStyles()
	const generateNotes = () =>
		funcNotes.map((note) => (
			<ListItem>
				<ListItemIcon>
					<LabelImportantTwoToneIcon />
				</ListItemIcon>
				<ListItemText primary={note} />
			</ListItem>
		))

	return (
		<Grid item xs={12} md={6} className={classes.root}>
			<Typography variant='h6' className={classes.title}>
				Some key notes about functions:
			</Typography>
			<div className={classes.notes}>
				<List dense={true}>{generateNotes()}</List>
			</div>
		</Grid>
	)
}

export default FunctionNotes
