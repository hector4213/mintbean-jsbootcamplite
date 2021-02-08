import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
	Drawer as MUIDrawer,
	MenuList,
	ListItemText,
	MenuItem,
} from '@material-ui/core'

const menu = [
	{ text: 'Home', icon: '', path: '/' },
	{ text: 'Variables', icon: '', path: '/variables' },
	{ text: 'Functions', icon: '', path: '/functions' },
	{ text: 'Arrays', icon: '', path: '/arrays' },
]
const useStyles = makeStyles((theme) => ({
	root: {
		width: 250,
	},
	grow: {
		flexGrow: 1,
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: 250,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: 250,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}))

const Drawer = () => {
	const [isOpen, setIsOpen] = useState(true)
	const classes = useStyles()

	const makeMenuItems = () =>
		menu.map((item) => (
			<MenuItem component={Link} to={item.path}>
				<ListItemText> {item.text}</ListItemText>
			</MenuItem>
		))

	const handleDrawerToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={classes.root}>
			<MUIDrawer
				variant='permanent'
				anchor='left'
				open={isOpen}
				onClose={handleDrawerToggle}
			>
				<MenuList>{makeMenuItems()}</MenuList>
			</MUIDrawer>
		</div>
	)
}

export default Drawer
