"use client";

import { useForm } from "react-hook-form";
import { signIn as signInUser } from "./sign-in";
import { Suspense } from "react";
import { googleRegister as googleRegisterUser } from "@/app/(public)/register/google-register_sign-in";

//

interface FormValues{
  email: string;
  password: string;
}

export function SignInPageForm() {
    const { register, handleSubmit } = useForm<FormValues>();

    return(
        <Suspense>
            <form onSubmit={handleSubmit((data) => {
                signInUser( data.email, data.password);
            })}
            >
                <label>
                    Email
                    <input type='text' {...register("email")} alt='youremail@domain.com'/>
                </label>
                <label>
                    Password
                    <input type='password' {...register("password")} alt='password'/>
                </label>
                <input type='submit'/>
                <p>Or sign in with Google</p>
            </form>
            <button onClick={googleRegisterUser}>Google</button>
        </Suspense>
)
};