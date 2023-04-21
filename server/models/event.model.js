const mongoose = require('mongoose');
 
const EventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: [true, "Event is required"],
    },
    organizer: {
        type: String,
        required: [true, "Organizer is required"],
    },
    description: {
        type: String,
        minlength: [5, "Name must be at least 5 characters long"]
    },
    // date: {
    //     type: Date
    // }
}, {timestamps: true});
 
const Event = mongoose.model('Event', EventSchema);
 
module.exports = Event;