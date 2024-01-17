import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import moment from 'moment';

const Footer = () => {
	const year = moment().year();
	const footerText = `${year} lcdkhoa. Powered by "Chạy bằng cơm"`;
	const theme = useTheme();
	return (
		<Grid
			container
			alignContent={'center'}
			style={{
				marginBottom: '10px',
				justifyContent: 'center',
			}}
		>
			<Typography variant={'body1'} color={theme.palette.text.primary}>
				{footerText}
			</Typography>
		</Grid>
	);
};

export default Footer;
