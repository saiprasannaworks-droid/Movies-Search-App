import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Believers Movie Premire</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-emerald-400">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
