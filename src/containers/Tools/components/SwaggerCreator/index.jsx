import HandlerButton from '@/components/HandlerButton';
import { ConvertJsonToYaml } from '@/utils/swagger-creator';
import MonacoEditor from '@monaco-editor/react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
	Dialog,
	DialogContent,
	Divider,
	Grid,
	MenuItem,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ToolSwaggers } from '../../configs/constants';

SwaggerCreator.propTypes = {
	open: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
};

const RoundBorderTextField = styled(TextField)(() => ({
	'& .MuiOutlinedInput-root': {
		borderRadius: 50,
	},
}));

const CustomAccordionSummary = styled(AccordionSummary)(() => ({
	'& .MuiAccordionSummary-content.Mui-expanded': {
		margin: 0,
	},
	'& .MuiAccordionSummary-content': {
		margin: 0,
	},
}));

export default function SwaggerCreator({ ...props }) {
	const { open, close, index } = props;
	const { getValues, setValue } = useForm({
		defaultValues: {},
	});
	// const watchAllFields = watch();

	const handleClose = () => {
		close(index);
	};

	const handleSubmit = () => {
		const jsonRequest = JSON.parse(getValues('api_input_schema'));
		const jsonResponse = JSON.parse(getValues('api_output_schema'));
		const inputUrl = getValues('api_url');
		const inputTitle = getValues('api_title');
		const inputDescription = getValues('api_description');
		const inputVersion = getValues('api_version');
		const inputMethod = getValues('api_method');
		const inputPath = getValues('api_path');
		const jsonInputBadError = JSON.parse(getValues('api_bad_error_schema'));
		const jsonInputInternalError = JSON.parse(
			getValues('api_network_error_schema')
		);
		const yamlData = ConvertJsonToYaml(
			jsonRequest,
			jsonResponse,
			inputUrl,
			inputTitle,
			inputDescription,
			inputVersion,
			inputMethod,
			inputPath,
			jsonInputBadError,
			jsonInputInternalError
		);
		const blob = new Blob([yamlData], { type: 'text/yaml' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${inputTitle}_swagger.yaml`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
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
					{ToolSwaggers.map((tool) => (
						<Accordion key={tool.id}>
							<CustomAccordionSummary
								expandIcon={<ArrowDropDownIcon />}
								aria-controls="panel1-content"
								id={tool.id}
							>
								<Grid item container direction={'row'} alignItems={'center'}>
									<tool.icon fontSize="large" />
									<Typography
										sx={{
											marginLeft: 2,
										}}
									>
										{tool.title}
									</Typography>
								</Grid>
							</CustomAccordionSummary>
							<Grid
								item
								container
								sx={{
									padding: 2,
								}}
							>
								<Typography
									variant={'body'}
									sx={{
										marginBottom: 2,
										marginLeft: 2,
									}}
								>
									{tool.description}
								</Typography>
								{tool.jsonRender ? (
									<MonacoEditor
										height={'40vh'}
										theme="vs-light"
										id={tool.id + '_json'}
										defaultLanguage="json"
										name={tool.name}
										onChange={(value) => {
											setValue(tool.name, value);
										}}
										value={getValues(tool.name)}
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
								) : (
									<RoundBorderTextField
										id={tool.id + '_text'}
										name={tool.name}
										select={tool.hasDropdown}
										value={getValues(tool.name) || ''}
										placeholder={tool.textHolder}
										fullWidth
										onChange={(e) => setValue(tool.name, e.target.value)}
									>
										{tool.hasDropdown &&
											tool.dropdownValue.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.value}
												</MenuItem>
											))}
									</RoundBorderTextField>
								)}
							</Grid>
						</Accordion>
					))}
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
					<HandlerButton type="submit" onClick={handleSubmit}>
						Create Swagger
					</HandlerButton>
					<HandlerButton onClick={handleClose}>Close</HandlerButton>
				</Grid>
			</Dialog>
		</form>
	);
}
