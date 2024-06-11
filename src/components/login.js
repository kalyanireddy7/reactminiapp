import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"



export const Login=()=>{
    let history=useHistory();
    const onHandleSubmit = () =>{
       history.push('/home')
    }
    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(5).max(20).required(),
     });
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });
    
    return(
       <div>
            <h1>Login Form</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)} >
            <input type="text" placeholder="Enter your email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Enter your password..." {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="submit"/>
        </form>
       </div>
   )
}



