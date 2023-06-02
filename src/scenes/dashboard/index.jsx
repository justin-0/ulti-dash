import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlined from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/Barchart';
import Geography from '../../components/GeoChart';
import StatsBox from '../../components/StatsBox';
import ProgressBar from '../../components/ProgressBar';

const Dashboard = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Header title={'Dashboard'} subtitle={'Welcome to your dashboard'} />
				<Box>
					<Button
						sx={{
							backgroundColor: colours.blueAccent[700],
							color: colours.grey[100],
							fontSize: '14px',
							fontWeight: 'bold',
							padding: '10px 20px',
						}}>
						<DownloadOutlined sx={{ mr: '10px' }} />
						Download Reports
					</Button>
				</Box>
			</Box>
			{/* Grid for Stats and Charts */}
			<Box
				display='grid'
				gridTemplateColumns='repeat(12, 1fr)'
				gap='20px'
				gridAutoRows='140px'>
				{/* Row 1 */}
				<Box
					gridColumn='span 3'
					display='flex'
					justifyContent='center'
					backgroundColor={colours.primary[400]}
					alignItems='center'>
					<StatsBox
						title='12,540'
						subtitle='Emails sent'
						progress='0.75'
						increase='+18%'
						icon={
							<EmailIcon
								sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					display='flex'
					justifyContent='center'
					backgroundColor={colours.primary[400]}
					alignItems='center'>
					<StatsBox
						title='39,111'
						subtitle='Sales Hit'
						progress='0.5'
						increase='+21%'
						icon={
							<PointOfSaleIcon
								sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					display='flex'
					justifyContent='center'
					backgroundColor={colours.primary[400]}
					alignItems='center'>
					<StatsBox
						title='57,851'
						subtitle='New Clients'
						progress='0.25'
						increase='+41%'
						icon={
							<PersonAddIcon
								sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					display='flex'
					justifyContent='center'
					backgroundColor={colours.primary[400]}
					alignItems='center'>
					<StatsBox
						title='3,213,699'
						subtitle='Inbound Yearly Traffic'
						progress='0.95'
						increase='+80%'
						icon={
							<TrafficIcon
								sx={{ color: colours.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				{/* Row 2 */}
				<Box
					gridColumn='span 8'
					gridRow='span 2'
					backgroundColor={colours.primary[400]}>
					<Box
						mt='25px'
						p='0 30px'
						display='flex'
						justifyContent='space-between'
						alignItems='center'>
						<Box>
							<Typography
								variant='h5'
								fontWeight='600'
								color={colours.grey[100]}>
								Revenue Generated
							</Typography>
							<Typography
								variant='h3'
								fontWeight='bold'
								color={colours.greenAccent[500]}>
								£111,634
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlined
									sx={{ fontSize: '26px', color: colours.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					{/* Line Chart */}
					<Box height='250px' ml='-20px' paddingBottom='5px'>
						<LineChart isDashboard={true} />
					</Box>
				</Box>
				{/* Transactions */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colours.primary[400]}
					overflow='auto'>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						borderBottom={`4px solid ${colours.primary[500]}`}
						color={colours.grey[100]}
						p='15px'>
						<Typography variant='h5' color={colours.grey[100]} fontWeight='600'>
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((t, i) => (
						<Box
							key={t.txId - i}
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							borderBottom={`4px solid ${colours.primary[500]}`}
							p='15px'>
							<Box>
								<Typography
									variant='h5'
									color={colours.greenAccent[500]}
									fontWeight='600'>
									{t.txId}
								</Typography>
								<Typography color={colours.grey[100]}>{t.user}</Typography>
							</Box>
							<Box color={colours.grey[100]}>{t.date}</Box>
							<Box
								backgroundColor={colours.greenAccent[500]}
								p='5px 10px'
								borderRadius='4px'>
								{t.cost}
							</Box>
						</Box>
					))}
				</Box>
				{/* Row 3 */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colours.primary[400]}
					p='30px'>
					<Typography variant='h5' fontWeight='600'>
						Campaign
					</Typography>
					<Box
						display='flex'
						flexDirection='column'
						alignItems='center'
						mt='25px'>
						<ProgressBar size='125' />
						<Typography
							variant='h5'
							color={colours.greenAccent[500]}
							sx={{ mt: '15px' }}>
							£39,502
						</Typography>
						<Typography variant='h5' fontWeight='600'>
							Misc expenditures and costs included
						</Typography>
					</Box>
				</Box>
				{/* BAR */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colours.primary[400]}>
					<Typography
						variant='h5'
						fontWeight='600'
						sx={{ p: '30px 30px 0 30px' }}>
						Sales Quantity
					</Typography>
					<Box height='250px' mt='-20px'>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				{/* GEO CHART */}
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					backgroundColor={colours.primary[400]}
					p='30px'>
					<Typography variant='h5' fontWeight='600' sx={{ mb: '15px' }}>
						Traffic Based on Location
					</Typography>
					<Box height='200px'>
						<Geography isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
