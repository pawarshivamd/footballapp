import { Box, Container, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import HeadLine from "../../Components/HeadLine"
import { Link, useParams } from "react-router-dom"
import { fetchTeamSchedule } from "../../API"
import Loader from "../../Components/Loader/Loader"

const ClubDetails = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [teamDetails, setTeamDetails] = useState({})
  const [clubSchedule, setClubSchedule] = useState({})

  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const { schedule, status, team_data } = await fetchTeamSchedule(id)
      setTeamDetails(team_data[0])
      if (status) {
        setClubSchedule(schedule[0])
      } else {
        setClubSchedule([])
      }
      setLoading(false)
    })()
  }, [id])

  return loading ? (
    <Loader />
  ) : (
    <>
      <HeadLine
        bgcolorbigline={`#${teamDetails?.primary_color}`}
        bgcolortext={`#${teamDetails?.secondary_color}`}
        TeamsName={teamDetails?.name}
      />
      <section className="teams-container-section">
        <Container maxWidth="md">
          <Box className="teams-head-body">
            <Typography className="main-text">{teamDetails?.name}</Typography>
            <Typography className="sub-text">Fixtures</Typography>
            <img
              src={`https://football.jennypoint.com/api/resources/images/${teamDetails?.team_logo}`}
              alt="ArsenalFC"
              className="teams-logo"
            />
          </Box>
          <Box>
            <Box className="ticket-container-body">
              <Box className="ticket-left-body">
                {Object.keys(clubSchedule) &&
                  Object.keys(clubSchedule).map((cureEle, i) => {
                    const Fixtures = clubSchedule[cureEle]
                    return (
                      <div key={cureEle}>
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
                              <Box className="contain-body" key={date}>
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
                      </div>
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
