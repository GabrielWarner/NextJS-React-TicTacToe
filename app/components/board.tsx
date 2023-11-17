
import Square from './square.tsx'
import styles from '../styles.module.css'
export default function Board() {
    return(
        <>
            <div className={styles['board-row']}>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className={styles['board-row']}>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className={styles['board-row']}>
                <Square/>
                <Square/>
                <Square/>
            </div>
        </>
    )
}