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
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ToolCardList } from './configs/constants';

export default function Tools() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');

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

	const handleFlaten = () => {
		try {
			const obj = JSON.parse(text);
			const flatJson = JSON.stringify(FlattenObjects(obj));
			setText(flatJson);
		} catch (error) {
			setText('Invalid JSON input.');
		}
	};

	const handleUnflatten = () => {
		try {
			const obj = JSON.parse(text);
			const unflatJson = JSON.stringify(UnflattenObjects(obj, '_'));
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
							<Grid item xs={3} container justifyContent={'flex-start'}>
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
									variant="contained"
									sx={{ marginRight: 1 }}
								>
									Convert to Nested JSON
								</Button>
								<Button
									onClick={() => handleFlaten()}
									color="primary"
									variant="contained"
									sx={{ marginRight: 1 }}
								>
									Convert to Flat JSON
								</Button>
							</Grid>
							<Grid item xs={3} container justifyContent={'flex-end'}>
								<Button
									onClick={() => handleCopy()}
									color="primary"
									variant="contained"
									sx={{ marginRight: 1 }}
								>
									Copy
								</Button>
								<Button
									onClick={handleClose}
									color="primary"
									variant="contained"
								>
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
