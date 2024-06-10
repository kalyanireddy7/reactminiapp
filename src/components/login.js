import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom"



export const Login=()=>{
 
    function onHandleSubmit(event){
        event.preventDefault();
        <Redirect to="/home" />;
    }
    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(5).max(20).required(),
     });
    const {register,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });
    
    return(
     <Link to="/login">
       
     <div>
            <h1>Login Form</h1>
        <form onSubmit={onHandleSubmit} >
            <input type="text" placeholder="Enter your email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Enter your password..." {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="submit"/>
        </form>
    </div>
    </Link>
      
        
    )
}

