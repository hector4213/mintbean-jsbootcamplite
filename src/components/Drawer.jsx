import React, { useState } from 'react'
import Logo from '../assets/jslogo.png'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
	Drawer as MUIDrawer,
	MenuList,
	ListItemText,
	ListItem,
	MenuItem,
} from '@material-ui/core'
import PointsProgress from './PointsProgress'
import InfoText from './InfoText'

const menu = [
	{ text: 'Home', icon: '', path: '/' },
	{ text: 'Variables', icon: '', path: '/variables' },
	{ text: 'Functions', icon: '', path: '/functions' },
	{ text: 'Arrays', icon: '', path: '/arrays' },
]
const useStyles = makeStyles((theme) => ({
	root: {
		width: 200,
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
		width: 200,
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
	progress: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	logo: {
		maxWidth: '75px',
	},
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px',
	},
}))

const Drawer = ({ userPoints }) => {
	const [isOpen, setIsOpen] = useState(true)
	const classes = useStyles()

	const makeMenuItems = () =>
		menu.map((item) => (
			<MenuItem component={Link} to={item.path}>
				<MenuItem>
					<ListItemText> {item.text}</ListItemText>
				</MenuItem>
			</MenuItem>
		))

	const handleDrawerToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<MUIDrawer
			variant='persistent'
			anchor='left'
			open={isOpen}
			onClose={handleDrawerToggle}
			className={classes.root}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.logoContainer}>
				<img className={classes.logo} src={Logo} alt='Javascript Logo' />
			</div>
			<MenuList>{makeMenuItems()}</MenuList>
			<div className={classes.progress}>
				<InfoText variant='caption' color={'primary'}>
					Your Progress
				</InfoText>
				<PointsProgress userPoints={userPoints} />
			</div>
		</MUIDrawer>
	)
}

export default Drawer
