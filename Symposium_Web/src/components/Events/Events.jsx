import React from 'react';
import './Events.css';
import events_logo from '../../assets/events_logo.png'
import tech_logo from '../../assets/tech_logo.png';
import non_tech_logo from '../../assets/non_tech_logo.svg';
import workshop_logo from '../../assets/workshop_logo.svg';

const Events = () => {
    return (
        <>
            <div className="back" style={{ backgroundImage: `url(${events_logo})` }}>
                <div className="events">
                    <div className="card">
                        <p className="text">Technical</p>
                        <img src={tech_logo}
                             alt="technical"
                             className="tech-img"
                        />
                        <p className="middle">Register for our Technical Events and Win Exciting Prices</p>
                        <button className="view-button">View Events</button>
                    </div>
                    <div className="card">
                        <p className="text">Non-Technical</p>
                        <img src={non_tech_logo}
                             alt="technical"
                             className="tech-img"
                        />
                        <p className="middle">Register for our Non-Technical Events and Win Exciting Prices</p>
                        <button className="view-button">View Events</button>
                    </div>
                    <div className="card">
                        <p className="text">Workshop</p>
                        <img src={workshop_logo}
                             alt="technical"
                             className="tech-img"
                        />
                        <p className="middle">Register for our Workshop Events and Win Exciting Prices</p>
                        <button className="view-button">View Events</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events; 