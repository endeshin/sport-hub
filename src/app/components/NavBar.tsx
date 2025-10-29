 //https://www.flaticon.com/free-icon/user_15181334?term=user&page=1&position=5&origin=search&related_id=15181334 | User Icon
 

import { assertAuth } from "@/lib/sessionAuth";
// import { createDB } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";



//const db = createDB();


export default async function NavBar() {
  const userId = assertAuth;

if (userId == null){
        return(
        <div className="navBar_Guest" id="navbar">
            <Image src={""} alt="Logo" />
            <ul>
                <li><Link href={"/sign-up"}>Sign Up</Link></li>
                <li><Link href={"/sign-in"}>Sign In</Link></li>
            </ul>
        </div>
)} else {
    return(
        //const userPfpImg = await db`select pfpUrl from users where userId = ${userId}`;
        <div className="navBar" id="navbar">
                <Image src={""} alt="Logo"/>
                <ul>
                    <li>
                        <input placeholder={"Search currently isn't implemented"} />
                    </li>
                    <li>
                        <Link href={"/profile"}>
                            <Image src={"@/img/user.pgn"} alt=""/>
                        </Link>
                    </li>
                </ul>
              </div>
)}};