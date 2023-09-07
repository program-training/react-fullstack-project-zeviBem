import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

type FormData = {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
    description: string;
    price: number;
    activities: string[]

};
export default function UpdateTripForm() {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();
    const { id } = useParams();
    //const [tripData, setTripData] = useState<FormData | null>(null);
    

    const config = {
    headers: { authorization : "test-token" },
    };

        const onSubmit = async (updateData: FormData) => {
            try {
            const response = await axios.put(`http://localhost:3000/api/trips/${id}`,updateData, config)
            console.log("you logged!", response.data)
            }
            catch (error) {
                console.log("error to fetch data", error)

            }
        };
    
        
    
    return (
        <div className="container">
            <h1>Update Trip</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <label> id:
                <input type="text" {...register("name")}/>
                </label>
                <label> name:
                <input type="text" {...register("name")}/>
                </label>
                <br/>
                <label> destination:
                <input type="text" {...register("destination")}/>
                </label>
                <br/>
                <label> image:
                <input type="img" {...register("image")}/>
                </label>
                <br/>
                <label> startDate:
                <input type="date" {...register("startDate")}/>
                </label>
                <br/>
                <label> endDate:
                <input type="date" {...register("endDate")}/>
                </label>
                <br/>
                <label> description:
                <input type="text" {...register("description")}/>
                </label>
                <br/>
                <label> price:
                <input type="text" {...register("price")}/>
                </label>
                <br/>
                <label> activities:
                <input type="text" {...register("activities")}/>
                </label>
                <br/>
                <input type='submit' value= "update" />
            </form>
            <button onClick={() => navigate('/trips')}>to the page trips</button>
        </div>
    )   
}

// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// type FormData = {
//   name: string;
//   destination: string;
//   startDate: string;
//   endDate: string;
//   image: string;
//   description: string;
//   price: number;
//   activities: string[];
// };

// export default function UpdateTripForm() {
//   const { register, handleSubmit } = useForm<FormData>();
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [tripData, setTripData] = useState<FormData | null>(null);

//   const config = {
//     headers: { authorization: 'test-token' },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//         if (id)
//       try {
//         const response = await axios.get(`http://localhost:3000/api/trips/${id}`, config);
//         setTripData(response.data);
//       } catch (error) {
//         console.error('Error fetching trip data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const onSubmit = async (updatedTrip: FormData) => {
//     try {
//       const response = await axios.put(`http://localhost:3000/api/trips/${id}`, updatedTrip, config);
//       console.log('Trip updated!', response.data);
//       navigate('/trips'); // Redirect back to the trips page after update.
//     } catch (error) {
//       console.error('Error updating trip', error);
//     }
//   };

//   if (!tripData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <h1>Update Trip</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           ID:
//           <input type="text" value={tripData.id} readOnly />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input type="text" {...register('name')} defaultValue={tripData.name} />
//         </label>
//         <label>
//         destination:
//           <input type="text" {...register('destination')} defaultValue={tripData.destination} />
//         </label>
//         <label>
//         image:
//           <input type="text" {...register('image')} defaultValue={tripData.image} />
//         </label>
//         <label>
//         startDate:
//           <input type="text" {...register('startDate')} defaultValue={tripData.startDate} />
//         </label>
//         <label>
//         endDate:
//           <input type="text" {...register('endDate')} defaultValue={tripData.endDate} />
//         </label>
//         <label>
//         description:
//           <input type="text" {...register('description')} defaultValue={tripData.description} />
//         </label>
//         <label>
//         activities:
//           <input type="text" {...register('activities')} defaultValue={tripData.activities} />
//         </label>
      
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//       <button onClick={() => navigate('/trips')}>Back to the trips page</button>
//     </div>
//   );
// }
