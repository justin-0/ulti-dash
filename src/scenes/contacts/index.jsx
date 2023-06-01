import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData.js';

import Header from '../../components/Header';
import { useTheme } from '@emotion/react';

const Contact = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 150, flex: 0.5 },
		{
			field: 'registrarId',
			headerName: 'Registrar ID',
			width: 150,
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{
			field: 'age',
			headerName: 'Age',
			width: 150,
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{ field: 'email', headerName: 'Email', width: 150, flex: 1 },

		{ field: 'phone', headerName: 'Phone Number', width: 150, flex: 1 },
		{ field: 'address', headerName: 'Address', width: 150, flex: 1 },
		{ field: 'city', headerName: 'City', width: 150, flex: 1 },
		{ field: 'zipCode', headerName: 'Zip Code', width: 150, flex: 1 },
	];

	return (
		<Box m='20px'>
			<Header
				title={'Contacts'}
				subtitle={'View your employees contact details'}
			/>
			<Box m='40px 0 0 0'>
				<DataGrid rows={mockDataContacts} columns={columns} />
			</Box>
		</Box>
	);
};

export default Contact;
