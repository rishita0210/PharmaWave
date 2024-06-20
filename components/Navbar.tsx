// components/Navbar.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart ,faHeart} from '@fortawesome/free-solid-svg-icons'
// import Link from 'next/link'
// import Image from 'next/image'

// const Navbar = () => {
//   return (
//     <nav className=" max-w-[1440px] fixed w-full z-50 bg-gradient-to-br from-[#d4f0f1] to-[#95bccd] shadow-md py-4 h-15 pl-14">
//       <div className ="flex flex-col justify-start items-start gap-6">
//                 <Image src="/logo.png" alt="" 
//                 width={100} height={100}
//                 className=''/>
//        </div>
//       <div className="container mx-auto flex justify-between items-center ml-2">
//         <div className="flex items-center space-x-4 flex-grow justify-center">
//           <Link href="/" legacyBehavior>
//             <a className="text-balck-400 font-bold hover:text-blue-400 text-center">Home</a>
//           </Link>
//           <Link href="/shop" legacyBehavior>
//             <a className="text-black-400 font-bold hover:text-blue-400 ml-4">Shop</a>
//           </Link>
//           <Link href="/categories" legacyBehavior>
//             <a className="text-black-400 font-bold hover:text-blue-400 ml-4">Categories</a>
//           </Link>
//           <Link href="/contact" legacyBehavior>
//             <a className="text-black-400 font-bold hover:text-blue-400 ml-4">Contact Us</a>
//           </Link>
//         </div>
//         <div className="flex items-center ml-auto text-l text-black-70 space-x-4 pr-12">
//           <Link href="/wishlist" legacyBehavior>
//             <a className="flex items-center space-x-1 hover:text-blue-400">
//               <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
//               <span className="text-s">Wishlist</span>
//             </a>
//           </Link>
//           <Link href="/cart" legacyBehavior>
//             <a className="flex items-center  space-x-1 hover:text-blue-400">
//               <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4 " />
//               <span className="text-s mr-3">Cart</span>
//             </a>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-br from-[#d4f0f1] to-[#95bccd] shadow-md py-4">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-6 md:px-14">
        <div className="flex items-center gap-6">
        <Image src="/logo.png" alt="" 
                width={118} height={118}
                className='object-contain'/>
        </div>
        <div className="flex-grow flex items-center justify-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-black font-bold hover:text-blue-400 text-center">Home</a>
          </Link>
          <Link href="/shop" legacyBehavior>
            <a className="text-black font-bold hover:text-blue-400">Shop</a>
          </Link>
          <Link href="/categories" legacyBehavior>
            <a className="text-black font-bold hover:text-blue-400">Categories</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-black font-bold hover:text-blue-400">Contact Us</a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/wishlist" legacyBehavior>
            <a className="flex items-center space-x-1 hover:text-blue-400">
              <FontAwesomeIcon icon={faHeart} className="h-4 w-4" />
              <span className="text-sm">Wishlist</span>
            </a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="flex items-center space-x-1 hover:text-blue-400">
              <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
              <span className="text-sm">Cart</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





