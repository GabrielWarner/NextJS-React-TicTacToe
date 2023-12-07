'use client'
import { useState } from 'react'
import Board from './board'

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)])
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares: Array<string | null>) {
        setHistory([...history, nextSquares])
        setXIsNext(!xIsNext)
    }

    //TODO:
    function jumpTo(nextMove) {

    }

    const moves = history.map((squares, move) => {
        let description
        if(move > 0){
            description = 'Go to move #' + move
        }else{
            description = 'Go to game start'
        }
        return(
            <li key={move}>
                <button onClick={ () => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return(
        <>
        <section>
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
        </section>
        <section>
        <ol>{moves}</ol>
        </section>
        </>
    )
}