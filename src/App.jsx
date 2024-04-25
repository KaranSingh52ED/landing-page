import React from 'react'
import Desktop from './Desktop'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Desktop1 from './Desktop1'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/desktop" element={<Desktop1 />} />
      </Routes>
    </Router>
  )
}

export default App
