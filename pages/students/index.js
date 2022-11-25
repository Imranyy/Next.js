import Head from "next/head";
import styles from '../../styles/Students.module.css'
//fetches data
export const getStaticProps=async()=>{
    try {
        const url='https://jsonplaceholder.typicode.com/users';
        const response=await fetch(url);
        const parseRes=await response.json();

        return {
        props:{students: parseRes}
        }
    } catch (error) {
        console.log(error)
    }
 
}
const Students=({students})=>{
    return(
        <>
        <Head>
            <title>Ninja List</title>
            <metadata name='keywords' content='ninjas'/>
            <link type='favicon' href='/hecker.ico'/>
        </Head>
            <h1>All Students</h1>
            {students.map((student)=>(
                <div key={student.id}>
                    <a> <h3 className={styles.single}>{student.name}</h3></a>
                </div>
            ))}
        </>
    )
}
export default Students;