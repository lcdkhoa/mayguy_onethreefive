import DeviceContext from '@/components/DetectDevice';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/containers/About';
import Blogs from '@/containers/Blogs';
import Home from '@/containers/Home';
import NotFound from '@/containers/NotFound';
import Tools from '@/containers/Tools';
import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const isMobile = /iPhone|Android/i.test(navigator.userAgent);

	return (
		<Grid container direction="column" wrap="nowrap">
			<DeviceContext.Provider value={isMobile}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/tools" element={<Tools />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
				<Footer />
			</DeviceContext.Provider>
		</Grid>
	);
}

export default App;
