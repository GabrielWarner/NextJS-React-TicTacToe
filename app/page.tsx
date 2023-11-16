import Image from 'next/image'
import Board from './components/board.tsx'
// import styles from './page.module.css'
import Square from './components/square'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <Board/>
      </nav>
    </main>
  )
}
