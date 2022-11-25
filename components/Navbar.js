import Link from "next/link";
import Image from 'next/image';

const Navbar=()=>{
    return(
        <nav>
           <div className="logo"><h1><Image width={50} height={50} src='/hecker.ico' alt='logo'/></h1></div>
           <Link href='/'>Home</Link>
           <Link href='/about'>About</Link>
           <Link href='/students'>Student Listing</Link>
        </nav>
    )
}
export default Navbar;