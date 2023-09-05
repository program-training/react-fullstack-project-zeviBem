import React, {useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TripDetail from "./TripDetail";
import UserLogin from "./UserLogin";
import UpdateTripForm from "./UpdateTripForm";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <header >
            <button  onClick={() => navigate('/tripDetail')}>Trip Detail</button>
            <button  onClick={() => navigate('//newTripForm')}>New trip</button>
            <button  onClick={() => navigate('/updateTrip')}>Update trip</button>
            </header>
            <h1>Home</h1>
            <button  onClick={() => navigate('/trips')}>to all trips</button>
            <button onClick={() => navigate('/userRegistration')}>beyond registration</button>
            <button onClick={() => navigate('/userLogin')}>beyond connecting</button>
        </div>
    )}

