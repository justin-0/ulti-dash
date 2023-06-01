import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData.js';

import Header from '../../components/Header';
import { useTheme } from '@emotion/react';

const Invoices = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 150, flex: 0.5 },
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{ field: 'email', headerName: 'Email', width: 150, flex: 1 },

		{
			field: 'cost',
			headerName: 'Amount',
			width: 150,
			flex: 1,
			renderCell: (params) => (
				<Typography color={colours.greenAccent[500]}>
					{params.row.cost}
				</Typography>
			),
		},
		{ field: 'phone', headerName: 'Phone', width: 150, flex: 1 },
		{ field: 'date', headerName: 'Date of Invoice', width: 150, flex: 1 },
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			flex: 1,
			renderCell: ({ row: { status } }) => {
				return (
					<Typography
						color={
							status === 'Outstanding'
								? colours.redAccent[600]
								: colours.greenAccent[700]
						}>
						{status}
					</Typography>
				);
			},
		},
	];

	return (
		<Box m='20px'>
			<Header
				title={'Invoices'}
				subtitle={'Check payment status on balances'}
			/>
			<Box m='40px 0 0 0'>
				<DataGrid rows={mockDataInvoices} columns={columns} />
			</Box>
		</Box>
	);
};

export default Invoices;
