import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <Box className="white-line-box"></Box>
      <section className='about-section'>
        <Container>
          <Box className="main-box">
            <Typography className='text-'>
              The Football Agency is a football ticketing agency established in 2015 and has grown to become one of the top ticketing agencies in the region. The agency consists of a team of representatives all over the MENA region and Europe with over 50.000 tickets sold. We offer the widest range of ticket categories from standard seatings to VIP boxes, as well as premium service.
            </Typography>
          </Box>
          <Box className="main-box">
            <Typography className='text- font-text'>
              إن ذا فوتبول اجنسي هي وكالة بيع تذاكر مباريات كرة القدم وقد تأسست وانطلقت في عملها سنة ٢٠١٥ وكلنا فخر أننا توصّلنا لأن نكون من الأفضل والأقوى في المنطقة. الوكالة وبفضل فريق عمل في الشرق الأوسط ,شمال افريقيا وأوروبا ومع ٥٠ الف تذكرة تقدّم خياراً واسعا" لكل الفئات والأماكن والمقاعد وصولا الى مقاعد كبار الشخصيات مع خدمة ممتازة.
            </Typography>
          </Box>
          <Box className="download-text">Click To Download PDF</Box>
          <Box className="btn-box"><Link><button size="md" className='btn'>Portfolio</button></Link></Box>
        </Container>
      </section>
    </>
  )
}

export default AboutUs
