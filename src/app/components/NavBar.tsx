// two different navbars - based on auth

import Image from "next/image"
//import checkAuth from "../../lib/db"

export default async function NavBar() {
//    const userId = checkAuth();
//
//if (checkAuth()){
//          const userPfpImg = await db.selectFrom("users").select("pfpUrl").where("userId", "=", "userId").execute();
//          return(
//              <div className="navBar" id="navbar"></div>
//)} else {
    return(
        <div className="navBar_Guest" id="navbar">
            <Image alt="Logo" src={"@/favicon.ico"} />
        </div>
)};