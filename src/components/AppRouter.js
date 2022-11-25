import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import EventPage from './pages/EventPage'
import RsvpForm from './pages/RsvpForm'
import Contact from './pages/Contact'
import MeetTeam from './pages/MeetTeam'

function AppRouter() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/event-page" element={
                <EventPage />
            } />
            <Route path="/rsvp" element={
                <RsvpForm />
            } />
            <Route path="/contact" element={
                <Contact />
            } />
            <Route path="/meet-the-team" element={
                <MeetTeam />
            } />
        </Routes>
    
    </BrowserRouter>

  )
}

export default AppRouter