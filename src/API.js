import axios from "axios"

const publicApiUrl = "https://football.jennypoint.com/api/public"

const api = axios.create({
  baseURL: publicApiUrl,
  timeout: 30000, // 30 secs
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  validateStatus: (status) => {
    if (status === 401) {
      window.location.href = "/"
      localStorage.clear()
    }
    return status >= 200 && status < 500
  },
})

// API calls
export const fetchTeamSchedule = async (id) => {
  try {
    const response = await api.post("/api/teamSchedule", { id })
    return response.data
  } catch (error) {
    throw error
  }
}

export const fetchStadium = async () => {
  try {
    const response = await api.post("/api/stadium")
    return response.data
  } catch (error) {
    throw error
  }
}

export const fetchTeams = async () => {
  try {
    const response = await api.post("/api/teams") // Reusing the same endpoint as before as it seems to be the one for teams
    return response.data
  } catch (error) {
    throw error
  }
}

export const fetchContact = async () => {
  try {
    const response = await api.post("/api/contact")
    return response.data
  } catch (error) {
    throw error
  }
}
