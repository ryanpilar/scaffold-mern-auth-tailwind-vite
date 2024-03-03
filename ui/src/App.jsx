import React from "react";
// Project Imports
import RootLayout from "./components/RootLayout";
import BetaBoard from "./components/BetaBoard";
// 3rd Party Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** ================================|| App ||=================================== **/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><BetaBoard /></RootLayout>} />
      </Routes>
    </Router>
  )
  }
export default App