import React from 'react'
import { Grid, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Header from '../components/Header'
import BaseBtn from '../components/BaseBtn'
import InfoText from '../components/InfoText'
import TextEditor from '../components/TextEditor'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

const EXAMPLE = `// Create a funky function that reverses your name, get stuck?
// Check out some resources
`

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
	thumb: {},
}))

const FunctionAction = ({
	code,
	setCode,
	backToTheory,
	output,
	checkCodeAnswer,
}) => {
	const classes = useStyles()
	return (
		<>
			<Header>Test your funk function knowledge</Header>
			<Grid container className={classes.gridContainer} spacing={3}>
				<Grid item xs={12} md={6} lg={6}>
					<InfoText variant={'body1'} align={'left'}>
						We are going to get funky with functions, try and create a function
						that turns your name backwards! (whoa). Remember the resource I
						mentioned well{' '}
						<span>
							<a href='https://www.google.com'>here's</a>
						</span>
						the link! Dont get upset now, its what most developer use :) Oh yes!
						Don't forget to call your function with parenthesis myFunction()!
					</InfoText>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<TextEditor code={EXAMPLE} isReadOnly={'nocursor'} />
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
						<ThumbUpIcon color='primary' fontSize='large' />
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
