import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import User from '../../assets/user.jpeg';

// Item Component for Menu Items
const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	return (
		<MenuItem
			active={selected === title}
			style={{ color: colours.grey[100] }}
			onClick={() => setSelected(title)}
			icon={icon}>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

const Sidebar = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');
	return (
		<Box
			sx={{
				'& .pro-sidebar-inner': {
					background: `${colours.primary[400]} !important`,
				},
				'& .pro-sidebar-wrapper': {
					backgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
					backgroundColor: `${colours.primary[400]} !important`,
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .pro-menu-item.active': {
					color: '#6870fa !important',
				},
				'& .pro-sidebar .pro-menu.shaped .pro-menu-item > .pro-inner-item > .pro-icon-wrapper':
					{
						backgroundColor: `${colours.primary[400]} !important`,
					},
			}}>
			<ProSidebar collapsed={isCollapsed}>
				<Menu iconShape='square'>
					{/* Logo, Menu Icon */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0px 20px 0px',
							color: colours.grey[100],
						}}>
						{!isCollapsed && (
							<Box
								display='flex'
								justifyContent='space-between'
								alignItems='center'
								ml='15px'>
								<Typography variant='h3' color={colours.grey[100]}>
									supa dash
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{/* User */}
					{!isCollapsed && (
						<Box
							mb='25px'
							display='flex'
							justifyContent='center'
							alignItems='center'
							flexDirection='column'>
							<Box>
								<img
									src={User}
									alt='profile'
									width='75'
									height='75'
									style={{
										cursor: 'pointer',
										borderRadius: '50%',
									}}
								/>
							</Box>

							<Box textAlign='center'>
								<Typography
									variant='h2'
									color={colours.grey[100]}
									fontWeight='bold'
									sx={{ m: '10px 0 0 0' }}>
									Justin
								</Typography>
								<Typography variant='h5' color={colours.greenAccent[500]}>
									Admin Overlord
								</Typography>
							</Box>
						</Box>
					)}
					{/* Menu Items */}
					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<Item
							title='Dashboard'
							to='/'
							icon={<HomeOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colours.grey[300]}
							sx={{
								m: '15px 0 5px 20px',
							}}>
							Data
						</Typography>
						<Item
							title='Manage Team'
							to='/team'
							icon={<PeopleOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Contacts'
							to='/contacts'
							icon={<ContactsOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Invoices'
							to='/invoices'
							icon={<ReceiptOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colours.grey[300]}
							sx={{
								m: '15px 0 5px 20px',
							}}>
							Pages
						</Typography>
						<Item
							title='Profile'
							to='/form'
							icon={<PersonOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Calendar'
							to='/calendar'
							icon={<CalendarTodayOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='FAQs'
							to='/faq'
							icon={<HelpOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography
							variant='h6'
							color={colours.grey[300]}
							sx={{
								m: '15px 0 5px 20px',
							}}>
							Charts
						</Typography>
						<Item
							title='Bar Charts'
							to='/bar'
							icon={<BarChartOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Pie Charts'
							to='/pie'
							icon={<PieChartOutlineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Line Charts'
							to='/line'
							icon={<TimelineOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title='Geo Charts'
							to='/geography'
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</ProSidebar>
		</Box>
	);
};

export default Sidebar;
