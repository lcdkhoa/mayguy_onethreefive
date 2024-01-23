import { ConvertJsonToYaml } from '@/utils/swagger-creator';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
	Button,
	Dialog,
	DialogContent,
	Divider,
	Grid,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { ToolSwaggers } from '../../configs/constants';

SwaggerCreator.propTypes = {
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

export default function SwaggerCreator({ ...props }) {
	const { open, close, index } = props;
	const { register, getValues, watch, setValue } = useForm({
		defaultValues: {},
	});
	const watchAllFields = watch();
	console.log(watchAllFields);

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
							<AccordionSummary
								expandIcon={<ArrowDropDownIcon />}
								aria-controls="panel1-content"
								id={tool.id}
							>
								<Typography>{tool.title}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id={tool.id + '_text'}
									name={tool.name}
									placeholder={tool.textHolder}
									fullWidth
									{...register(tool.name, {
										required: true,
										onChange: (e) => setValue(tool.name, e.target.value),
									})}
								>
									{' '}
								</TextField>
							</AccordionDetails>
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
