const API_KEY = "943c52ad"
const BASE_URL = "https://www.omdbapi.com/"

export async function searchMovies(query, page = 1, type = "") {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
  )

  const data = await response.json()

  if (data.Response === "False") {
    throw new Error(data.Error)
  }

  return data
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}`
  )

  const data = await response.json()

  if (data.Response === "False") {
    throw new Error(data.Error)
  }

  return data
}