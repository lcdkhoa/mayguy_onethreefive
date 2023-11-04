import { Grid, Typography } from '@mui/material';

const NotFound = () => {
	return (
		<Grid item container height={innerHeight * 0.8}>
			<Grid item container justifyContent={'center'} alignContent={'flex-end'}>
				<Typography variant="h1" color="#1273AA">
					Whoops
				</Typography>
			</Grid>
			<Grid item container xs justifyContent={'center'} pt={5}>
				<Typography variant="body1" color="#1273AA">
					Looking for something?
				</Typography>
			</Grid>
		</Grid>
	);
};

export default NotFound;
