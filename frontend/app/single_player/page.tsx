import Game from '../components/game'
import styles from '../styles.module.css'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

export default async function SinglePlayer() {
    const session = await getServerSession(options)

    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
    <>
        <main className={styles.main}>
            <section>
                <h1>Single Player</h1>
                <Game singlePlayer={true}/>
            </section>
        </main>
    </>
    )
}