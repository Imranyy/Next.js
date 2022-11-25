import Link from "next/link";
import Image from 'next/image';

const Navbar=()=>{
    return(
        <nav>
           <div className="logo"><h1>Ninja List</h1></div>
           <Link href='/'>Home</Link>
           <Link href='/about'>About</Link>
           <Link href='/students'>Student Listing</Link>
        </nav>
    )
}
export default Navbar;