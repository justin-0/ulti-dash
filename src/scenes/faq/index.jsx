import Header from '../../components/Header';
import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material/';

const Faq = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title={'FAQ'} subtitle={'Reference for most asked questions'} />
			<Accordion
				sx={{ marginBottom: '10px', borderRadius: '5px', overflow: 'hidden' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colours.blueAccent[600]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						natus minima velit rerum sequi quae amet dolor officiis laborum
						saepe?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{ marginBottom: '10px', borderRadius: '5px', overflow: 'hidden' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colours.blueAccent[600]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						natus minima velit rerum sequi quae amet dolor officiis laborum
						saepe?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{ marginBottom: '10px', borderRadius: '5px', overflow: 'hidden' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colours.blueAccent[600]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						natus minima velit rerum sequi quae amet dolor officiis laborum
						saepe?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				sx={{ marginBottom: '10px', borderRadius: '5px', overflow: 'hidden' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colours.blueAccent[600]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						natus minima velit rerum sequi quae amet dolor officiis laborum
						saepe?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ borderRadius: '5px', overflow: 'hidden' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography color={colours.blueAccent[600]} variant='h5'>
						Lorem ipsum dolor sit amet.
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						natus minima velit rerum sequi quae amet dolor officiis laborum
						saepe?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export default Faq;
