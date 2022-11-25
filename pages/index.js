import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <h1 className={styles.header}>Homepage</h1>
    <p>This is the first page</p>
   </>
  )
}
