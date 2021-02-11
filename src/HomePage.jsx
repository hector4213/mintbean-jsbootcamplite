import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Header from './components/Header'
import InfoText from './components/InfoText'
import HomeJs from './assets/homejs.png'

const useStyles = makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
	},
}))

const HomePage = ({ user }) => {
	const classes = useStyles()
	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Let's Learn JavaScript
			</Header>
			<Grid container className={classes.gridContainer} spacing={3}>
				<Grid container item xs={12} md={6} lg={6} alignItems='space-around'>
					<Header variant={'h6'} color={'primary'}>
						A little about JS....
					</Header>
					<InfoText variant={'body1'}>
						Welcome {user}! Let me tell you about JS, JavaScript is a
						programming language that was first created in 1994 as a way to add
						functionality and user interaction to a website.JavaScript is the
						third of the major building blocks of a web page. Without it, we
						wouldn’t have the dynamic content and usability we expect from
						modern websites and applications.
					</InfoText>
					<InfoText variant={'body1'}>
						Keep in mind, JavaScript != Java. Although they share similar names
						(this was, unfortunately, considered a feature by JavaScript’s early
						pioneers) that is where the similarities end. The creators of
						JavaScript wanted to borrow concepts from other programming
						languages, such as Java and C. Those of you with backgrounds in
						other languages may see things that look very familiar, mainly the
						use of classes and Object-Oriented Programming (OOP) architecture.
						Keep in mind that JavaScript is not a true OOP language and many
						things you may be familiar with from another language won’t work
						with JavaScript.
					</InfoText>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<img src={HomeJs} alt='jslogoHome' />
				</Grid>
			</Grid>
		</Container>
	)
}

export default HomePage
