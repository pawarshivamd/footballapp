import { Box } from '@mui/material'
import React from 'react'

const HeadLine = (props) => {
  return (
    <Box className="teams-line-box"><Box className="manchester-united-line" sx={{ background: props.bgcolorbigline }}></Box><Box className="manchester-united-text" sx={{ background: props.bgcolortext }}>{props.TeamsName}</Box></Box>
  )
}

export default HeadLine
