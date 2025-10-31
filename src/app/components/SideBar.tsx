import Link from "next/link";
import Image from "next/image";
//import { createDB } from "@/lib/db";
//import { cookies } from "next/headers";
import { assertAuth } from "@/lib/sessionAuth";

export default async function SideBar(){
    //const db = createDB();
    const userId = assertAuth();
    //const cookieStore = await cookies();
    //const thisUserId = cookieStore.get("session-user-id")
    //
    //const joinedChannels = await db`SELECT channels.id, channels.name, channels.icon FROM channels LEFT JOIN in-channel ON in-channel.channel_id = channels.id WHERE in-channel.user_id = ${thisUserId} ASC`
    //const joinedChannels = await db`SELECT id, name, desc, category, icon FROM channels SORT BY members DESC`
    //const joinedGroups = await db`SELECT id, name, desc, category, icon FROM channels SORT BY members DESC LIMIT 8`


if (await userId || null){
        return(
            <div className="navBar" id="navbar">
                <Link href={"/dashboard"}><Image src={"/img/logo.svg"} alt={"Logo"} width={50} height={50} /></Link>
                <ul>
                    <li>
                        <p>Joined channels</p>
                    </li>
                </ul>
            </div>
)}};