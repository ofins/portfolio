import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HomeLayout from './components/HomeLayout'
import Project from './pages/Project'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
