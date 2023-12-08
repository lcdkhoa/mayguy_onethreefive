import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

import ObjectHandler from './components/ObjectHandler';
import { ToolCardList } from './configs/constants';

export default function Tools() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		ReactGA.send({
			hitType: 'pageview',
			page: location.pathname,
			title: 'Tools',
		});
	}, []);

	useEffect(() => {
		ReactGA.event({
			category: 'Tools',
			action: 'Click on Object Handler',
		});
	}, [open]);

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
			<ObjectHandler open={open} setOpen={setOpen} />
		</Grid>
	);
}
