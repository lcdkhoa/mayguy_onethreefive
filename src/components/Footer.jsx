import { Grid, Typography } from '@mui/material';
import moment from 'moment';

const Footer= () => {
	const year = moment().year();
	return (
		<Grid
			item
			xs
			container
			alignContent={'center'}
			justifyContent={'center'}
			pt={2}
		>
			<Typography style={{ fontFamily: "'Montserrat', sans-serif" }}>
				&copy; {year} lcdkhoa. All rights reserved.
			</Typography>
		</Grid>
	);
};

export default Footer;
