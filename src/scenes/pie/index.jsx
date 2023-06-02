import Piechart from '../../components/Piechart';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const Pie = () => {
	return (
		<Box margin='20px'>
			<Header title={'Pie Chart'} subtitle={'Data shown with a pie chart'} />
			<Box height='75vh'>
				<Piechart />
			</Box>
		</Box>
	);
};

export default Pie;
