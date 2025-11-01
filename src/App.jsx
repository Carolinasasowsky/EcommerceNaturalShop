import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
// Más adelante podés usar un Router para Favoritos y Buscador

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App

