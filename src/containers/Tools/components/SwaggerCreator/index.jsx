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

	const handleClose = () => {
		close(index);
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
					{ToolSwaggers.map((tool, index) => (
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
					<HandlerButton onClick={handleClose}>Create Swagger</HandlerButton>
					<HandlerButton onClick={handleClose}>Close</HandlerButton>
				</Grid>
			</Dialog>
		</form>
	);
}
