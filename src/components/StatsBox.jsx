import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../theme';
import ProgressBar from './ProgressBar';

const StatsBox = ({ title, subtitle, icon, progress, increase }) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box width='100%' m='0 30px'>
			<Box display='flex' justifyContent='space-between'>
				<Box>
					{icon}
					<Typography
						variant='h4'
						fontWeight='bold'
						sx={{
							color: colours.grey[100],
						}}>
						{title}
					</Typography>
					<Typography
						variant='h5'
						sx={{
							color: colours.greenAccent[500],
						}}>
						{subtitle}
					</Typography>
				</Box>
				<Box></Box>
				<Box
					display='flex'
					justifyContent='space-between'
					flexDirection='column'>
					<ProgressBar progress={progress} />
					<Typography
						variant='h5'
						fontWeight='italic'
						sx={{
							color: colours.greenAccent[600],
						}}>
						{increase}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default StatsBox;
