'use client'
import { useState } from 'react'
import Board from './board'
import next from 'next'

interface BoardProps {
    singlePlayer: boolean;
}

export default function Game({ singlePlayer }: BoardProps) {
    const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState<number>(0)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    function handlePlay(nextSquares: Array<string | null>) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }


    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove)
    }

    const moves = history.slice(0, currentMove + 1).map((squares, move) => {
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
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} singlePlayer={singlePlayer}/>
        </section>
        <section>
        <ol>{moves}</ol>
        </section>
        </>
    )
}