import React from 'react'
import { CircularProgress, Box, Typography } from '@material-ui/core/'

const PointsProgress = ({ userPoints }) => {
	return (
		<Box position='relative' display='inline-flex'>
			<CircularProgress
				size={100}
				color='primary'
				variant='static'
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
