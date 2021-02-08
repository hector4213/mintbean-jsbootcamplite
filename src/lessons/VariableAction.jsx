import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import InfoText from '../components/InfoText'
import BaseBtn from '../components/BaseBtn'
import TextEditor from '../components/TextEditor'

const EXAMPLE =
	'// This is an example here\nlet myCat = "fluffy"\nlet myCountry = "Canada"\nlet myRhyme = "It was all a dream, I used to read Word Up! magazine"'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
	buttonFix: {
		padding: '12px',
	},
}))

const VariableAction = ({ code, setCode, checkCodeAnswer, output, goBack }) => {
	const classes = useStyles()

	return (
		<Grid container className={classes.gridContainer} spacing={3}>
			<Grid item xs={12} md={6} lg={6}>
				<InfoText variant={'body1'} align={'left'}>
					This shouldn't be too bad. I've provided some examples on the right.
					In one line, create a variable "myName" and set it to the username you
					entered in the App. Remember to declare the variable with let!
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
				<Grid item xs={12} md={12} lg={12}>
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
						onClick={() => goBack('theory')}
						color={'secondary'}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default VariableAction
