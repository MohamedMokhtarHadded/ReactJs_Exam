import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './sections/NavigationBar'
import { Routes, Route } from 'react-router-dom' 
import NotFound from './pages/NotFound'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Movie from './sections/Movie'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
