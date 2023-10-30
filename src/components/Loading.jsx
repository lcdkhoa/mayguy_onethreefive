import { Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
	return (
		<Grid item container height={'100vh'} width={'100%'} direction={'column'}>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-end'}
				xs
			>
				<Typography
					variant={'h4'}
					alignItems={'center'}
					justifyItems={'center'}
					paddingBottom={'10px'}
				>
					Hi there 👋
				</Typography>
			</Grid>
			<Grid item container justifyContent={'center'} xs>
				<CircularProgress />
			</Grid>
		</Grid>
	);
};

export default Loading;
