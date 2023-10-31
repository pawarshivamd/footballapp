import { Box, Container } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import EmailIcon from "@mui/icons-material/Email"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { fetchContact } from "../API"
import Loader from "../Components/Loader/Loader"
const Contact_Us = () => {
  const [contactDetails, setContactDetails] = useState({})

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    ;(async () => {
      const { data, status } = await fetchContact()
      if (status) {
        setContactDetails(data)
      }
      setLoading(false)
    })()
  }, [])

  return loading ? (
    <Loader />
  ) : (
    <>
      <Box className="white-line-box"></Box>
      <section className="contact-section">
        <Container>
          <Box className="social-body">
            <Box>
              <Link to={`mailto://${contactDetails?.email}`}>
                <EmailIcon color="primary" className="icon" />
              </Link>
            </Box>

            <Link
              to={`mailto://${contactDetails?.email}`}
              className="text-link"
            >
              {contactDetails?.email}
            </Link>
          </Box>
          <Box className="social-body">
            <Box>
              <Link
                to={`https://www.instagram.com/${contactDetails?.instagram}/`}
              >
                <InstagramIcon color="primary" className="icon" />
              </Link>
            </Box>
            <Link
              to={`https://www.instagram.com/${contactDetails?.instagram}/`}
              className="text-link"
            >
              {contactDetails?.instagram}
            </Link>
          </Box>
          <Box className="social-body">
            <Box>
              <Link
                to={`https://api.whatsapp.com/send/?phone=${contactDetails?.whatsapp}&text&type=phone_number&app_absent=0`}
              >
                <WhatsAppIcon color="primary" className="icon" />
              </Link>
            </Box>
            <Link
              to={`https://api.whatsapp.com/send/?phone=${contactDetails?.whatsapp}&text&type=phone_number&app_absent=0`}
              className="text-link"
            >
              +{contactDetails?.whatsapp}
            </Link>
          </Box>
          <Box className="social-body">
            <Box>
              <Link to={contactDetails?.map_link}>
                <LocationOnIcon color="primary" className="icon" />
              </Link>
            </Box>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                to={contactDetails?.map_link}
                className="text-link"
                style={{ display: "block", width: "25%" }}
              >
                {contactDetails?.address}
              </Link>
            </div>
          </Box>
        </Container>
      </section>
    </>
  )
}

export default Contact_Us
