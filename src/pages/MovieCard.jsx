import { Link } from "react-router-dom"

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-80 object-cover"
        />

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">
            {movie.Title}
          </h3>

          <p className="text-sm text-zinc-400">
            {movie.Year}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard