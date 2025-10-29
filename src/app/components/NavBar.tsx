 import Image from "next/image"
import { assertAuth } from "@/lib/auth";
import { createDB } from "@/lib/db";

const db = createDB();

export default async function NavBar() {
    const userId = assertAuth;

if (userId){
          const userPfpImg = await db`select pfpUrl from users where userId = ${userId}`;
          return(
              <div className="navBar" id="navbar">
                <Image src={""} alt="Logo"/>
                <ul>
                    <li><a href="/"</li>
                </ul>
              </div>
)} else {
    return(
        <div className="navBar_Guest" id="navbar"></div>
)}};