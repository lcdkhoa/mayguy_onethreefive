import Constants from '@/configs/constants';
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const backgroundDesktop = Constants['backgroundDesktop'];
const backgroundMobile = Constants['backgroundMobile'];

const MainContent = () => {
	const [windowHeight, setWindowHeight] = useState(0);
	const [background, setBackground] = useState([]);
	const [isMobileDevice, setIsMobileDevice] = useState('');

	useEffect(() => {
		setIsMobileDevice(isMobile);
		isMobileDevice
			? setBackground(backgroundMobile)
			: setBackground(backgroundDesktop);
	}, [isMobileDevice]);

	const createKeyframes = () => {
		const keyframes = background.map(
			(image, index) => `
        ${(index / background.length) * 100}% {
          background-image: url(${image});
          opacity: 1;
        }
      `
		);
		return `@keyframes changeBackground {
      ${keyframes.join('\n')}
      100% {
        background-image: url(${background[0]});
        opacity: 1;
      }
    }`;
	};
	const styles = {
		imageContainer: {
			width: '100%',
			height: windowHeight * 0.8,
			maxWidth: '100vw',
			flex: '0.75',
			position: 'relative',
			borderColor: '#DEE4E7',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			animation: `changeBackground 10s infinite`,
		},
	};
	useEffect(() => {
		setWindowHeight(window.innerHeight);
	}, []);
	return (
		<>
			<style>{createKeyframes()}</style>
			<Grid
				item
				container
				direction={'row'}
				padding={10}
				border={5}
				sx={styles.imageContainer}
			></Grid>
		</>
	);
};

export default MainContent;
