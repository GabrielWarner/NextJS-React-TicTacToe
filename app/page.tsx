import Game from './components/game'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <Game/>
      </nav>
    </main>
  )
}
