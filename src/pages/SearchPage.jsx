import { useState, useEffect } from "react"
import { searchMovies } from "../services/server"
import MovieCard from "./MovieCard"

function SearchPage() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [type, setType] = useState("")

  async function handleSearch(newPage = 1, customQuery) {
    const finalQuery = customQuery || query || "Avengers"

    try {
      setLoading(true)
      setError("")

      const data = await searchMovies(finalQuery, newPage, type)

      setMovies(data.Search || [])
      setTotalResults(Number(data.totalResults) || 0)
      setPage(newPage)
    } catch (err) {
      setError(err.message)
      setMovies([])
      setTotalResults(0)
    } finally {
      setLoading(false)
    }
  }

  // Load default content when page opens
  useEffect(() => {
    handleSearch(1, "Avengers")
  }, [])

  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <div className="text-center space-y-4 pt-6">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Believers Movie Premire
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Discover thousands of movies, series, and episodes instantly.
          Search, explore, and dive into details.
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="Search movie title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(1)}
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>

          <button
            onClick={() => handleSearch(1)}
            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-zinc-400 animate-pulse">
          Fetching movies...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-400">
          {error}
        </div>
      )}

      {/* Movie Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      {movies.length > 0 && (
        <div className="flex justify-center gap-4 pt-6">
          {page > 1 && (
            <button
              onClick={() => handleSearch(page - 1)}
              className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-xl transition"
            >
              Previous
            </button>
          )}

          {page * 10 < totalResults && (
            <button
              onClick={() => handleSearch(page + 1)}
              className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-xl transition"
            >
              Next
            </button>
          )}
        </div>
      )}

    </div>
  )
}

export default SearchPage