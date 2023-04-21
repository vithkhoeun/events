import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EventForm = () => {
    const [event, setEvent] = useState ({
        event: "",
        organizer: "",
        description: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const onChangeHandler =(e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })  
    }

    const formValidator = () => {
        let isValid= true
        if (event.description.length <5 ) {
            return false
        }
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/events/', event)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else{
            setErrors({
                description: "Description must be at least 5 characters long"
            })
        }
        navigate("/api/events")
    }
    return (
    <div>
        <h2>Add Event</h2>
        <a style={{fontSize: 25}} href="/api/events/">Home</a>
        {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
        <form action="" className="col-md-6 offset-3" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='event'>Event: </label>
                <input type="text" className="form-control" name="event" id="event" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='organizer'>Organizer: </label>
                <input type="text" className="form-control" name="organizer" id="organizer" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor='description'>Description: </label>
                <input type="text" className="form-control" name="description" id="description" onChange={onChangeHandler}/>
            </div>
            <button className="btn btn-info mt-4">Submit</button>
        </form>
    </div>
    
    )
}

export default EventForm