import Game from '../components/game'
import styles from '../styles.module.css'

export default function SinglePlayer() {
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