import DeviceContext from '@/components/DetectDevice';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import About from '@/containers/About';
import Home from '@/containers/Home';
import NotFound from '@/containers/NotFound';
import Notes from '@/containers/Notes';
import Tools from '@/containers/Tools';
import { Container, Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	return (
		<Container maxWidth="lg" heigh={window.innerHeight}>
			<Grid item container direction="column">
				<DeviceContext.Provider value={isMobile}>
					<BrowserRouter>
						<Header />
						<Grid
							container
							justifyContent="center"
							sx={{
								height: {
									lg: 'calc(100vh - 96px)',
									md: 'calc(100vh - 112px)',
								},
								overflow: 'auto',
							}}
						>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/notes" element={<Notes />} />
								<Route path="/tools" element={<Tools />} />
								<Route path="/about" element={<About />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</Grid>
					</BrowserRouter>
					<Footer />
				</DeviceContext.Provider>
			</Grid>
		</Container>
	);
}

export default App;
