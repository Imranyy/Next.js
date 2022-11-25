import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//fetches data
export const getStaticProps=async()=>{
    const url='https://jsonplaceholder.typicode.com/users';
    const response=await fetch(url);
    const parseRes=await response.json();

    return {
      props:{students: parseRes}
    }
 
}
export default function Home({students}) {
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
    {students.map((student)=>(
      <div key={student.id}>
        <p>{student.name}</p>
      </div>
    ))}
   </>
  )
}
