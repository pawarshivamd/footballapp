import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Cart = () => {
    return (
        <>
            <Box className="white-line-box"></Box>
            <section className="cart-section">
                <Container>
                    <Box>
                        <Typography className="cart-head-text">Cart</Typography>
                        <Box className="cart-line"></Box>
                    </Box>
                    <Box>
                        <Grid container>
                            <Grid item lg={7} md={7} sm={11} xs={12} sx={{ mt: 4 }}>
                                <Box className="carat-body" >
                                    <Box className="cart-contain">
                                        <Grid container sx={{ alignItems: "center" }}>
                                            <Grid item lg={6} sm={7} xs={5} sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography className="main-text">LALIGA FC BARCELONA - FC </Typography>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={4}>
                                                <Box className="button-body">
                                                    <Box className='btn'>-</Box>
                                                    <Typography className="btn-text">x2</Typography>
                                                    <Box className='btn'>+</Box>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={3} sm={2} xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box className="amount-text">000$</Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ ml: 2 }} className="btn-box">
                                        <button className='remove-btn'>remove</button>
                                    </Box>
                                </Box>
                                {/* 2 */}
                                <Box className="carat-body" >
                                    <Box className="cart-contain">
                                        <Grid container sx={{ alignItems: "center" }}>
                                            <Grid item lg={6} sm={7} xs={5} sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography className="main-text">LALIGA FC BARCELONA - FC </Typography>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={4}>
                                                <Box className="button-body">
                                                    <Box className='btn'>-</Box>
                                                    <Typography className="btn-text">x2</Typography>
                                                    <Box className='btn'>+</Box>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={3} sm={2} xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box className="amount-text">000$</Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ ml: 2 }} className="btn-box">
                                        <button className='remove-btn'>remove</button>
                                    </Box>
                                </Box>
                                {/* 3 */}
                                <Box className="carat-body" >
                                    <Box className="cart-contain">
                                        <Grid container sx={{ alignItems: "center" }}>
                                            <Grid item lg={6} sm={7} xs={5} sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography className="main-text">LALIGA FC BARCELONA - FC </Typography>
                                            </Grid>
                                            <Grid item lg={3} sm={3} xs={4}>
                                                <Box className="button-body">
                                                    <Box className='btn'>-</Box>
                                                    <Typography className="btn-text">x2</Typography>
                                                    <Box className='btn'>+</Box>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={3} sm={2} xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Box className="amount-text">000$</Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ ml: 2 }} className="btn-box">
                                        <button className='remove-btn'>remove</button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={6} sm={9} xs={9}>
                                <Grid container sx={{ display: "flex" }} className="total-box">
                                    <Grid item lg={6} xs={8}><Typography className="total-text">TOTAL PURCHASE:</Typography></Grid>
                                    <Grid item lg={3} xs={0}></Grid>
                                    <Grid item lg={2} xs={4}><Typography className="text-amount">000$</Typography></Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Box>
                </Container>
            </section>
        </>
    )
}

export default Cart
