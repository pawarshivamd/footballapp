import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"

const HeadLine = (props) => {
  const [isSticky, setIsSticky] = useState(false)
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <Box className={` teams-line-box ${isSticky ? " sticky-tems-line":""}  `}>
      <Box
        className="manchester-united-line"
        sx={{ background: props.bgcolorbigline }}
      ></Box>
      <Box
        className="manchester-united-text"
        sx={{ background: props.bgcolortext, textTransform: "capitalize" }}
      >
        {props.TeamsName}
      </Box>
    </Box>
  )
}

export default HeadLine
