import './App.css'
import Home from './Components/Home';
import Trips from './Components/Trips';
import UserLogin from './Components/UserLogin';
import UserRegistration from './Components/UserRegistration';
import {Container} from "react-bootstrap"
import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NewTripForm from './Components/NewTripForm';
import TripDetail from './Components/TripDetail';
import UpdateTripForm from './Components/UpdateTripForm';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trips' element={<Trips/>}/>
          <Route path='/userRegistration' element={<UserRegistration/>}/>
          <Route path='/userLogin' element={<UserLogin/>}/>
          <Route path='/newTripForm' element={<NewTripForm/>}/>
          <Route path='/tripDetail/:id' element ={<TripDetail/>}/>
          <Route path='/result/updateTrip/:id' element ={<UpdateTripForm/>}/>
        </Routes>
      </Container>
    </>
  )
}
export default App
