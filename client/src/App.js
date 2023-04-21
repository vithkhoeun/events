import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EventForm from './components/EventForm';
import OneEvent from './components/OneEvent';
import EditEvent from './components/EditEvent';
import Home from './components/Home';

function App() {

  useEffect(() => {
  axios.get("http://localhost:8000/api/users")
  .then(res => console.log(res))
  .catch(err => console.log(err))
}, [])

  useEffect(() => {
  axios.get("http://localhost:8000/api/events")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}, [])

  return (
    <div className="App">
      <Routes>
        < Route element={<EventForm/>} path="api/events/create"/>
        < Route element={<Dashboard/>} path="api/events"/>
        < Route element={<OneEvent/>} path="api/events/:id"/>
        < Route element={<EditEvent/>} path="api/events/:id/edit"/>
        < Route element={<Home/>} path="/"/>
      </Routes>
    </div>
  );
}

export default App;
