import Header from '../../components/Header';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

const Faq = () => {
	return (
		<Box m='20px'>
			<Header title={'FAQ'} subtitle={'Reference for most asked questions'} />
		</Box>
	);
};

export default Faq;
