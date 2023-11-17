'use client'
import { useState } from 'react'

import styles from '../styles.module.css'
export default function Square({ }) {
    const [value, setValue] = useState<string | null>(null)

    function handleClick() {
        setValue('X')
    }
    return(
        <button className={styles.square} onClick={handleClick}>{value}</button>
    )
}