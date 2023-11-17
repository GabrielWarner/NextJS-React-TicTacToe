'use client'
import { useState } from 'react'

interface SquareProps {
    value: string | null; // Specify the expected type of 'value' here
  }

import styles from '../styles.module.css'
export default function Square({ value }: SquareProps) {
    return(
        <button className={styles.square}>{value}</button>
    )
}