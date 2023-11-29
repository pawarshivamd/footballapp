import styled from '@emotion/styled'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { cartapi } from './Cart'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
export const CustomTextField = styled(TextField)`
margin:5px 0px;
  .MuiInputBase-root{
  border-radius: 0;
  border:none;

  }
input{
  padding:7.5px 14px;
  background-color:#EAEAEA ;
  border-radius: 0;

}
input[placeholder], [placeholder], *[placeholder] {
    color: #172945 ;
}
fieldset{
  border:none;
}
`
const Order = () => {
  return (
    <>
      <Box className="white-line-box"></Box>
      <section className="order-section">
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 item lg={3} md={3} sm={4}>
              <Typography className="head-text">Enter your data </Typography>
              <Box className="data-line"></Box>
              <Box className="form-body">
                <CustomTextField id="outlined-basic" variant="outlined" placeholder="NAME *" fullWidth className='text-input-field' />
                <CustomTextField id="outlined-basic" variant="outlined" placeholder="SURNAME  *" fullWidth />
                <CustomTextField id="outlined-basic" variant="outlined" placeholder="EMAIL  *" fullWidth />
                <CustomTextField id="outlined-basic" variant="outlined" placeholder="PHONE NUMBER *" fullWidth />
              </Box>
            </Grid2>
            <Grid2 item lg={6} md={5} sm={7} xs={12} lgOffset="auto" smOffset="auto">
              <Box>
                <Box>
                  <Typography className="head-text">ORDER</Typography>
                  <Box className="order-line"></Box>
                </Box>
                <Box className="oder-conform-body">


                  {cartapi.map((curEel, index) => {
                    const { mainText, btnText, amountText } = curEel;
                    return (
                      <Box className="carat-body">
                        <Box className="cart-contain">
                          <Grid container >
                            <Grid item lg={6} sm={6} xs={7} sx={{ display: "flex", alignItems: "center" }}>
                              <Typography className="main-text">{mainText}</Typography>
                            </Grid>
                            <Grid item lg={3}  sm={3} xs={2}>
                              <Box className="button-body" sx={{justifyContent:"center"}}>
                                <Typography className="btn-text" >{btnText}</Typography>
                              </Box>
                            </Grid>
                            <Grid item lg={3} sm={3} xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Typography className="amount-text">{amountText}$</Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    )
                  })}

                  <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Grid container sx={{display:"flex"}} className="total-box">
                                <Grid item lg={6} sm={6} xs={9}><Typography className="total-text">TOTAL PURCHASE:</Typography></Grid>
                                <Grid item lg={3}  sm={3} xs={0}></Grid>
                                <Grid item lg={2} sm={2} xs={2}><Typography className="text-amount">000$</Typography></Grid>
                            </Grid>

                            </Grid>
                        </Grid>
                </Box>
                  <Box >
                    <Grid container>
                    <Grid item lg={6} sx={{mt:3}}>
                      <Typography className="head-text">Add Payment Method</Typography>
                      <Box className="add-payment-line"></Box>
                      <Typography  sx={{mt:2}}><span className="purchase-box">or purchase via whatsapp</span></Typography>
                    </Grid>
                    <Grid item lg={6} sx={{mt:3}}>
                        <Box sx={{display:"flex"}}>
                        <Box>Note:</Box>
                            <Box className="sub-text-notes">
                             You will receive an email that your payment has been successful
                            </Box>
                        </Box> 
                    </Grid>
                    </Grid>
                  </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </section>
    </>
  )
}

export default Order
