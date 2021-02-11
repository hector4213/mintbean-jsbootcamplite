import React from 'react'
import { CircularProgress, Box, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '10px',
	},
}))

const PointsProgress = ({ userPoints }) => {
	const classes = useStyles()
	return (
		<Box
			position='relative'
			display='inline-flex'
			className={classes.container}
		>
			<CircularProgress
				size={100}
				color='primary'
				variant='determinate'
				value={userPoints}
			/>
			<Box
				top={0}
				left={0}
				bottom={0}
				right={0}
				position='absolute'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<Typography
					variant='caption'
					component='div'
					color='textSecondary'
				>{`${Math.round(userPoints)}%`}</Typography>
			</Box>
		</Box>
	)
}

export default PointsProgress
