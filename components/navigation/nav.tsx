import {auth} from "@/server/auth"
import { UserButton } from "./user-button";
import Link from "next/link";
import Image from "next/image";

export default async function Nav(){
    const session = await auth();
    console.log(session);

    return(
        <header className="py-8">
            <nav>
                <ul className="flex justify-between">
                    <li>
                        <Link href={"/"}>
                        <Image src="/straw-hat.png" alt="Logo" width={75} height={30} priority/>
                        </Link>
                    </li>
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

