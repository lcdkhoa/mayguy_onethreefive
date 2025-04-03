import HandlerButton from '@/components/HandlerButton';
import MonacoEditorWrapper from '@/components/MonacoEditorWrapper';
import { FlattenObjects, UnflattenObjects } from '@/utils/object-handler';
import { Dialog, DialogContent, Divider, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

ObjectHandler.propTypes = {
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

export default function ObjectHandler({ ...props }) {
	const { open, close, index } = props;
	const [text, setText] = useState('');
	const [inputText, setInputText] = useState('Add input_');
	const [outputText, setOutputText] = useState('Add output_');

	const handleClose = () => {
		close(index);
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

	const handleFlatten = () => {
		console.log('handleFlatten');
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
			const unflattenJson = JSON.stringify(UnflattenObjects(obj, '_'), null, 2);
			setText(unflattenJson);
		} catch (error) {
			setText('Invalid JSON input.');
		}
	};

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
					<MonacoEditorWrapper
						value={text}
						onChange={handleOnchange}
					/>
				</DialogContent>
				<Divider />
				<Grid
					item
					container
					direction={'row'}
					justifyContent={'center'}
					paddingBottom={2}
					paddingTop={2}
					xs={12}
				>
					<HandlerButton onClick={() => handleUnflatten()}>
						Convert to Nested
					</HandlerButton>
					<HandlerButton onClick={() => handleFlatten()}>
						Convert to Flat
					</HandlerButton>
					<HandlerButton onClick={() => handleAddInput()}>
						{inputText}
					</HandlerButton>
					<HandlerButton onClick={() => handleAddOutput()}>
						{outputText}
					</HandlerButton>
					<HandlerButton onClick={handleClose}>Close</HandlerButton>
				</Grid>
			</Dialog>
		</form>
	);
}
