import { Grid, Typography } from '@mui/material';

const NotFound = () => {
	return (
		<Grid item container sx={{ height: innerHeight * 0.8 }} xs>
			<Grid item container justifyContent={'center'} alignContent={'flex-end'}>
				<Typography variant="h1" color="#1273AA">
					404
				</Typography>
			</Grid>
			<Grid item container xs justifyContent={'center'}>
				<Typography variant="body1" color="#1273AA">
					Looking for something?
				</Typography>
			</Grid>
		</Grid>
	);
};

export default NotFound;
