import { Grid, Typography } from '@mui/material';
import moment from 'moment';

const Footer = () => {
	const year = moment().year();
	const footerText = `${year} lcdkhoa. Powered by "Chạy bằng cơm"`;
	return (
		<Grid
			item
			xs
			container
			alignContent={'center'}
			justifyContent={'center'}
			paddingTop={'10px'}
		>
			<Typography style={{ fontFamily: "'Roboto', sans-serif" }}>
				{footerText}
			</Typography>
		</Grid>
	);
};

export default Footer;
