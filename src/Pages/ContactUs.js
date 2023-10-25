import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact_Us = () => {
  return (
    <>
      <Box className="white-line-box"></Box>
      <section className='contact-section'>
        <Container>
          <Box className="social-body">

            <Box>

              <Link to="https://info@thefootballagency.net/"><EmailIcon color='primary' className='icon' /></Link>
            </Box>

            <Link to="https://info@thefootballagency.net/" className='text-link'  >info@thefootballagency.net</Link>

          </Box>
          <Box className="social-body">
            <Box>
              <Link to="https://www.instagram.com/thefootballagencykw/"><InstagramIcon color='primary' className='icon' /></Link>
            </Box>
            <Link to="https://www.instagram.com/thefootballagencykw/" className='text-link' >thefootballagencykw</Link>
          </Box>
          <Box className="social-body">
            <Box>
              <Link to="https://api.whatsapp.com/send/?phone=%2B96594715154&text&type=phone_number&app_absent=0"><WhatsAppIcon color='primary' className='icon' /></Link>
            </Box>
            <Link to="https://api.whatsapp.com/send/?phone=%2B96594715154&text&type=phone_number&app_absent=0" className='text-link' >+965 9471 5154</Link>
          </Box>
          <Box className="social-body">
            <Box>
              <Link to="https://www.google.com/maps/place/29%C2%B022'31.7%22N+47%C2%B058'39.9%22E/@29.3754722,47.97775,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.3754722!4d47.97775?entry=ttu"><LocationOnIcon color='primary' className='icon' /></Link>
            </Box>
            <Link to="https://www.google.com/maps/place/29%C2%B022'31.7%22N+47%C2%B058'39.9%22E/@29.3754722,47.97775,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.3754722!4d47.97775?entry=ttu" className='text-link' >SHARQ, BLOCK 6, MUBARAK AL-KHABEER ST. <br /> DERWAZA 51 TOWER, 8TH FLOOR, OFFICE 40</Link>
          </Box>
        </Container>
      </section>
    </>
  )
}

export default Contact_Us
