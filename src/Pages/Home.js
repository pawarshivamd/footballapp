import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Box, Container, Grid, Typography } from '@mui/material';
import imgbg1 from '../Assets/Imgs/herobg/bg1.png';
import imgbg2 from '../Assets/Imgs/herobg/bg2.png';
import imgbg3 from '../Assets/Imgs/herobg/bg3.png';
import imgbg4 from '../Assets/Imgs/herobg/bg4.png';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Home = () => {
  return (

    <>
      <Box >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="hero-slider"
        >

          <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg1})` }} >
            <Box container className='hero-body'>
              <Box>
                <Typography className='main-text'  >ONE CLICK AWAY</Typography>
                <Typography className='sub-text'>from making your dream come true</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg2})` }} >
            <Box container className='hero-body'>
              <Box  >
                <Typography className='main-text'>ONE CLICK AWAY</Typography>
                <Typography className='sub-text'>from making your dream come true</Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg3})` }} >
            <Box container className='hero-body'>
              <Box  >
                <Typography className='main-text'  >ONE CLICK AWAY</Typography>
                <Typography className='sub-text'>from making your dream come true</Typography>

              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' style={{ backgroundImage: `url(${imgbg4})` }} >
            <Box container className='hero-body'>
              <Box  >
                <Typography className='main-text'  >ONE CLICK AWAY</Typography>
                <Typography className='sub-text'>from making your dream come true</Typography>

              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box className="home-about-section">
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Typography className='text-main' >About Us</Typography>
              <Typography className='sub-text'>The Football Agency is a Football ticketing agency established in 2015 and has grown to become one of the top ticketing agencies in the region. <br />
                The agency consists of a team of representatives all over the MENA region and Europe with over 50.000 tickets sold. <br />
                We offer the widest range of ticket categories from standard seatings to VIP boxes, as well as premium service.</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box className="about-right-body">
                <Typography className='text-main' >Contact us :</Typography>
                <Box className="social-container">
                  <Box className="social-body">
                    <Link to="https://info@thefootballagency.net/"  ><EmailIcon color='primary' className='icon' /></Link>
                    <Link to="https://info@thefootballagency.net/" className='text-link' >info@thefootballagency.net</Link>
                  </Box>
                  <Box className="social-body">
                    <Link to="https://www.instagram.com/thefootballagencykw/"><InstagramIcon color='primary' className='icon' /></Link>
                    <Link to="https://www.instagram.com/thefootballagencykw/" className='text-link' >thefootballagencykw</Link>
                  </Box>
                  <Box className="social-body">
                    <Link to="https://api.whatsapp.com/send/?phone=%2B96594715154&text&type=phone_number&app_absent=0"><WhatsAppIcon color='primary' className='icon' /></Link>
                    <Link to="https://api.whatsapp.com/send/?phone=%2B96594715154&text&type=phone_number&app_absent=0" className='text-link' >+965 9471 5154</Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home
