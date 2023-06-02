import { ColourModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard/index';
import Sidebar from './scenes/global/Sidebar';

import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contact from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
// import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
// import Georgraphy from './scenes/geography';
import Calendar from './scenes/calendar';

const App = () => {
	// Returns current MUI theme and colourMode: light or dark
	const [theme, colourMode] = useMode();

	return (
		// colourMode allows us to access the toggleMode as it returns object
		<ColourModeContext.Provider value={colourMode}>
			{/* Pass theme object depending on dark or light palettes */}
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<Sidebar />
					<main className='content'>
						<Topbar />
						<Routes>
							<Route index element={<Dashboard />} />
							<Route path='/team' element={<Team />} />
							<Route path='/contacts' element={<Contact />} />
							<Route path='/invoices' element={<Invoices />} />
							<Route path='/form' element={<Form />} />
							<Route path='/bar' element={<Bar />} />
							<Route path='/pie' element={<Pie />} />
							{/* <Route path='/line' element={<Line />} /> */}
							<Route path='/faq' element={<FAQ />} />
							{/* <Route path='/geography' element={<Georgraphy />} /> */}
							<Route path='/calendar' element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColourModeContext.Provider>
	);
};

export default App;
