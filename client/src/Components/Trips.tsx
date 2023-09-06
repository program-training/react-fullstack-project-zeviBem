import React ,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./card.css"

interface MyTrip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}

export default function Trips() {
    const [tripData, setTripData] = useState<MyTrip[]>([]);
  
    useEffect(() => {
        axios.get("http://localhost:3000/api/trips")
        .then((response) => {setTripData(response.data);})
        .catch((error) => {console.error("Error in the request to gey the data", error)})
        
    }, [])
    const navigate = useNavigate();

    // const navigateToTripDetail = (tripId: string) => {
    //     window.location.href = `/trips/${tripId}`;
    // };
    const handleDelete = (tripId:string) => {
        const updatedTripData = [...tripData];
        const index = updatedTripData.findIndex((trip) => trip.id === tripId)
        if (index !== -1) {
            updatedTripData.splice(index, 1)
            setTripData(updatedTripData)
        }
    }
    return (
        <div>
            <h2>Trips</h2>
            <button onClick={() => navigate('/')}>to the main page</button>
            <button onClick={() => navigate('/newTripForm')}>new trip</button>
            {
                <div>
                    <h1>Trips</h1>
                    
                        {tripData.map((trip) =>(
                            <div className="cardTrip" key={trip.id} onClick={() => navigate(`/tripDetail/${trip.id}`)}>
                                <h2>{trip.name}</h2>
                                <p>Destination: {trip.destination}</p>
                                <p>Start Data: {trip.startDate}</p>
                                <p>End Data: {trip.endDate}</p>
                                <img src={trip.image} alt={trip.name} className="imgCard"/>
                                <button className="buttonDelete" onClick={ (e) =>{e.stopPropagation(); handleDelete(trip.id)} }>DELETE</button>
                            </div>
                        ))}
                    
                </div>
            }
        </div>
    )















    // useEffect(() => {
    // const fetchData = async () => {
    //     try {
    //         const  response = await axios.get("http://localHost:3000/api/trips");
    //         setData(response.data);
    //     }
    //     catch (error){
    //         console.error("Error please check..", error);
    //     }
    // };
    // fetchData();
    // },[]);
    // return (
    //     <div>

    //         {}
    //     </div>
    // )
}