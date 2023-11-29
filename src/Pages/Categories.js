import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
const dataApi = [
  {
    id:"0",
    mainText:"VIP+",
  },
  {
    id:"1",
    mainText:"VIP",
  },
  {
    id:"2",
    mainText:"VIP+",
  },
  {
    id:"3",
    mainText:"Premium",
  },
  {
    id:"4",
    mainText:"Category 1",
  },
  {
    id:"5",
    mainText:"Category 2",
  },
  {
    id:"6",
    mainText:"Category 3",
  },
]
const Categories = () => {
  return (
    <>
      <Box className="white-line-box"></Box>

      <Container>
        <section className="categorie-section">

          <Box className="categorie-title">Categories</Box>
          <Box className="categor-line"></Box>
          <Box sx={{mt:2}}>
            <Container>
              <Grid container spacing={2}>
                <Grid item lg={2} sm={2} xs={3}></Grid>
                <Grid item lg={2} sm={2} xs={3}><Typography className="head-line" sx={{ textAlign: "center" }}>Price</Typography></Grid>
                <Grid item lg={1} sm={1} xs={1}></Grid>
                <Grid item lg={2} sm={2} xs={5}><Typography className="head-line" sx={{ textAlign: "center" }}>Number of Tickets</Typography></Grid>
              </Grid>
              <Box>
          {dataApi.map((cure,index )=>{
            const{mainText}=cure;
            return(
              <Grid container spacing={2} mt={1} className='card-body'>
                <Grid item lg={2} sm={2} xs={3} >
                  <Typography className="main-text">{mainText}</Typography>
                </Grid>
                <Grid item lg={2} sm={2} xs={3}>
                  <Box className="amount-body"><Typography className="amount-text">000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1} xs={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2} xs={5}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Box className='btn'>+</Box>
                    <Box className='btn'>-</Box>
                  </Box>
                </Grid>
              </Grid>
            )
          })}


              {/* <Grid container spacing={2} className="card-body">
                <Grid item lg={2} sm={2}>
                  <Typography>VIP</Typography>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box className="amount-body"><Typography>000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Button className='btn'>+</Button>
                    <Button className='btn'>-</Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} className="card-body">
                <Grid item lg={2} sm={2}>
                  <Typography>Premium</Typography>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box className="amount-body"><Typography>000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Button className='btn'>+</Button>
                    <Button className='btn'>-</Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} className="card-body">
                <Grid item lg={2} sm={2}>
                  <Typography>Category 1</Typography>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box className="amount-body"><Typography>000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Button className='btn'>+</Button>
                    <Button className='btn'>-</Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} className="card-body">
                <Grid item lg={2} sm={2}>
                  <Typography>Category 2</Typography>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box className="amount-body"><Typography>000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Button className='btn'>+</Button>
                    <Button className='btn'>-</Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} className="card-body">
                <Grid item lg={2} sm={2}>
                  <Typography>Category 3</Typography>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box className="amount-body"><Typography>000$</Typography></Box>
                </Grid>
                <Grid item lg={1} sm={1}>
                  <Box className="select-box-body">
                    <Box className="select-box"></Box>
                  </Box>
                </Grid>
                <Grid item lg={2} sm={2}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="number-ticket">0</Box>
                    <Button className='btn'>+</Button>
                    <Button className='btn'>-</Button>
                  </Box>
                </Grid>
              </Grid> */}
              </Box>
            </Container>
            <button className='add-cart-btn'>Add to cart</button>
            <Box>
              <Typography>or purchase via whatsapp</Typography>
              <Box className="purchase-line"></Box>
            </Box>
          </Box>
        </section>
      </Container>
    </>
  )
}

export default Categories
