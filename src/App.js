
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import StadiumTours from './Pages/StadiumTours';
import ManchesterUnited from './Pages/Teams/ManchesterUnited';
export const theme = createTheme({
  typography: {
    fontFamily: [
      'DIN Next LT Pro',
    ].join(','),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/Stadium-tours' element={<StadiumTours />} />
          <Route path='/manchester-united' element={<ManchesterUnited />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
