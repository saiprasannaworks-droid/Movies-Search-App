import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import SearchPage from "./pages/SearchPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App