import Game from '../components/game'
import styles from '../styles.module.css'

export default function SinglePlayer() {
    return (
    <>
        <main className={styles.main}>
            <section>
                <Game singlePlayer={true}/>
            </section>
        </main>
    </>
    )
}