import styles from '../styles.module.css'
interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
  }

export default function Square({ value, onSquareClick }: SquareProps) {
    return(
        <button className={styles.square} onClick={onSquareClick}>{value}</button>
    )
}