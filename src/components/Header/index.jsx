import DeviceContext from '@/components/DetectDevice';
import '@/styles/css/header.css';
import { useContext } from 'react';

import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

const Header = () => {
	let isMobileDevice = useContext(DeviceContext);

	return !isMobileDevice ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
