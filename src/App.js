import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Navbar/Navbar"
import Home from "./Pages/Home"
import { ThemeProvider, createTheme } from "@mui/material"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import StadiumTours from "./Pages/StadiumTours"
import ClubDetails from "./Pages/Teams/ClubDetails"

export const theme = createTheme({
  typography: {
    fontFamily: ["DIN Next LT Pro"].join(","),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Stadium-tours" element={<StadiumTours />} />
          <Route path="/club/:id" element={<ClubDetails />} />
          {/*Line given  below line redirects any other path to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
