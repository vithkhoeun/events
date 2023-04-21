import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const EditEvent = (props) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneEvent, setOneEvent] = useState({})
        
    useEffect(() => {
        axios.get(`http://localhost:8000/api/events/${id}`)
            .then(res =>setOneEvent(res.data.event))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneEvent({
            ...oneEvent,
            [e.target.name]: e.target.value
        })
    }

    const editEvent = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/events/${id}`, oneEvent)
            .then(res =>navigate("/api/events"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Edit Event</h2>
            <a style={{fontSize: 25}} href="/api/events/">Home</a>
            <form action="" className="col-md-6 offset-3" onSubmit={editEvent}>
                <div className="form-group">
                    <label htmlFor="event">Event: </label>
                    <input type="text" name="event" id="event" className="form-control" value={oneEvent.event} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor='organizer'>Organizer: </label>
                    <input type="text" name="organizer" id="organizer" className="form-control" value={oneEvent.organizer} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor='description'>Description: </label>
                    <input type="text" name="description" id="description" className="form-control" value={oneEvent.description} onChange={changeHandler}/>
                </div>
                <button className="btn btn-info mt-4">Edit Event</button>
            </form>
        </div>
    )
    }

export default EditEvent