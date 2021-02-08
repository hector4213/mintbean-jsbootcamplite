import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InfoText from '../components/InfoText'
import BaseBtn from '../components/BaseBtn'
import { ReactComponent as VariableExample } from '../assets/variable.svg'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
}))

const VariableTheory = ({ onClick }) => {
	const classes = useStyles()
	return (
		<Grid container className={classes.gridContainer} spacing={3}>
			<Grid item xs={12} md={6} lg={6}>
				<InfoText variant={'body1'} align={'left'}>
					{' '}
					A variable is a “named storage” for data. We can use variables to
					store strings ( text ), numbers, and other data. Take a look at the
					example, it should help visualize what a variable actually is.
					Remember, a variable holds onto the data kind of like a box.
				</InfoText>
			</Grid>
			<Grid
				container
				item
				xs={12}
				md={6}
				lg={6}
				justify='center'
				alignItems='center'
			>
				<VariableExample />
			</Grid>
			<Grid item xs={12}>
				<BaseBtn text={'Try it out!'} onClick={onClick}></BaseBtn>
			</Grid>
		</Grid>
	)
}

export default VariableTheory
