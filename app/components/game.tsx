import { useState } from 'react'
import Board from './board'

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState<Array<Array<string | null>>>(Array(9).fill(null))
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares: Array<string | null>) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }

    return(
        <>
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={() => handlePlay}/>
        </>
    )
}