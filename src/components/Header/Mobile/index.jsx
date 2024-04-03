import { sections } from '@/configs/constants';
import '@/styles/css/header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

const MobileHeader = () => {
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
		<Grid item container direction="row" alignItems={'center'}>
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
		</Grid>
	);
};

export default MobileHeader;
