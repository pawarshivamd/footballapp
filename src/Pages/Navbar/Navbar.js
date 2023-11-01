import React, { useEffect, useRef, useState } from "react"
import logo from "../../Assets/Imgs/logo/logo.svg"
import { Box, ClickAwayListener, Container } from "@mui/material"
import { Link, NavLink } from "react-router-dom"
import { ExpandMore } from "@mui/icons-material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { fetchTeams } from "../../API"

const Navbar = ( props ) => {
  const [openteams, setOpenteams] = useState(false)
  const [showMenubar, setShowMenubar] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [teams, setTeams] = useState([])
  const teamsMenuRef = useRef(null)

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const handleClick = () => {
    setOpenteams((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpenteams(false)
  }

  const handleMenuClick = () => {
    setShowMenubar(!showMenubar)
    if (!showMenubar) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }
  const handleMenuItemClick = () => {
    setIsNavigating(true)
    setShowMenubar(false)
    setOpenteams(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    ;(async () => {
      const { status, teams } = await fetchTeams()
      if (status) setTeams(teams)
    })()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isNavigating) {
      const delay = setTimeout(() => {
        document.body.classList.remove("no-scroll")
        setIsNavigating(false)
      }, 100)
      return () => clearTimeout(delay)
    }
  }, [isNavigating])
  return (
    <>
      <Box className={`${isSticky ? "sticky-head" : ""}`}>
        <header className="header">
          <Container maxWidth="xl">
            <nav className="navbar">
              <Box className="img-box">
                <Link to="/" onClick={handleMenuItemClick}>
                  <img src={logo} alt="" />
                </Link>
              </Box>
              <Box
                component="ul"
                sx={{ display: "flex" }}
                className={`list-group ${showMenubar ? "list-group-show" : ""}`}
              >
                <Box component="li">
                  <NavLink to="/about-us" onClick={handleMenuItemClick}>
                    About Us
                  </NavLink>
                </Box>
                <Box component="li" ref={teamsMenuRef}>
                  <ClickAwayListener onClickAway={handleClickAway}>
                    <span sx={{ position: "relative" }}>
                      <NavLink
                        onClick={handleClick}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        Teams
                        {openteams ? (
                          <ExpandMore fontSize="medium" />
                        ) : (
                          <ChevronRightIcon fontSize="medium" />
                        )}
                      </NavLink>
                      {openteams ? (
                        <Box className="list-group-body">
                          <Box
                            className="list-container"
                            sx={{ display: "flex" }}
                          >
                            {teams.map((club, index) => (
                              <NavLink
                                key={index}
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  textTransform: "capitalize",
                                }}
                                className="list-item"
                                onClick={handleMenuItemClick}
                                to={`/club/${club?.id}`}
                              >
                                {club?.name}
                              </NavLink>
                            ))}
                          </Box>
                        </Box>
                      ) : null}
                    </span>
                  </ClickAwayListener>
                </Box>
                <Box component="li">
                  <NavLink to="stadium-tours" onClick={handleMenuItemClick}>
                    Stadium Tours
                  </NavLink>
                </Box>
                <Box component="li">
                  <NavLink to="/contact-us" onClick={handleMenuItemClick}>
                    Contact Us
                  </NavLink>
                </Box>
              </Box>
              <Box className="menubar-box" onClick={handleMenuClick}>
                {showMenubar ? <CloseIcon /> : <MenuIcon />}
              </Box>
            </nav>
          </Container>
        </header>
        <Box className="line-y"></Box>
      </Box>
    </>
  )
}

export default Navbar
