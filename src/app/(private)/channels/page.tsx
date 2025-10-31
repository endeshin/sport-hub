import { createDB } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

//

export default async function channelsPage() {
    const db = createDB();
    const channelNames = await db`SELECT id, name, description, icon FROM channels ORDER BY members`

    return(
        <div>
            <h1>Channels</h1>
            <div>
                {channelNames.map((c) =>
                <div key={c.id}>
                    <Link href={`/channel/${c.id}`}>
                        {c.icon != null && c.icon.length > 0 ? (
                            <Image src={c.icon} alt="Post photo" />
                        ) : null}
                        <p>{c.category}</p>
                        <h3>{c.name}</h3>
                        <hr />
                        <p>{c.desc}</p>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}