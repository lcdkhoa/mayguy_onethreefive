import { sections } from '@/configs/constants';
import '@/styles/css/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

const MobileHeader = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isMobileDevice, setIsMobileDevice] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const navigate = useNavigate();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOnClick = (path) => {
		navigate(path);
		setAnchorEl(null);
	};

	useEffect(() => {
		setIsMobileDevice(isMobile);
	}, [isMobileDevice]);

	return (
		<Grid item xs container direction={'column'} padding={'10px 0px 10px'}>
			<Grid
				item
				xs={12}
				width={'100%'}
				container
				direction="row"
				alignItems={'center'}
			>
				<Button
					onClick={handleClick}
					style={{ justifyContent: 'flex-start', minWidth: 0 }}
				>
					<MenuIcon></MenuIcon>
				</Button>
				<Menu
					id="dropdown-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					{sections.map((section) => (
						<MenuItem
							key={section.title}
							style={{ justifyContent: 'flex-start' }}
						>
							<Button
								style={{
									minWidth: 150,
								}}
							>
								<Typography
									gutterBottom
									component="span"
									variant="body1"
									color="black"
									style={{
										fontFamily: "'Montserrat', sans-serif",
									}}
									onClick={() => handleOnClick(section.path)}
								>
									{section.title}
								</Typography>
							</Button>
						</MenuItem>
					))}
				</Menu>
				<Typography
					color={'black'}
					variant={'body1'}
					style={{
						alignContent: 'center',
						fontFamily: "'Montserrat', sans-serif",
					}}
				>
					Welcome to
				</Typography>
				<Grid item xs={12} container style={{ justifyContent: 'center' }}>
					<Typography
						color={'black'}
						variant={innerWidth < 380 ? 'h5' : 'h4'}
						className={`zoom-in ${isHovered ? 'pointer' : ''}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						style={{
							fontFamily: "'Montserrat', sans-serif",
						}}
					>
						Dang Khoa&#39;s Home
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default MobileHeader;
