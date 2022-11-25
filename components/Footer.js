import Link from 'next/link'
const Footer=()=>{
    return(
        <footer>
            <Link href='/students'>See Student listing</Link>
            <small>
                Copyright 2022 Student list
            </small>
        </footer>
    );
}
export default Footer;
