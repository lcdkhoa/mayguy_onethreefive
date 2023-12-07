import App from '@/containers/App/App';
import '@/styles/css/globals.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const MOUNT_NODE = document.getElementById('root');
ReactGA.initialize('G-VBJ37C6M1G');

ReactDOM.createRoot(MOUNT_NODE).render(
	<>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</>
);
