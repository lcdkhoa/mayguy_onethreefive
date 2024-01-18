import DeviceContext from '@/components/DetectDevice';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';

const MainContent = () => {
	let isMobileDevice = useContext(DeviceContext);
	const theme = useTheme();
	return (
		<Grid
			item
			container
			justifyContent={'center'}
			style={{
				overflow: 'hidden',
			}}
		>
			<Grid item container justifyContent={'center'} xs={12}>
				<img
					src="/images/backgrounds/under_construction.png"
					alt="Under Construction"
					style={{
						objectFit: 'scale-down',
						height: '75vh',
					}}
				/>
			</Grid>
			<Typography
				variant={!isMobileDevice ? 'h2' : 'body1'}
				color={theme.palette.text.primary}
			>
				WELCOME TO MY HOME
			</Typography>
		</Grid>
	);
};

export default MainContent;
