"use client";

import { useForm } from "react-hook-form";
import { signIn as signInUser } from "./sign-in";
import { Suspense } from "react";
import { signIn } from "next-auth/react";

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
                if (!data.email || !data.password) {
                    alert("One or more required fields is not filled in. Please fill in the required fields.");
                    return;
                }
                signInUser(data.email, data.password);
            })}
            >
                <label>
                    Email
                    <input type='text' {...register("email")} placeholder='youremail@domain.com'/>
                </label>
                <label>
                    Password
                    <input type='password' {...register("password")} placeholder='password'/>
                </label>
                <input type='submit'/>
                <p>Or sign in with Google</p>
            </form>
            <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>Google</button>
        </Suspense>
)
};