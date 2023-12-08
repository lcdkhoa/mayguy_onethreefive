import { FlattenObjects, UnflattenObjects } from '@/utils/object-handler';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

ObjectHandler.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
};

export default function ObjectHandler({ ...props }) {
	const { open, setOpen } = props;
	const [text, setText] = useState('');
	const [inputText, setInputText] = useState('Add input_');
	const [outputText, setOutputText] = useState('Add output_');

	const handleClose = () => {
		setOpen(false);
		setText('');
	};

	const {
		register,
		// formState: { errors, isDirty },
	} = useForm({
		defaultValues: '',
	});

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

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.error('Failed to copy: ', err);
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

	return (
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
	);
}
