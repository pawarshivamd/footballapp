import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Categories = () => {
  return (
    <>
      <Box className="white-line-box"></Box>

      <Container>
        <section className="categorie-section">

          <Box className="categorie-title">Categories</Box>
          <Box className="categor-line"></Box>
          <Box sx={{ mt: 2 }}>

            <Grid container spacing={2}>
              <Grid item lg={2} sm={2} xs={3}></Grid>
              <Grid item lg={2} sm={2} xs={3}><Typography className="head-line" sx={{ textAlign: "center" }}>Price</Typography></Grid>
              <Grid item lg={1} sm={1} xs={2}></Grid>
              <Grid item lg={2} sm={2} xs={4}><Typography className="head-line">Number of Tickets</Typography></Grid>
            </Grid>
            <Box>
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">VIP +</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* 2 */}
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">VIP</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className=" non-select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* 3 */}
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">Premium</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className=" non-select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* 4 */}
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">Category 1</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className="non-select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* 5 */}
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">Category 2</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className="non-select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>
              {/* 6 */}
              <Grid container spacing={1} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">Category 3</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={2} >
                  <Box className="select-box-body">
                    <Box className="non-select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={4} >
                  <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>-</Box>
                    <Box className='btn'>+</Box>
                  </Box>
                </Grid>
              </Grid>

            </Box>

            <button className='add-cart-btn'>Add to cart</button>
            <Box>
              <Typography className="our-text">or purchase via whatsapp</Typography>
              <Box className="purchase-line"></Box>
            </Box>
          </Box>
        </section>
      </Container>
    </>
  )
}

export default Categories
