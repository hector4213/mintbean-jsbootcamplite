import React from 'react'
import { Container } from '@material-ui/core'
import Header from './components/Header'
import InfoText from './components/InfoText'
const HomePage = () => {
	return (
		<Container>
			<Header variant={'h3'} align={'left'}>
				Welcome to the homepage
			</Header>
			<InfoText variant={'body1'}>
				Welcome to Kody! Today we are going to learn some basic JavaScript
				fundamentals. Click on any of the lesson on the right to get started.
				Try and complete lessons to 100%, to get some basic knowledge of
				JavaScript.
			</InfoText>
		</Container>
	)
}

export default HomePage
