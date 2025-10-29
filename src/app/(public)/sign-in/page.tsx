import { createDB } from '@/lib/db'
import { useForm } from "react-hook-form";
import { cookies } from "next/headers";
import { signIn } from '@/app/api/auth/[...nextauth]/auth';
//import { redirect } from "next/navigation";

//

interface FormValues{
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export async function registerUser(
    email: string,
    username: string,
    password: string,
){
    const db = createDB();
    const cookieStore = await cookies();
    const newUserId = await db`
        INSERT INTO users VALUES (${email}, ${username}, ${password}); 
        SELECT id FROM users WHERE email = ${email};
    `
    cookieStore.set("session-user-id", `${newUserId}`);
};

//

export function SignInPage() {

  const { register, handleSubmit } = useForm<FormValues>();
    return(
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
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
                >
                <button type="submit">Signin with Google</button>
            </form>
        </form>
    )
};