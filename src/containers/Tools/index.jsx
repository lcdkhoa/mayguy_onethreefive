import { FlattenObjects, UnflattenObjects } from '@/utils/object-handler';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { useForm } from 'react-hook-form';

import { ToolCardList } from './configs/constants';

export default function Tools() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');
	const [inputText, setInputText] = useState('Add input_');
	const [outputText, setOutputText] = useState('Add output_');

	useEffect(() => {
		ReactGA.send({
			hitType: 'pageview',
			page: location.pathname,
			title: 'Tools',
		});
	}, []);

	useEffect(() => {
		ReactGA.event({
			category: 'Tools',
			action: 'Click on Object Handler',
		});
	}, [open]);

	const {
		register,
		// formState: { errors, isDirty },
	} = useForm({
		defaultValues: '',
	});

	const handleClose = () => {
		setOpen(false);
		setText('');
	};

	const handleAddInput = () => {
		if (inputText === 'Add input_') {
			setInputText('Remove input_');
			const obj = JSON.parse(text);
			Object.keys(obj).forEach((key) => {
				obj['input_' + key] = obj[key];
				delete obj[key];
			});
			setText(JSON.stringify(obj, null, 2));
		} else {
			setInputText('Add input_');
			const obj = JSON.parse(text);
			Object.keys(obj).forEach((key) => {
				obj[key.replace('input_', '')] = obj[key];
				delete obj[key];
			});
			setText(JSON.stringify(obj, null, 2));
		}
	};

	const handleAddOutput = () => {
		if (outputText === 'Add output_') {
			setOutputText('Remove output_');
			const obj = JSON.parse(text);
			Object.keys(obj).forEach((key) => {
				obj['output_' + key] = obj[key];
				delete obj[key];
			});
			setText(JSON.stringify(obj, null, 2));
		} else {
			setOutputText('Add output_');
			const obj = JSON.parse(text);
			Object.keys(obj).forEach((key) => {
				obj[key.replace('output_', '')] = obj[key];
				delete obj[key];
			});
			setText(JSON.stringify(obj, null, 2));
		}
	};

	const handleFlaten = () => {
		try {
			const obj = JSON.parse(text);
			const flatJson = JSON.stringify(FlattenObjects(obj), null, 2);
			setText(flatJson);
		} catch (error) {
			setText('Invalid JSON input.');
		}
	};

	const handleUnflatten = () => {
		try {
			const obj = JSON.parse(text);
			const unflatJson = JSON.stringify(UnflattenObjects(obj, '_'), null, 2);
			setText(unflatJson);
		} catch (error) {
			setText('Invalid JSON input.');
		}
	};

	const handlePrettyPrint = () => {
		try {
			const obj = JSON.parse(text);
			const prettyJson = JSON.stringify(obj, null, 2);
			setText(prettyJson);
		} catch (error) {
			setText('Invalid JSON input.');
		}
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<Grid xs item container alignContent={'center'} justifyContent={'center'}>
			{ToolCardList.map((tool) => (
				<Card
					sx={{
						width: 400,
						height: 300,
						transition: 'transform 0.2s ease-in-out',
						'&:hover': {
							transform: 'scale(1.05)',
							boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
						},
						margin: '10px',
					}}
					key={tool.id}
					onClick={() => handleOpen()}
				>
					<CardHeader title={tool.title} />
					<CardMedia
						component="img"
						height="150"
						image={tool.imageUrl}
						alt={tool.title}
					/>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							{tool.description}
						</Typography>
					</CardContent>
					<CardActions disableSpacing></CardActions>
				</Card>
			))}

			<form>
				<Dialog
					open={open}
					fullWidth={true}
					maxWidth="md"
					keepMounted
					onClose={handleClose}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogContent sx={{ maxHeight: '60vh' }}>
						<TextField
							name="handler"
							hiddenLabel
							autoFocus
							multiline
							fullWidth
							value={text}
							scroll={'body'}
							{...register('handler', {
								required: false,
								onChange: (e) => {
									setText(e.target.value);
								},
							})}
						></TextField>
					</DialogContent>
					<DialogActions>
						<Grid item container direction={'row'}>
							<Grid item xs={2} container justifyContent={'flex-start'}>
								<Button
									variant="contained"
									color="primary"
									onClick={handlePrettyPrint}
								>
									Pretty Print
								</Button>
							</Grid>
							<Grid item xs container justifyContent={'center'}>
								<Button
									onClick={() => handleUnflatten()}
									color="primary"
									variant="text"
									sx={{ marginRight: 1 }}
								>
									Convert to Nested
								</Button>
								<Button
									onClick={() => handleFlaten()}
									color="primary"
									variant="text"
									sx={{ marginRight: 1 }}
								>
									Convert to Flat
								</Button>
								<Button
									onClick={() => handleAddInput()}
									color="primary"
									variant="text"
									sx={{ marginRight: 1 }}
								>
									{inputText}
								</Button>
								<Button
									onClick={() => handleAddOutput()}
									color="primary"
									variant="text"
									sx={{ marginRight: 1 }}
								>
									{outputText}
								</Button>
							</Grid>
							<Grid item xs={2} container justifyContent={'flex-end'}>
								<Button
									onClick={() => handleCopy()}
									color="primary"
									variant="text"
									sx={{ marginRight: 1 }}
								>
									Copy
								</Button>
								<Button onClick={handleClose} color="primary" variant="text">
									Close
								</Button>
							</Grid>
						</Grid>
					</DialogActions>
				</Dialog>
			</form>
		</Grid>
	);
}
