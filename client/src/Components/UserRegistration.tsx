
import { useNavigate } from 'react-router-dom';
export default function UserRegistration() {
    const navigate = useNavigate();
    return (
        <div>
            User Registration
            <button onClick={() => navigate('/')}>to the main page</button>
         
        </div>
    )
}