import DeviceContext from '@/components/DetectDevice';
import { useContext } from 'react';

import Hi from './components/Hi';
import MainContent from './components/MainContent';

const Home = () => {
	let isMobileDevice = useContext(DeviceContext);
	return !isMobileDevice ? <Hi /> : <MainContent />;
};

export default Home;
