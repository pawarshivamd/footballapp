import { Box, Container, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import ArsenalFC from '../../Assets/Imgs/teamslogo/ArsenalFC.png'
import HeadLine from '../../Components/HeadLine'
import { Link } from 'react-router-dom'

const TicketDateApi = [
    {
        id: "0",
        MonathYear: "September 2023",
        DayDateMonth: "Saturday 16th September",
        SubText: "Premier League",
        Team1: "Manchester United",
        Time: "15:00",
        Team2: "Brighton and Hove Albion",
        Request: "REQUEST TICKET",
    },
    {
        id: "1",
        MonathYear: "",
        DayDateMonth: "Wednesday 20th September",
        SubText: "UEFA Champions League",
        Team1: "Bayern Munich",
        Time: "20:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "2",
        MonathYear: "",
        DayDateMonth: "Saturday 23rd September",
        SubText: "Premier League",
        Team1: "Burnley",
        Time: "20:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "3",
        MonathYear: "",
        DayDateMonth: "Tuesday 26th September",
        SubText: "Carabao Cup",
        Team1: "Manchester United",
        Time: "20:00",
        Team2: "Crystal Palace",
        Request: "REQUEST TICKET",
    },
    {
        id: "4",
        MonathYear: "",
        DayDateMonth: "Saturday 30th September",
        SubText: "Premier League",
        Team1: "Manchester United",
        Time: "15:00",
        Team2: "Crystal Palace",
        Request: "REQUEST TICKET",
    },
    {
        id: "5",
        MonathYear: "October 2023",
        DayDateMonth: "Tuesday 3rd October",
        SubText: "UEFA Champions League",
        Team1: "Manchester United",
        Time: "20:00",
        Team2: "Galatasaray",
        Request: "REQUEST TICKET",
    },
    {
        id: "6",
        MonathYear: "",
        DayDateMonth: "Saturday 7th October",
        SubText: "Premier League",
        Team1: "Manchester United",
        Time: "15:00",
        Team2: "Brentford",
        Request: "REQUEST TICKET",
    },
    {
        id: "7",
        MonathYear: "",
        DayDateMonth: "Saturday 21st October",
        SubText: "Premier League",
        Team1: "Sheffield United",
        Time: "20:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "8",
        MonathYear: "",
        DayDateMonth: "Tuesday 24th October",
        SubText: "UEFA Champions League",
        Team1: "Manchester United",
        Time: "20:00",
        Team2: "FC Copenhagen",
        Request: "REQUEST TICKET",
    },
    {
        id: "9",
        MonathYear: "",
        DayDateMonth: "Sunday 29th October",
        SubText: "Premier League",
        Team1: "Manchester United",
        Time: "15:30",
        Team2: "Manchester City",
        Request: "REQUEST TICKET",
    },
    {
        id: "10",
        MonathYear: "November 2023",
        DayDateMonth: "Saturday 4th November",
        SubText: "Premier League",
        Team1: "Fulham",
        Time: "15:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "11",
        MonathYear: "",
        DayDateMonth: "Wednesday 8th November",
        SubText: "UEFA Champions League",
        Team1: "FC Copenhagen",
        Time: "20:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "12",
        MonathYear: "",
        DayDateMonth: "Saturday 11th November",
        SubText: "Premier League",
        Team1: "Manchester United",
        Time: "15:00",
        Team2: "Luton Town",
        Request: "REQUEST TICKET",
    },
    {
        id: "13",
        MonathYear: "",
        DayDateMonth: "Saturday 25th November",
        SubText: "Premier League",
        Team1: "Everton",
        Time: "15:00",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
    {
        id: "14",
        MonathYear: "",
        DayDateMonth: "Wednesday 29th November",
        SubText: "UEFA Champions League",
        Team1: "Galatasaray",
        Time: "17:45",
        Team2: "Manchester United",
        Request: "REQUEST TICKET",
    },
]

const ManchesterUnited = () => {
    return (
        <>
            <HeadLine bgcolorbigline="#DA020E" bgcolortext="#FFE500" TeamsName="Manchester United" />
            <section className='teams-container-section'>
                <Container maxWidth="md" >
                    <Box className="teams-head-body" >
                        <Typography className='main-text'>Manchester United</Typography>
                        <Typography className='sub-text'>Fixtures</Typography>
                        <img src={ArsenalFC} alt="ArsenalFC" className='teams-logo' />
                    </Box>
                    <Box>
                        <Box className='ticket-container-body'>
                            <Box className="ticket-left-body">

                                {TicketDateApi.map((cureEle, i) => {
                                    const { MonathYear, DayDateMonth, SubText, Team1, Time, Team2, Request } = cureEle;
                                    return (
                                        <>
                                            <Box sx={{ textAlign: "center", py: "10px", width: "80%", mt: "30px" }}><Typography sx={{ fontSize: "27px", fontWeight: "200" }} >{MonathYear}</Typography> </Box>
                                            <Box className="contain-body">
                                                <Box className="teams-date-body">
                                                    <Typography className="main-date-text" >{DayDateMonth}</Typography>
                                                    <Typography className='sub-text'>{SubText}</Typography>
                                                    <Box className="box-contain">
                                                        <Typography>{Team1}</Typography>
                                                        <Typography>{Time}</Typography>
                                                        <Typography>{Team2}</Typography>
                                                    </Box>
                                                </Box>
                                                <Box className="btn-box"><Link to="https://www.figma.com/exit?url=https%3A%2F%2Fwa.me%2F%2B96594715154"><button className='btn'>{Request}</button></Link></Box>
                                            </Box>
                                        </>
                                    )
                                })}
                            </Box>
                            <Box className='ticket-right-body' >
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default ManchesterUnited
