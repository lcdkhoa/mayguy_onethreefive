import { FlattenObjects, UnflattenObjects } from '@/utils/object-handler';
import MonacoEditor from '@monaco-editor/react';
import {
	Button,
	Dialog,
	DialogContent,
	Divider,
	Grid,
	styled,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

SwaggerConverter.propTypes = {
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

const HandlerButton = styled(Button)(({ theme }) => ({
	width: 'auto',
	borderRadius: 50,
	border: '1px solid',
	color: theme.palette.primary.main,
	transition: 'transform 0.3s ease, border-color 0.3s ease',
	marginRight: 10,
	marginLeft: 10,
	'&:hover': {
		transform: 'scale(1.1)',
	},
}));

export default function SwaggerConverter({ ...props }) {
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
