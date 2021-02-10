import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import InfoText from '../components/InfoText'
import BaseBtn from '../components/BaseBtn'
import TextEditor from '../components/TextEditor'

const EXAMPLE = `function add(a, b) {
  return a + b
}
add(10, 10)

// returns 10
`

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
}))

const FunctionTheory = ({ onClick }) => {
	const classes = useStyles()
	return (
		<>
			<Header variant={'h6'}>What is an Function?</Header>
			<Grid container className={classes.gridContainer} spacing={3}>
				<Grid item xs={12} md={6} lg={6}>
					<InfoText variant={'body1'} align={'left'}>
						{' '}
						JavaScript a function allows you to define a block of code, give it
						a name and then execute it as many times as you want. A function can
						be defined using function keyword and can be executed using ()
						operator. A function can include one or more parameters. For our
						next task, we will be creating a funky function that should output
						your name. This might be tough for some but you can do it! I'll
						provide some excellent tried and tested resources when you hit the
						button below.
					</InfoText>
					<InfoText
						className={classes.caption}
						variant={'caption'}
						color={'secondary'}
					>
						This might be tough for some but you can do it! I'll provide some
						excellent tried and testing resources when you hit the button below
					</InfoText>
				</Grid>
				<Grid container item xs={12} md={6} lg={6}>
					<Grid item xs={12} md={12} lg={12}>
						<TextEditor code={EXAMPLE} isReadOnly={'nocursor'} setCode={null} />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<BaseBtn text={'Try it out!'} onClick={onClick}></BaseBtn>
				</Grid>
			</Grid>
		</>
	)
}

export default FunctionTheory
