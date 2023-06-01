import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData.js';
import { AdminPanelSettingsOutlined } from '@mui/icons-material';
import { LockOpenOutlined } from '@mui/icons-material';
import { SecurityOutlined } from '@mui/icons-material';
import Header from '../../components/Header';

const Team = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	const rows = [
		{ id: 1, col1: 'Hello', col2: 'World' },
		{ id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
		{ id: 3, col1: 'MUI', col2: 'is Amazing' },
	];

	const dataKeys = Object.keys(mockDataTeam[0]);

	const columns = [
		{ field: dataKeys[0], headerName: 'ID', width: 150 },
		{
			field: dataKeys[1],
			headerName: 'Name',
			width: 150,
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: dataKeys[3],
			headerName: 'Age',
			width: 150,
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{ field: dataKeys[2], headerName: 'Email', width: 150, flex: 1 },

		{ field: dataKeys[4], headerName: 'Phone Number', width: 150, flex: 1 },
		{
			field: dataKeys[5],
			headerName: 'Access Level',
			width: 150,
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width='60%'
						m='0 auto'
						p='5px'
						display='flex'
						justifyContent='center'
						backgroundColor={
							access === 'admin'
								? colours.greenAccent[600]
								: colours.greenAccent[700]
						}
						borderRadius='4px'>
						{access === 'admin' && <AdminPanelSettingsOutlined />}
						{access === 'manager' && <SecurityOutlined />}
						{access === 'user' && <LockOpenOutlined />}
						<Typography color={colours.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				);
			},
		},
	];

	return (
		<Box m='20px'>
			<Header title={'Team'} subtitle={'Manage your team from here'} />
			<Box m='40px 0 0 0'>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};

export default Team;
