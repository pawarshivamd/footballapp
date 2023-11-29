import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const ThankYou = () => {
  return (
    <>
     <Box className="white-line-box"></Box>
     <Container maxWidth="sm">
        <Box className="thankyou-body">
            <Typography className="email-text">email has been successfully sent</Typography>
            <Box className="thanks-line"></Box>
            <Typography className="main-text">Thank you for trusting us.</Typography>
            <Typography className="main-text">We will get back to you Shortly.</Typography>
            <Box className="one-click-box"><Typography className="sub-text">ONE CLICK AWAY from making your dream come true</Typography></Box>
        </Box>
     </Container> 
    </>
  )
}

export default ThankYou

