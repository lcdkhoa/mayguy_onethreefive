import { Grid, Typography } from '@mui/material';
import moment from 'moment';

const Footer = () => {
	const year = moment().year();
	const footerText = `${year} lcdkhoa. Powered by "Chạy bằng cơm"`;
	return (
		<Grid
			item
			xs={1}
			container
			alignContent={'center'}
			justifyContent={'flex-end'}
			direction={'column'}
			pb={2}
		>
			<Typography>{footerText}</Typography>
		</Grid>
	);
};

export default Footer;
