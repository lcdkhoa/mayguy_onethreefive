import TuneIcon from '@mui/icons-material/Tune';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

const OptionPopover = ({
	id,
	openOption,
	toolbarOptionsAnchorEl,
	handleClick,
	handleCloseOption,
	handleChange,
}) => {
	const handleChooseSplitter = (value) => {
		handleChange(value);
		handleCloseOption();
	};
	return (
		<div title="Options">
			<IconButton edge="start" color="inherit" aria-label="menu">
				<TuneIcon onClick={handleClick} />
			</IconButton>
			<Menu
				id={id}
				open={openOption}
				anchorEl={toolbarOptionsAnchorEl}
				onClose={handleCloseOption}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
			>
				<MenuItem onClick={() => handleChooseSplitter('_')}>
					Split by underscore &quot;_&quot;
				</MenuItem>
				<MenuItem onClick={() => handleChooseSplitter('.')}>
					Split by dot &quot;.&quot;
				</MenuItem>
			</Menu>
		</div>
	);
};
OptionPopover.propTypes = {
	id: PropTypes.string.isRequired,
	openOption: PropTypes.bool.isRequired,
	toolbarOptionsAnchorEl: PropTypes.any,
	handleClick: PropTypes.func.isRequired,
	handleCloseOption: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	splitter: PropTypes.string.isRequired,
};

export default OptionPopover;
