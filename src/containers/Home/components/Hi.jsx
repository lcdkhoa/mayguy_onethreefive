import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hi = () => {
	const theme = useTheme();
	return (
		<Grid item container direction={'column'} xs>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-end'}
				xs={3}
			>
				<Typography variant="h1" color={theme.palette.text.primary}>
					Hi. I'm Dang Khoa
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={3}
			>
				<Typography variant="h1" color={theme.palette.text.primary}>
					A Web Developer
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={3}
			>
				<Typography variant="h2" color={theme.palette.text.primary}>
					Welcome to my Home !
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={3}
			>
				<Typography variant="body1" color={theme.palette.text.primary}>
					And it is being built ...
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Hi;
