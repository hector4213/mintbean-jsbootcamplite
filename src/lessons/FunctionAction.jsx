import React, { useState } from 'react'
import { Grid, Box, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import BaseBtn from '../components/BaseBtn'
import InfoText from '../components/InfoText'
import TextEditor from '../components/TextEditor'

const resources = [
	{
		name: 'String.prototype.split()',
		url:
			'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
	},
	{
		name: 'Array.prototype.reverse()',
		url:
			'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
	},
	{
		name: 'Array.prototype.join()',
		url:
			'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
	},
]

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
	buttonFix: {
		padding: '12px',
	},
	center: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	resources: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
}))

const FunctionAction = ({
	user,
	code,
	setCode,
	backToTheory,
	output,
	checkCodeAnswer,
}) => {
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = useState(null)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const makeResources = () =>
		resources.map((resource) => (
			<MenuItem
				onClick={handleClose}
				component='a'
				href={resource.url}
				target={'_blank'}
			>
				{resource.name}
			</MenuItem>
		))

	return (
		<>
			<Header variant={'h6'} color={'primary'}>
				Test your funky function knowledge
			</Header>
			<Grid container className={classes.gridContainer} spacing={3}>
				<Grid item xs={12} md={6} lg={6}>
					<InfoText variant={'body1'} align={'left'}>
						Ok,For our funky function task we are going to try and create a
						function that turns your name backwards! (whoa). So if my name is
						"Tom" it should return as "moT", Oh yes! Don't forget to call your
						function with parenthesis in order to invoke your function!
					</InfoText>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<Box className={classes.resources}>
						<Header variant={'h6'} align={'center'}>
							Need help?
						</Header>
						<BaseBtn
							text={'See Resources'}
							color={'primary'}
							onClick={handleClick}
						/>
						<Menu
							id='resources'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							{makeResources()}
						</Menu>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<TextEditor
						code={code}
						setCode={setCode}
						isReadOnly={false}
						checkCodeAnswer={checkCodeAnswer}
					/>
				</Grid>
				<Grid container item xs={12} md={6} lg={6}>
					<Grid item xs={12} md={12} lg={12} className={classes.center}>
						{output}
					</Grid>
					<Grid
						container
						item
						xs={12}
						alignItems='flex-end'
						justify='flex-end'
						className={classes.buttonFix}
					>
						<BaseBtn
							text={'Back to Theory'}
							onClick={backToTheory}
							color={'secondary'}
						/>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

export default FunctionAction
