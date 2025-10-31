import { createDB } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

//

export default async function dashboardPage() {
    const db = createDB();
    const channelNames = await db`SELECT id, name icon FROM channels SORT BY members LIMIT 8 DESC`

    return(
        <div>
            <h1>Popular Channels</h1>
            <div>
                {channelNames.map((c) =>
                <div key={c.id}>
                    <Link href={`/channel/${c.id}`}>
                        {c.icon != null && c.icon.length > 0 ? (
                            <Image src={c.icon} alt="Post photo" />
                        ) : null}
                        <h3>{c.name}</h3>
                        <hr />
                    </Link>
                </div>
                )}
            </div>
            <Link href={"/channels"}>or many more...</Link>
        </div>
    )
}
