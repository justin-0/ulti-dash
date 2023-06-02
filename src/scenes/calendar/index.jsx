import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const Calendar = () => {
	const theme = useTheme();
	const colours = tokens(theme.palette.mode);

	const [currentEvents, setCurrentEvents] = useState([]);
	console.log('Current Events State: ', currentEvents);

	const handleDateClick = (selected) => {
		const title = prompt('Please enter title for your event');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = (selected) => {
		if (
			window.confirm(
				`Are you sure you want to delete this event? '${selected.event.title}'`
			)
		) {
			selected.event.remove();
		}
	};

	return (
		<Box m='20px'>
			<Header
				title={'Calendar'}
				subtitle={'Manage events by adding or deleting from your calendar'}
			/>

			<Box display='flex' justifyContent='space-between'>
				{/* Calendar Sidebar */}
				<Box
					flex='1 1 20%'
					backgroundColor={colours.primary[400]}
					p='15px'
					borderRadius='4px'>
					<Typography variant='h5'>Events</Typography>
					<List>
						{currentEvents.map((event) => (
							<ListItem
								key={event.id}
								sx={{
									backgroundColor: colours.greenAccent[500],
									margin: '10px 0',
									borderRadius: '2px',
								}}>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Box>
				{/* Full Calendar */}
				<Box flex='1 1 100%' ml='15px'>
					{/* <FullCalendar /> */}
					<FullCalendar
						plugins={[
							dayGridPlugin,
							timeGridPlugin,
							interactionPlugin,
							listPlugin,
						]}
						// Toolbar above calendar
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
						}}
						// Set default view
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						// Click on date and run our function
						select={handleDateClick}
						// Click on event inside date and run function
						eventClick={handleEventClick}
						// Call setter function and add event object to events array when event data is changed at all
						eventsSet={(events) => setCurrentEvents(events)}
						initialEvents={[
							{
								id: '1265',
								title: 'Move to Mars',
								date: '2023-06-25',
							},
						]}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Calendar;
