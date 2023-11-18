'use client'
import Square from './square.tsx'
import styles from '../styles.module.css'
import { useState } from 'react'

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))

    function determineWinner(squares: Array<string | null>): string | null {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (const line of lines){
            const [a,b,c] = line
            if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
                console.log(`The winner is ${squares[a]}`)
                return squares[a]
            }
        }
        return null
    }

    function handleClick(i: number): void {
        if ( determineWinner(squares) || squares[i]) {
            return
        }
        const squareArray = squares.slice()
        if(xIsNext) {
            squareArray[i] = 'X'
        }else{
            squareArray[i] = 'O'
        }
        setSquares(squareArray)
        setXIsNext(!xIsNext)
    }

    return(
        <>
            <div className={styles['board-row']}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className={styles['board-row']}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className={styles['board-row']}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}