import { sections } from '@/configs/constants';
import '@/styles/css/header.css';
import { Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopHeader = () => {
	const [title, setTitle] = useState('Dang Khoa 🔅 Home');
	const theme = useTheme();

	const navigate = useNavigate();

	const handleOnClick = (path, title) => {
		setTitle(title);
		navigate(path);
	};

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<Grid
			item
			container
			style={{
				padding: '10px 0px 10px',
				justifyContent: 'flex-end',
			}}
		>
			{sections.map((section) => (
				<Button
					focusRipple
					key={section.title}
					style={{
						width: section.width,
						borderRadius: '20px',
						border: '1px solid transparent',
						backgroundColor: 'transparent',
						borderBottomColor: 'transparent',
					}}
					onClick={() => handleOnClick(section.path, section.webTitle)}
				>
					<Typography
						component="span"
						variant="subtitle1"
						color={theme.palette.text.primary}
						style={{
							fontFamily: "'Montserrat', sans-serif",
							fontWeight: 'normal',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.fontWeight = 'bold';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.fontWeight = 'normal';
						}}
					>
						{section.title}
					</Typography>
				</Button>
			))}
		</Grid>
	);
};

export default DesktopHeader;
