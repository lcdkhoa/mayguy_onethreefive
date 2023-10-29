import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
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
				&copy; 2023 lcdkhoa. All rights reserved.
			</Typography>
		</Grid>
	);
};

export default Footer;
