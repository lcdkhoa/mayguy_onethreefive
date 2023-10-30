import App from '@/containers/App/App';
import '@/styles/css/globals.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const MOUNT_NODE = document.getElementById('root');

ReactDOM.createRoot(MOUNT_NODE).render(
	<>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</>
);
