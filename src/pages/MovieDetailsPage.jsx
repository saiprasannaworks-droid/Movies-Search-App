import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieDetails } from "../services/server"

function MovieDetailsPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchDetails() {
      try {
        const data = await getMovieDetails(id)
        setMovie(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [id])

  if (loading) {
    return <div className="text-center animate-pulse">Loading...</div>
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-400">
        {error}
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-2xl shadow-xl w-full"
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{movie.Title}</h1>

        <div className="text-zinc-400 space-y-2">
          <p><span className="text-white font-medium">Year:</span> {movie.Year}</p>
          <p><span className="text-white font-medium">Genre:</span> {movie.Genre}</p>
          <p><span className="text-white font-medium">Director:</span> {movie.Director}</p>
          <p><span className="text-white font-medium">IMDB Rating:</span> ⭐ {movie.imdbRating}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Plot</h3>
          <p className="text-zinc-300 leading-relaxed">
            {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage 