import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';
import {useRouter} from 'next/router';

const NotFound=()=>{
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(1);
            router.push('/');
        },3000);
    },[]);
    return(
        <>
        <Head>
            <title>Ninja List | NotFound</title>
            <metadata name='keywords' content='ninjas'/>
            <link type='favicon' href='/hecker.ico'/>
        </Head>
            <div className='not-found'>
                <h1>NotFound😪</h1>
                <p>Go back to the <Link href='/'>Homepage.</Link></p>
            </div>
        </>
    )
}
export default NotFound;