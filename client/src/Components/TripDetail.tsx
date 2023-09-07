import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./tripDetail.css"

interface MyTrip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
    price: number;
    activities: string[]
}
export default function TripDetail() {
    const [tripData, setTripData] = useState<MyTrip | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const trip = async () => {
            try {
            const response = await axios.get(`http://localhost:3000/api/trips/${id}`)
            setTripData(response.data)
            }
            catch (error) {
                console.log("error to fetch data", error)
            }
        };
        trip()        
    }, [id])

    if (!tripData) {
        return <div>loading</div>
    }
      return (
        <div className="container">
            <button onClick={() => navigate('/trips')}>to the page trips</button>
            <div key={tripData.id} className="cardTrip">
              <img src={tripData.image} alt={tripData.name} className="imgCard" /></div>
              <h2>{tripData.name}</h2>
              <p>Destination: {tripData.destination}</p>
              <p>Start Data: {tripData.startDate}</p>
              <p>End Data: {tripData.endDate}</p>
              <p>Destination: {tripData.destination}</p>
              <p>Start Data: {tripData.startDate}</p>
              <p>End Data: {tripData.endDate}</p>
              <p>description: {tripData.description}</p>
              <p>price: {tripData.price}</p>
              <p>activities: {tripData.activities}</p>
        </div>
)}