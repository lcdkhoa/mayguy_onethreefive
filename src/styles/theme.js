import { createTheme } from '@mui/material/styles';

import { color } from './color';

export const theme = createTheme({
	palette: {
		// material-ui custom palette
		primary: {
			main: color.primary,
			contrastText: color.white,
		},
		secondary: {
			main: color.secondary,
			contrastText: color.white,
		},
		text: {
			secondary: color.textSecondary,
			primary: color.textMain,
		},
		error: {
			main: color.error,
		},
	},
	// typography: {
	// 	htmlFontSize: 10, // this is the standard measurement, so that 1rem = 10px for easy dev
	// },
	// overrides: {
	// 	// material-ui's components styling overrides
	// 	MuiSnackbarContent: {
	// 		root: {
	// 			backgroundColor: color.snackBarUpdate,
	// 		},
	// 		action: {
	// 			color: '#FA6449',
	// 			paddingLeft: '5px',
	// 			paddingRight: '5px',
	// 		},
	// 	},
	// 	MuiContainer: {
	// 		maxWidthMd: {
	// 			maxWidth: 1024,
	// 			'@media (min-width: 960px)': {
	// 				maxWidth: 1024,
	// 			},
	// 		},
	// 	},
	// 	MuiMenu: {
	// 		list: {
	// 			'@media (min-width: 1600px)': {
	// 				maxHeight: '60vh',
	// 			},
	// 		},
	// 	},
	// 	MuiTypography: {
	// 		h1: {
	// 			fontSize: 40,
	// 			'@media (max-width:768px)': {
	// 				fontSize: 40,
	// 			},
	// 		},
	// 		h3: {
	// 			'@media (max-width:768px)': {
	// 				fontSize: 35,
	// 			},
	// 		},
	// 		h4: {
	// 			'@media (max-width:768px)': {
	// 				fontSize: '2.0rem',
	// 			},
	// 		},
	// 		body: {
	// 			fontSize: '16pt',
	// 			'@media (max-width:768px)': {
	// 				fontSize: '16pt',
	// 			},
	// 		},
	// 		body1: {
	// 			fontSize: '18pt',
	// 			'@media (max-width:768px)': {
	// 				fontSize: '18pt',
	// 			},
	// 		},
	// 		body2: {
	// 			fontSize: 30,
	// 			'@media (max-width:768px)': {
	// 				fontSize: 30,
	// 			},
	// 		},
	// 		caption: {
	// 			fontSize: 13,
	// 			'@media (max-width:768px)': {
	// 				fontSize: 13,
	// 			},
	// 		},
	// 		subtitle1: {
	// 			fontSize: 18,
	// 			'@media (max-width:768px)': {
	// 				fontSize: 18,
	// 			},
	// 		},
	// 	},
	// },
});
