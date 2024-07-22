import HandlerButton from '@/components/HandlerButton';
import { FlattenObjects, UnFlatObjects } from '@/utils/object-handler';
import MonacoEditor from '@monaco-editor/react';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import {
	Dialog,
	DialogContent,
	Divider,
	Grid,
	IconButton,
	Toolbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

// import { FlattenObjects, UnFlatObjects } from '@lcdkhoa/object-handler';
import OptionPopover from './components/OptionsPopover';

const EditorToolbar = ({ editorRef }) => {
	const formatDocument = () => {
		if (!editorRef.current) return;
		if (!editorRef.current.getValue()) return;
		try {
			const formattedText = JSON.stringify(
				JSON.parse(editorRef.current.getValue()),
				null,
				2
			);
			editorRef.current.setValue(formattedText);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<Toolbar>
			<IconButton>
				<FormatAlignRightIcon onClick={formatDocument} />
			</IconButton>
		</Toolbar>
	);
};

EditorToolbar.propTypes = {
	editorRef: PropTypes.object.isRequired,
};

export default function ObjectHandler({ ...props }) {
	const { open, close, index } = props;
	const [text, setText] = useState('');
	const [inputText, setInputText] = useState('Add input_');
	const [outputText, setOutputText] = useState('Add output_');
	// const editorRef = useRef(null);

	const [toolbarOptionsAnchorEl, setToolbarOptionsAnchorEl] = useState(null);
	const [splitter, setSelectedSplitter] = useState('_');
	const handleClick = (event) => {
		setToolbarOptionsAnchorEl(event.currentTarget);
	};

	const handleCloseOption = () => {
		setToolbarOptionsAnchorEl(null);
	};

	const handleChange = (value) => {
		setSelectedSplitter(value);
	};

	const openOption = Boolean(toolbarOptionsAnchorEl);
	const id = openOption ? 'simple-popover' : undefined;

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
		try {
			const obj = JSON.parse(text);
			const flatJson = JSON.stringify(FlattenObjects(obj, splitter), null, 2);
			setText(flatJson);
		} catch (error) {
			alert(error);
		}
	};

	const handleUnFlat = () => {
		try {
			const obj = JSON.parse(text);
			const unFlatJson = JSON.stringify(UnFlatObjects(obj, splitter), null, 2);
			setText(unFlatJson);
		} catch (error) {
			alert(error);
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
					{/* <EditorToolbar editorRef={editorRef} /> */}
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
						// onMount={(editor) => {
						// 	editorRef.current = editor;
						// }}
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
					<OptionPopover
						id={id}
						openOption={openOption}
						toolbarOptionsAnchorEl={toolbarOptionsAnchorEl}
						handleClick={handleClick}
						handleCloseOption={handleCloseOption}
						handleChange={handleChange}
						splitter={splitter}
					/>
					<HandlerButton onClick={() => handleUnFlat()}>
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

ObjectHandler.propTypes = {
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};
