import Game from './components/game'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <main>
        <h1>1 v 1</h1>
        <Game singlePlayer={false}/>
      </main>
    </main>
  )
}
