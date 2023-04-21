import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Dashboard = () => {
    const [events, setEvents] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/events')
            .then(res => setEvents(res.data.events))
            .catch(err => console.log(err))
    }, [])

    const navigateToEventForm = () => {
        navigate("/api/events/create")
    }

    return (
        <div>
            <h2> All Events </h2>

            <table className="col-md-6 mx-auto mt-4">
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Organizer</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, i) => {
                        return (
                            <tr key={event._id}>
                                <td><Link to={`/api/events/${event._id}`}>{event.event}</Link></td>
                                <td>{event.organizer}</td>
                                <td>{event.description}</td>
                            </tr>
                        )
                        })}
                </tbody>
            </table>
            <button className="btn btn-info offset-5 mt-3" onClick={navigateToEventForm}>Create Event</button>
        </div>
    )
}

export default Dashboard