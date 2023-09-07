import { useNavigate } from 'react-router-dom';
import './home.css'
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='ccc'>
            <div className='upMenu'>
                <button  onClick={() => navigate('/trips')}>to all trips</button>
                <button onClick={() => navigate('/userRegistration')}>enrollment</button>
                <button onClick={() => navigate('/userLogin')}>log in</button>
            </div>
            <h1>Welcome to the great travel site, here you can find the best vacation!</h1>

        </div>
    )}

