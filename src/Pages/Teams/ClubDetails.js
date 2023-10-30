import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import ArsenalFC from "../../Assets/Imgs/teamslogo/ArsenalFC.png"
import HeadLine from "../../Components/HeadLine"
import { Link, useParams } from "react-router-dom"
import { fetchTeamSchedule } from "../../API"

const ClubDetails = () => {
  const { id } = useParams()

  const [clubSchedule, setClubSchedule] = useState({})

  useEffect(() => {
    ;(async () => {
      const { schedule, status } = await fetchTeamSchedule(id)
      if (status) setClubSchedule(schedule[0])
    })()
    return setClubSchedule({})
  }, [id])

  return (
    <>
      <HeadLine
        bgcolorbigline="#DA020E"
        bgcolortext="#FFE500"
        TeamsName="Manchester United"
      />
      <section className="teams-container-section">
        <Container maxWidth="md">
          <Box className="teams-head-body">
            <Typography className="main-text">Manchester United</Typography>
            <Typography className="sub-text">Fixtures</Typography>
            <img src={ArsenalFC} alt="ArsenalFC" className="teams-logo" />
          </Box>
          <Box>
            <Box className="ticket-container-body">
              <Box className="ticket-left-body">
                {Object.keys(clubSchedule) &&
                  Object.keys(clubSchedule).map((cureEle, i) => {
                    const Fixtures = clubSchedule[cureEle]

                    return (
                      <>
                        <Box
                          sx={{
                            textAlign: "center",
                            py: "10px",
                            width: "80%",
                            mt: "30px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "27px", fontWeight: "200" }}
                          >
                            {cureEle}
                          </Typography>{" "}
                        </Box>

                        {Fixtures &&
                          Fixtures.length &&
                          Fixtures.map((Fixture, key) => {
                            const {
                              date,
                              league,
                              host,
                              opponent,
                              time,
                              whatsapp,
                            } = Fixture
                            return (
                              <Box className="contain-body" key={key}>
                                <Box className="teams-date-body">
                                  <Typography className="main-date-text">
                                    {date}
                                  </Typography>
                                  <Typography className="sub-text">
                                    {league}
                                  </Typography>
                                  <Box className="box-contain">
                                    <Typography>{host}</Typography>
                                    <Typography>{time}</Typography>
                                    <Typography>{opponent}</Typography>
                                  </Box>
                                </Box>
                                <Box className="btn-box">
                                  <Link
                                    to={`https://api.whatsapp.com/send/?phone=${whatsapp}&text&type=phone_number&app_absent=0`}
                                  >
                                    <button className="btn">
                                      REQUEST TICKET
                                    </button>
                                  </Link>
                                </Box>
                              </Box>
                            )
                          })}
                      </>
                    )
                  })}
              </Box>
              <Box className="ticket-right-body"></Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  )
}

export default ClubDetails
