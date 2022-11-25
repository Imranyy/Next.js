import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <Head>
      <title>Ninja List | Home</title>
      <metadata name='keywords' content='ninjas'/>
      <link type='favicon' href='/hecker.ico'/>
    </Head>
    <h1 className={styles.header}>Homepage</h1>
    <p>This is the first page</p>
   </>
  )
}
