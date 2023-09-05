import React from "react";
import { useNavigate } from 'react-router-dom';
export default function UserLogin() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>to the main page</button>
            User Login
        </div>
    )
}