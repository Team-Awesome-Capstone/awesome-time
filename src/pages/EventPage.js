import React from "react";
import Youtube from "../components/Youtube";

import './EventPage.css';
import WeatherShell from "../components/weather/WeatherShell";


const EventPage = () => {
  <div></div>
  return (
    <>
    <div className="components-section"><h2>Watch Events</h2>
    <Youtube />
    </div>

    <div className="components-section"><h2>Check the Weather</h2>
    <WeatherShell />
    </div>
    </>
  )
}

export default EventPage;