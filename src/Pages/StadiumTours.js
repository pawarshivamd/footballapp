import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import manchester from '../Assets/Imgs/stadium/manchester.png'
import ArsenalFC from '../Assets/Imgs/stadium/ArsenalFC.png'
import ChelseaFC from '../Assets/Imgs/stadium/ChelseaFC.png'
import LiverpooFC from '../Assets/Imgs/stadium/Liverpoo FC.png'
import ManchesterCity from '../Assets/Imgs/stadium/ManchesterCity.png'
import TottenhamHotspurs from '../Assets/Imgs/stadium/TottenhamHotspurs.png'
import FCBarcelona from '../Assets/Imgs/stadium/FCBarcelona.png'
import RealMadrid from '../Assets/Imgs/stadium/RealMadrid.png'
import AtleticodeMadrid from '../Assets/Imgs/stadium/AtleticodeMadrid.png'
import ACMilanInterMilan from '../Assets/Imgs/stadium/ACMilanInterMilan.png'
import JuventusFC from '../Assets/Imgs/stadium/JuventusFC.png'
import ASRoma from '../Assets/Imgs/stadium/ASRoma.png'
import PSG from '../Assets/Imgs/stadium/PSG.png'
import BayernMunich from '../Assets/Imgs/stadium/BayernMunich.png'
import BorussiaDortmund from '../Assets/Imgs/stadium/BorussiaDortmund.png'
import { Link } from 'react-router-dom'

const stadiumApi = [
  {
    id: "0",
    stadiumImg: manchester,
    alt: "manchester",
    mainText: "Manchester United",
    subText: "Old Trafford",
    request: "REQUEST TICKET",
  },
  {
    id: "1",
    stadiumImg: ArsenalFC,
    alt: "Arsenal FC",
    mainText: "Arsenal FC",
    subText: "emirates stadium",
    request: "REQUEST TICKET",
  },
  {
    id: "2",
    stadiumImg: ChelseaFC,
    alt: "ChelseaFC",
    mainText: "Chelsea FC",
    subText: "stamford bridge",
    request: "REQUEST TICKET",
  },
  {
    id: "3",
    stadiumImg: LiverpooFC,
    alt: "LiverpooFC",
    mainText: "Liverpool FC",
    subText: "anfield",
    request: "REQUEST TICKET",
  },
  {
    id: "4",
    stadiumImg: ManchesterCity,
    alt: "ManchesterCity",
    mainText: "Manchester City",
    subText: "etihad stadium",
    request: "REQUEST TICKET",
  },
  {
    id: "5",
    stadiumImg: TottenhamHotspurs,
    alt: "TottenhamHotspurs",
    mainText: "Tottenham Hotspurs",
    subText: "spurs stadium",
    request: "REQUEST TICKET",
  },
  {
    id: "6",
    stadiumImg: FCBarcelona,
    alt: "FCBarcelona",
    mainText: "FC Barcelona",
    subText: "camp nou",
    request: "REQUEST TICKET",
  },
  {
    id: "7",
    stadiumImg: RealMadrid,
    alt: "RealMadrid",
    mainText: "Real Madrid",
    subText: "santiago bernabeu",
    request: "REQUEST TICKET",
  },
  {
    id: "8",
    stadiumImg: AtleticodeMadrid,
    alt: "AtleticodeMadrid",
    mainText: "Atletico de Madrid",
    subText: "wanda metropolitano",
    request: "REQUEST TICKET",
  },
  {
    id: "9",
    stadiumImg: ACMilanInterMilan,
    alt: "ACMilanInterMilan",
    mainText: "AC Milan/ Inter Milan",
    subText: "san siro",
    request: "REQUEST TICKET",
  },
  {
    id: "10",
    stadiumImg: JuventusFC,
    alt: "JuventusFC",
    mainText: "Juventus FC",
    subText: "allianz stadium",
    request: "REQUEST TICKET",
  },
  {
    id: "11",
    stadiumImg: ASRoma,
    alt: "ASRoma",
    mainText: "AS Roma",
    subText: "stadio olimpico",
    request: "REQUEST TICKET",
  },
  {
    id: "12",
    stadiumImg: PSG,
    alt: "PSG",
    mainText: "PSG",
    subText: "parc des princes",
    request: "REQUEST TICKET",
  },
  {
    id: "13",
    stadiumImg: BayernMunich,
    alt: "BayernMunich",
    mainText: "Bayern Munich",
    subText: "allianz arena",
    request: "REQUEST TICKET",
  },
  {
    id: "14",
    stadiumImg: BorussiaDortmund,
    alt: "BorussiaDortmund",
    mainText: "Borussia Dortmund",
    subText: "signal iduna park",
    request: "REQUEST TICKET",
  },

]
const StadiumTours = () => {
  return (
    <>
      <Box className=" gray-line-box"></Box>
      <section className='stadium-tours-section'>
        <Container>
          {stadiumApi.map((cureEle, index) => {
            const { stadiumImg, alt, mainText, subText, request } = cureEle;
            return (
              <Box className='stadium-body' key={index}>
                <Box className="img-body">
                  <img src={stadiumImg} alt={alt} className='img-contain' />
                </Box>
                <Box className='stadium-contain'>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box className="text-body">
                      <Typography className='main-text' >{mainText}</Typography>
                      <Typography className='sub-text' >{subText}</Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <Link to="https://api.whatsapp.com/send/?phone=%2B96594715154&text&type=phone_number&app_absent=0"><button className='request-btn' >{request}</button></Link>
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
