import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Section from './pages/Section'
import Lesson from './pages/Lesson'
import Dashboard from './pages/Dashboard'
import Level from './pages/Level'
import DeepDive from './pages/DeepDive'

// Placeholder components for now
const Quiz = () => <div className="container" style={{ padding: '100px 0' }}><h1>Quiz</h1></div>

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programming" element={<Section title="Programming Basics" type="programming" />} />
                    <Route path="/html" element={<Section title="HTML Section" type="html" />} />
                    <Route path="/css" element={<Section title="CSS Section" type="css" />} />
                    <Route path="/javascript" element={<Section title="JavaScript Section" type="javascript" />} />
                    <Route path="/lesson/:type/:id" element={<Lesson />} />
                    <Route path="/deep-dive" element={<DeepDive />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/level" element={<Level />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
