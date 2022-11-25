import Link from 'next/link'
const NotFound=()=>{
    return(
        <div className='not-found'>
            <h1>NotFound😪</h1>
            <p>Go back to the <Link href='/'>Homepage.</Link></p>
        </div>
    )
}
export default NotFound;