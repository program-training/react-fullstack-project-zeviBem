import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
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
export default function NewTripForm() {
    const { register, handleSubmit } = useForm<FormData>();
    const navigate = useNavigate();

    const config = {
        headers: { authorization : "test-token" },
      };

    const onSubmit = async (userTrip: FormData) => {
        try {
        const response = await axios.post(`http://localhost:3000/api/trips`, userTrip, config)
        console.log("you logged!", response.data)
        }
        catch (error) {
            console.log("error to fetch data", error)

        }
    };

    return (
        <div className="container">
            <h1>New Trip Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type='submit' value= "submit" />
            </form>
            <button onClick={() => navigate('/trips')}>to the page trips</button>
        </div>
    )  
    }





