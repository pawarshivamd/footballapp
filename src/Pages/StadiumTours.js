import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchStadium } from "../API"

const StadiumTours = () => {
  const [stadiums, setStadiums] = useState([])

  useEffect(() => {
    ;(async () => {
      const { status, teams } = await fetchStadium()
      if (status) setStadiums(teams)
    })()
  }, [])

  return (
    <>
      <Box className=" gray-line-box"></Box>
      <section className="stadium-tours-section">
        <Container>
          {stadiums.map((cureEle, index) => {
            const { number, photo, stadium, team } = cureEle
            return (
              <Box className="stadium-body" key={index + number}>
                <Box className="img-body">
                  <img
                    src={`https://football.jennypoint.com/api/resources/images/${photo}`}
                    alt={team}
                    className="img-contain"
                  />
                </Box>
                <Box className="stadium-contain">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="text-body">
                      <Typography className="main-text">{team}</Typography>
                      <Typography className="sub-text">{stadium}</Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Link
                        to={`https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`}
                      >
                        <button className="request-btn">REQUEST TICKET</button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export default StadiumTours
