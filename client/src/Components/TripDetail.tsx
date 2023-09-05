import React from "react";
import NewTripForm from "./NewTripForm";
import { useNavigate } from 'react-router-dom';
export default function TripDetail() {
    const navigate = useNavigate();
    return (
        <div>
            Trip Detail
            <button onClick={() => navigate('/trips')}>to the page trips</button>
            
        </div>
    )
}