# 🎬 Movie Explorer

Movie Explorer is a modern React-based movie search application built using the OMDb API. It allows users to search for movies, filter results, view detailed movie information, and browse results with pagination in a clean and responsive user interface.

------------------------------------------------------------

🚀 FEATURES

- Search movies by title
- Filter results by type (Movie, Series, Episode)
- View detailed movie information
- Pagination support
- Loading and error handling
- Fully responsive design
- Modern UI built using Tailwind CSS

------------------------------------------------------------

🛠 TECH STACK

- React
- React Router DOM
- Tailwind CSS (Latest Version)
- JavaScript (ES6+)
- OMDb API
- Vite

------------------------------------------------------------

📂 PROJECT STRUCTURE

src/
  components/
    Navbar.jsx
    MovieCard.jsx
  pages/
    SearchPage.jsx
    MovieDetailsPage.jsx
  services/
    server.js
  App.jsx
  main.jsx

------------------------------------------------------------

🔑 API CONFIGURATION

The OMDb API is configured inside:

src/services/server.js

const API_KEY = "make sure to give your own key"
const BASE_URL = "https://www.omdbapi.com/"

------------------------------------------------------------

📦 INSTALLATION & SETUP

1. Clone the repository:
   git clone <your-github-repo-url>

2. Navigate into the project folder:
   cd movie-explorer

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

------------------------------------------------------------

🌐 ROUTES

/              → Home / Search Page  
/movie/:id     → Movie Details Page  

------------------------------------------------------------

🧠 HOW THE APPLICATION WORKS

- When the application loads, it displays default movies.
- Users can search by entering a movie title.
- The app fetches data from the OMDb API.
- Results are displayed in a responsive grid layout.
- Pagination allows navigating through multiple pages.
- Clicking a movie opens a detailed page showing full information.

------------------------------------------------------------

📱 UI & DESIGN HIGHLIGHTS

- Hero section on homepage
- Card-based movie layout
- Smooth hover and transition effects
- Dark modern theme
- Mobile-first responsive design

------------------------------------------------------------

✅ REQUIREMENTS COVERED

- OMDb API integration
- Search functionality
- Type-based filtering
- Pagination support
- Movie details page
- React Router navigation
- Loading and error states
- Responsive design
- Clean and maintainable code structure

