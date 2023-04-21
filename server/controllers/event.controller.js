const Event = require('../models/event.model');
 
module.exports.findAllEvents = (req, res) => {
    Event.find()
        .then((allEvents) => {
            res.json({ events: allEvents })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneEvent = (req, res) => {
    Event.findOne({ _id: req.params.id })
        .then(oneEvent => {
            res.json({ event: oneEvent })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewEvent = (req, res) => {
    Event.create(req.body)
        .then(newEvent => {
            res.json({ event: newEvent })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateEvent = (req, res) => {
    Event.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedEvent => {
            res.json({ event: updatedEvent })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteEvent = (req, res) => {
    Event.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}