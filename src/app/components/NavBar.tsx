 //https://www.flaticon.com/free-icon/user_15181334?term=user&page=1&position=5&origin=search&related_id=15181334 | User Icon

import { assertAuth } from "@/lib/sessionAuth";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
//import Image from "next/image";
// import { createDB } from "@/lib/db";


//const db = createDB();
export async function logout() {
    redirect("/")
}

export default async function NavBar() {
  const userId = assertAuth();

if (await userId || null){
        return(
            <div className="navBar" id="navbar">
                <Link href={"/dashboard"}><Image src={"/img/logo.svg"} alt={"Logo"} width={50} height={50} /></Link>
                <ul>
                    <li>
                        <input placeholder={"Search currently isn't implemented"} />
                    </li>
                    <li>
                        <Link href={"/profile"}>
                        </Link>
                    </li>
                    <li>
                        <button onClick={logout}>Sign out</button>
                    </li>
                </ul>
            </div>
)} else {
    return(
        //const userPfpImg = await db`select pfpUrl from users where userId = ${userId}`;
        <div className="navBar_Guest" id="navbar">
            <Link href={"/"}><Image src={"/img/logo.svg"} alt={"Logo"} width={50} height={50} /></Link>
            <ul>
                <li><Link href={"/register"}>Register</Link></li>
                <li><Link href={"/sign-in"}>Sign In</Link></li>
            </ul>
        </div>
)}};