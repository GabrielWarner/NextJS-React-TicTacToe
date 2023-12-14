'use client'
import styles from '../styles.module.css'
import { useSession } from 'next-auth/react'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type User = {
    name? : string | null | undefined;
    email? : string | null | undefined;
    image? : string | StaticImport;
}


export default function SinglePlayer() {
        const { data: session } = useSession()
        const userProfileImage = session?.user?.image || '';
    return (
    <>
        <main className={styles.main}>
            <section>
                <h1>LOGIN PAGE</h1>
                <h2>{session?.user?.name}</h2>
                <Image src={userProfileImage} width={100} height={100} alt='my-face'></Image>
            </section>
        </main>
    </>
    )
}