"use client";

import { useForm } from "react-hook-form";
import { register as registerUser } from "./register";
import { Suspense } from "react";
import { googleRegister as googleRegisterUser } from "./google-register_sign-in";

//

interface FormValues{
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export function RegisterPageForm() {
    const { register, handleSubmit } = useForm<FormValues>();

    return(
        <Suspense>
            <form onSubmit={handleSubmit((data) => {
                if (data.password != data.confirmPassword) {
                    alert("Passwords are not matching. Check your password and try again.");
                    return;
                }
                registerUser( data.email, data.username, data.password);
            })}
            >
                <label>
                    Email
                    <input type='text' {...register("email")} alt='youremail@domain.com'/>
                </label>
                <label>
                    Username
                    <input type='text' {...register("username")} alt='username'/>
                </label>
                <label>
                    Password
                    <input type='password' {...register("password")} alt='password'/>
                </label>
                <label>
                    Repeat Password
                    <input type='password' {...register("confirmPassword")} alt='repeat password'/>
                </label>
                <input type='submit'/>
                <p>Or register with Google</p>
            </form>
            <button onClick={googleRegisterUser}>Google</button>
        </Suspense>
)
};