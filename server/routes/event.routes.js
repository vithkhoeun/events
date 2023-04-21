const EventController = require('../controllers/event.controller');
 
module.exports = app => {
    app.get('/api/events', EventController.findAllEvents);
    app.get('/api/events/:id', EventController.findOneEvent);
    app.put('/api/events/:id', EventController.updateEvent);
    app.post('/api/events', EventController.createNewEvent);
    app.delete('/api/events/:id', EventController.deleteEvent);
}