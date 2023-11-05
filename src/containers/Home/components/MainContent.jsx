import DeviceContext from '@/components/DetectDevice';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';

const MainContent = () => {
	const theme = useTheme();
	let isMobileDevice = useContext(DeviceContext);
	return (
		<Grid item container direction={'row'} xs>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-end'}
				xs={12}
			>
				<Typography
					variant={!isMobileDevice ? 'h1' : 'h3'}
					color={theme.palette.text.primary}
				>
					Hi. I'm Dang Khoa
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={12}
			>
				<Typography
					variant={!isMobileDevice ? 'h1' : 'h3'}
					color={theme.palette.text.primary}
				>
					A Web Developer
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={12}
			>
				<Typography
					variant={!isMobileDevice ? 'h2' : 'body1'}
					color={theme.palette.text.primary}
				>
					Welcome to my Home !
				</Typography>
			</Grid>
			<Grid
				item
				container
				justifyContent={'center'}
				alignContent={'flex-start'}
				xs={12}
			>
				<Typography variant="body1" color={theme.palette.text.primary}>
					And it is being built ...
				</Typography>
			</Grid>
		</Grid>
	);
};

export default MainContent;
