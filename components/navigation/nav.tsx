import {auth} from "@/server/auth"
import { UserButton } from "./user-button";
import Link from "next/link";

export default async function Nav(){
    const session = await auth();
    console.log(session);

    return(
        <header className="bg-slate-500 p-4">
            <nav>
                <ul className="flex justify-between">
                    <li>Logo</li>
                    <li>
                        {!session ? (
                            <button><Link aria-label="sign-in" href={"/auth/login"}>login</Link></button>
                        ):(<UserButton expires={session?.expires} user={session?.user}></UserButton>)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}