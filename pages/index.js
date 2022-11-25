import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
    <Head>
      <title>Ninja List | Home</title>
      <metadata name='keywords' content='ninjas'/>
      <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon"/>
    </Head>
    <Image src='/hecker.ico' width={128} height={128} alt='logo'/>
    <h1 className={styles.header}>Homepage</h1>
    <p>This is the first page</p>
    
   </>
  )
}
