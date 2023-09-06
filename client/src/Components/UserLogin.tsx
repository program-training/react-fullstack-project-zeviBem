import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type InfoLogin = {
    email: string;
    password: string
}
export default function UserLogin() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm<InfoLogin>()
    const config = {
        headers: { authorization : "test-token" },
      };

    const onSubmit = async (userLog: InfoLogin) => {
        try {
        const response = await axios.post("http://localhost:3000/api/auth/login",userLog, config)
        console.log("you logged!", response.data)

        const userId = response.data.userId;
        console.log(userId)
        const token = response.data.token;
        console.log(token)
        }
        catch (error) {
            console.log("error to fetch data this is used before", error)

        }
    };
    return (
        <div className='container'> User Login
            <form onSubmit= {handleSubmit(onSubmit)}>
                <label>
                    Email: <input type='email' {...register("email")} />
                </label>
                <br/>
                <label>
                    Password: <input type='password' {...register("password")} />
                </label>
                <br/>
                <input type='submit' value= "logIn" />
            </form>
            <button onClick={() => navigate('/')}>to the main page</button>
           
        </div>
    )
}