import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const HomePage = () => {
	const [menuOpen, setMenuOpen] = useState(true)

	const makeMenuItems = () => {
		return (
			<List>
				<Divider />
				{['Home', 'Arrays', 'Functions'].map((item) => (
					<ListItem button key={item}>
						<ListItemText primary={item} />
					</ListItem>
				))}
			</List>
		)
	}

	return (
		<Container maxWidth='lg'>
			<>
				<Drawer anchor={'left'} open={menuOpen} onClose={null}>
					{makeMenuItems()}
				</Drawer>
			</>
		</Container>
	)
}

export default HomePage
