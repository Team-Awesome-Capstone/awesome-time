import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import EventPage from './pages/EventPage'
import RsvpForm from './pages/RsvpForm'
import Contact from './pages/Contact'
import MeetTeam from './pages/MeetTeam'


function AppRouter() {
  return (
    
    <div>
        <Router>
            <Routes>
            <Route exact path="/home" element={ <Home /> } />
            <Route path="/event-page" element={ <EventPage /> } />
            <Route path="/rsvp" element={ <RsvpForm /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/meet-the-team" element={ <MeetTeam /> } />
            </Routes>
        </Router>
    </div>
    

  )
}

export default AppRouter;