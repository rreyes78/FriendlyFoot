import { useState } from 'react'
import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Route for Home page with MainLayout */}
        <Route 
            path="/"
            element = {
              <MainLayout>
                  <Home />
              </MainLayout>
            }
        />
        {/* Route for About page with MainLayout */}
        <Route 
            path="/about"
            element = {
              <MainLayout>
                  <About />
              </MainLayout>
            }
        />
      </Routes>
    </Router>
  )
}

export default App
