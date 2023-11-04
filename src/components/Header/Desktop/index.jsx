import { sections } from '@/configs/constants';
import '@/styles/css/header.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopHeader = () => {
	const [title, setTitle] = useState('Dang Khoa 🔅 Home');

	const navigate = useNavigate();

	const handleOnClick = (path, title, e) => {
		setTitle(title);
		navigate(path);
	};

	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<Container maxWidth={'sm'}>
			<Grid
				item
				xs
				container
				direction={'row'}
				padding={'5px 0 5px 0'}
				style={{
					border: '1px solid #DEE4E7',
					borderRadius: '30px',
				}}
			>
				<Grid item container justifyContent={'center'}>
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
							onMouseEnter={(e) => {
								e.currentTarget.style.borderBottomColor = '#95665F';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.borderBottomColor = 'transparent';
							}}
							onClick={(e) => handleOnClick(section.path, section.webTitle, e)}
						>
							<Typography
								component="span"
								variant="subtitle1"
								color="black"
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
			</Grid>
		</Container>
	);
};

export default DesktopHeader;
