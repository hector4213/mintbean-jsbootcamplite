import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import InfoText from '../components/InfoText'
import BaseBtn from '../components/BaseBtn'
import { ReactComponent as VariableExample } from '../assets/variable.svg'
import AssignExample from '../assets/varexample.png'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
	example: {
		maxWidth: '500px',
	},
}))

const VariableTheory = ({ onClick }) => {
	const classes = useStyles()
	return (
		<>
			<Header variant={'h6'} color={'primary'}>
				What is a variable?
			</Header>
			<Grid container className={classes.gridContainer} spacing={3}>
				<Grid item xs={12} md={6} lg={6}>
					<InfoText variant={'body1'} align={'left'}>
						{' '}
						The item inside the box can be information such as username,
						password, date of birth, or maybe a greeting. After you label the
						boxes, you store them in the closet so when you want to return to
						them, you can get them by their label names. The closet can be seen
						as memory in the computer and the boxes are the variable names where
						the items you assigned the box to can be stored. With these variable
						names, you can store and update the information assigned to these
						variables and also retrieve information. There are three ways (but
						two of them are becoming more common) to create variables and that
						is with var, let, and const. For this lesson we will only use let.
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
				<Grid item xs={12} md={6} lg={6}>
					<Header variant={'h6'} color={'primary'}>
						More about variables
					</Header>
					<InfoText variant={'body1'} align={'left'}>
						The variable name goes after the variable keyword and following the
						keyword is your variable name. You can name it whatever as long as
						it follows naming rules (see the end of the article) and it is not a
						reserved keyword. Reserved keywords are words that JavaScript has
						already put aside for use for other purposes. An example is var. You
						can’t name your variable var because that keyword is already used by
						JavaScript declare a variable.
					</InfoText>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<img
						className={classes.example}
						src={AssignExample}
						alt='how to assign'
					/>
				</Grid>
				<Grid item xs={12}>
					<BaseBtn text={'Try it out!'} onClick={onClick}></BaseBtn>
				</Grid>
			</Grid>
		</>
	)
}

export default VariableTheory
