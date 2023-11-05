import DeviceContext from '@/components/DetectDevice';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/containers/About';
import Home from '@/containers/Home';
import NotFound from '@/containers/NotFound';
import Notes from '@/containers/Notes';
import Tools from '@/containers/Tools';
import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const isMobile = /iPhone|Android/i.test(navigator.userAgent);
	return (
		<Grid direction="column" container height={window.innerHeight}>
			<DeviceContext.Provider value={isMobile}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/tools" element={<Tools />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DeviceContext.Provider>
		</Grid>
	);
}

export default App;
