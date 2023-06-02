import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';
import { tokens } from '../../theme';

const Geo = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	return (
		<Box margin='20px'>
			<Header
				title={'Geography Chart'}
				subtitle={'See data from around the world!'}
			/>
			<Box
				height='75vh'
				border={`1px solid ${colours.grey[100]}`}
				borderRadius='8px'>
				<GeoChart />
			</Box>
		</Box>
	);
};

export default Geo;
