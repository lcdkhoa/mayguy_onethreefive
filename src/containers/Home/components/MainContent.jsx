import DeviceContext from '@/components/DetectDevice';
import { backgroundDesktop, backgroundMobile } from '@/configs/constants';
import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';

const MainContent = () => {
	const [background, setBackground] = useState([]);
	let isMobileDevice = useContext(DeviceContext);

	useEffect(() => {
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
			height: `${innerHeight * 0.8}px`,
			borderColor: '#DEE4E7',
			borderRadius: '10px',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			animation: `changeBackground 10s infinite`,
		},
	};

	return (
		<>
			<style>{createKeyframes()}</style>
			<Grid
				margin={'10px 0 10px 0'}
				item
				container
				direction={'row'}
				border={5}
				sx={styles.imageContainer}
			></Grid>
		</>
	);
};

export default MainContent;
