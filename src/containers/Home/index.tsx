import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { Container, Grid } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import React from 'react';
import { isMobile } from 'react-device-detect';

import MainContent from './components/MainContent';

const Home: React.FC = () => {
	const [isMobileDevice, setIsMobileDevice] = useState<boolean | string>('');
	useLayoutEffect(() => {
		setIsMobileDevice(isMobile);
	}, [isMobileDevice]);

	return (
		<Grid>
			{isMobileDevice === '' ? (
				<Loading />
			) : (
				<Container maxWidth={'lg'}>
					<Header />
					<MainContent />
					<Footer />
				</Container>
			)}
		</Grid>
	);
};

export default Home;
