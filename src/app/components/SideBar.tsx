import Link from "next/link";
import Image from "next/image";
import { createDB } from "@/lib/db";
import { cookies } from "next/headers";

export default async function SideBar(){
    const db = createDB();
    const cookieStore = await cookies();
    const thisUserId = cookieStore.get("session-user-id")
    //
    //const joinedChannels = await db`SELECT channels.id, channels.name, channels.icon FROM channels LEFT JOIN in-channel ON in-channel.channel_id = channels.id WHERE in-channel.user_id = ${thisUserId} ASC`
    const joinedChannels = await db`SELECT id, name, desc, category, icon FROM channels SORT BY members DESC`
    const joinedGroups = await db`SELECT id, name, desc, category, icon FROM channels SORT BY members DESC LIMIT 8`


if (await thisUserId || null){
        return(
            <div className="navBar" id="navbar">
                <Link href={"/dashboard"}><Image src={"/img/logo.svg"} alt={"Logo"} width={50} height={50} /></Link>
                <ul>
                    <li>
                        <p>Joined channels</p>
                        {joinedChannels.map ((c) =>
                        <div key={c.id}>
                            <Link href={`/channel/${c.id}`}>
                                {c.icon != null && c.icon.length > 0 ? (
                                    <Image src={c.icon} alt="" />
                                ) : null}
                                {c.name != null ? (
                                    <p>{c.name}</p>
                                ) : null}
                             </Link>
                        </div>
                        )}
                    </li>
                    <li>
                        <p>Joined groups</p>
                        {joinedGroups.map ((g) =>
                        <div key={g.id}>
                            <Link href={`/channel/${g.id}`}>
                                {g.icon != null && g.icon.length > 0 ? (
                                    <Image src={g.icon} alt="" />
                                ) : null}
                                {g.name != null ? (
                                    <p>{g.name}</p>
                                ) : null}
                             </Link>
                        </div>
                        )}
                    </li>
                </ul>
            </div>
)}};