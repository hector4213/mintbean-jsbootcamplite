import React from 'react'
import { Container } from '@material-ui/core'
import Header from './components/Header'
import InfoText from './components/InfoText'
const HomePage = ({ user }) => {
	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Welcome to the Kody
			</Header>
			<InfoText variant={'body1'}>
				Welcome to Kody {user}! Kody is a very helpful application to help new
				programmers learn the fundamentals of JavaScript, one of the most used
				programming language. we Today we are going to learn some basic
				JavaScript fundamentals. Click on any of the lesson on the right to get
				started. Try and complete lessons to 100%, to get some basic knowledge
				of JavaScript.
			</InfoText>
		</Container>
	)
}

export default HomePage
