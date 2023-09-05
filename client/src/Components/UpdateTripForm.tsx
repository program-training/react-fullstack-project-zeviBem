import React from "react";
import { useNavigate } from 'react-router-dom';
export default function UpdateTripForm() {
    const navigate = useNavigate();
    return (
        <div>
            Update Trip 
            <button onClick={() => navigate('/trips')}>to the page trips</button>
           
        </div>
    )
}