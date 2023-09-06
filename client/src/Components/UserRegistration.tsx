import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type InfoRegistration = {
    email: string;
    password: string
}
export default function UserRegistration() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<InfoRegistration>();
    const config = {
        headers: { authorization : "test-token" },
      };


    const onSubmit = async (userData: InfoRegistration) => {
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", userData,config)
            console.log("you logged!", response.data)
        }
        catch(error) {
            console.error("error to fetch data", error)
        }
    }
    return (
        <div>
            User Registration
            <div className='container'> 
            <form onSubmit= {handleSubmit(onSubmit)}>
                <label>
                    Email: <input type='email' {...register("email")} />
                </label>
                <br/>
                <label>
                    Password: <input type='password' {...register("password")} />
                </label>
                <br/>
                <input type='submit' value= "Register" />
            </form>
            </div>
            <button onClick={() => navigate('/')}>to the main page</button>
            <button onClick={() => navigate('/trips')}>to the trips page</button>
         
        </div>
    )
}