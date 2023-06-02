import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Barchart from '../../components/Barchart';

const Bar = () => {
	return (
		<Box margin='20px'>
			<Header title={'Bar Chart'} subtitle={'Data shown with a bar chart'} />
			<Box height='75vh'>
				<Barchart />
			</Box>
		</Box>
	);
};

export default Bar;
