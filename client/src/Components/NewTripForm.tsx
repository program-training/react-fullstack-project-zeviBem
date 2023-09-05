import React from "react";
import UpdateTripForm from "./UpdateTripForm";
import { useNavigate } from 'react-router-dom';
export default function NewTripForm() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>New Trip Form</h1>
            <button onClick={() => navigate('/trips')}>to the page trips</button>
        </div>
    )
}