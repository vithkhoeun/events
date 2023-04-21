import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const OneEvent = (props) => {

    const {id} = useParams();
    const[oneEvent, setOneEvent] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/events/${id}`)
        .then(res =>setOneEvent(res.data.event))
        .catch(err => console.log(err))
    }, [])

    // Delete
    const deleteEvent = (e) => {
        axios.delete(`http://localhost:8000/api/events/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate("/api/events")
        }

    // Update
    const navigateToEditEvent = (e) => {
            navigate(`/api/events/${id}/edit`)
        }

  return (
    <div >
        <h1><b>Event:</b> {oneEvent.event}</h1>
        <a style={{fontSize: 25}} href="/api/events/">Home</a>
        <p><b>Organizer:</b> {oneEvent.organizer}</p>
        <p><b>Description:</b> {oneEvent.description}</p>

        <button className="btn btn-info mt-4" onClick={navigateToEditEvent}> Edit Event</button>
        <br></br>
        <button className="btn btn-danger mt-4" onClick={deleteEvent}> Delete Event</button>
    </div>
  )
}

export default OneEvent