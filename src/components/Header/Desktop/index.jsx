import { sections } from '@/configs/constants';
import '@/styles/css/header.css';
import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopHeader = () => {
	const [isHovered, setIsHovered] = useState(false);

	const navigate = useNavigate();

	const handleOnClick = (path) => {
		navigate(path);
	};

	return (
		<Grid
			item
			xs
			container
			direction={'row'}
			paddingBottom={'5px'}
			style={{
				borderBottom: '0.5px solid #DEE4E7',
			}}
		>
			<Grid item container xs={6} alignItems={'center'} direction={'column'}>
				<Typography
					color={'black'}
					variant={'body1'}
					style={{
						alignContent: 'center',
					}}
				>
					Welcome to
				</Typography>
				<Typography
					color={'black'}
					variant={'h3'}
					className={`zoom-in ${isHovered ? 'pointer' : ''}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					style={{
						alignContent: 'center',
						fontFamily: "'Montserrat', sans-serif",
					}}
				>
					Dang Khoa&#39;s Home
				</Typography>
			</Grid>
			<Grid
				item
				container
				xs={6}
				alignContent={'flex-end'}
				justifyContent={'center'}
			>
				{sections.map((section) => (
					<Button
						focusRipple
						key={section.title}
						style={{
							width: section.width,
							borderRadius: '30px',
							transition: 'border 0.3s',
							border: '0.5px solid transparent',
							margin: '0px 10px',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.border = '0.5px solid black';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.border = '0.5px solid transparent';
						}}
						onClick={() => handleOnClick(section.path)}
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
	);
};

export default DesktopHeader;
