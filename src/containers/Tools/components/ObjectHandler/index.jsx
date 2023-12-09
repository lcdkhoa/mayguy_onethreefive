import { FlattenObjects, UnflattenObjects } from '@/utils/object-handler';
import MonacoEditor from '@monaco-editor/react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
		console.log('handleFlaten');
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

	// const handlePaste = async () => {
	// 	try {
	// 		const text = await navigator.clipboard.readText();
	// 		const obj = JSON.parse(text);
	// 		const prettyJson = JSON.stringify(obj, null, 2);
	// 		setText(prettyJson);
	// 	} catch (err) {
	// 		setText(err);
	// 	}
	// };

	// const handleSelect = (event) => {
	// 	const textarea = event.target;
	// 	const cursorPosition = textarea.selectionStart;
	// 	const lineNumber = textarea.value
	// 		.substring(0, cursorPosition)
	// 		.split('\n').length;
	// 	console.log(lineNumber);
	// 	setSelectedLines(selectedLines);
	// };

	const handleOnchange = (e) => {
		setText(e);
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
				<DialogContent>
					{/* <TextField
						name="handler"
						hiddenLabel
						autoFocus
						multiline
						fullWidth
						minRows={10}
						value={text}
						scroll={'body'}
						// onPaste={handlePaste}
						onSelect={handleSelect}
						{...register('handler', {
							required: false,
							onChange: (e) => {
								setText(e.target.value);
							},
						})}
					></TextField> */}
					<MonacoEditor
						height={'60vh'}
						theme="vs-light"
						defaultLanguage="json"
						defaultValue={text}
						onChange={(e) => {
							handleOnchange(e);
						}}
						value={text}
						options={{
							automaticLayout: true,
							autoIndent: 'full',
							formatOnPaste: true,
							formatOnType: true,
							minimap: { enabled: false },
							wordWrap: 'off',
							quickSuggestions: true,
						}}
					/>
				</DialogContent>
				<DialogActions sx={{ justifyContent: 'center' }}>
					<Button
						onClick={() => handleUnflatten()}
						color="primary"
						variant="outlined"
						sx={{ marginRight: 1 }}
					>
						Convert to Nested
					</Button>
					<Button
						onClick={() => handleFlaten()}
						color="primary"
						variant="outlined"
						sx={{ marginRight: 1 }}
					>
						Convert to Flat
					</Button>
					<Button
						onClick={() => handleAddInput()}
						color="primary"
						variant="outlined"
						sx={{ marginRight: 1 }}
					>
						{inputText}
					</Button>
					<Button
						onClick={() => handleAddOutput()}
						color="primary"
						variant="outlined"
						sx={{ marginRight: 1 }}
					>
						{outputText}
					</Button>
					{/* <Button
						onClick={() => handleCopy()}
						color="primary"
						variant="outlined"
						sx={{ marginRight: 1 }}
					>
						Copy
					</Button> */}
					<Button onClick={handleClose} color="primary" variant="outlined">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</form>
	);
}
