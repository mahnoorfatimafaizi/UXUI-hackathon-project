import Link from "next/link"
import Menu from "./Menu"

import SearchIcon from "./SearchIcon"
import HeaderIcons from "./HearderIcons"

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
           <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:hidden' >

            {/* Mobile Screen */}
            <div className='h-full flex items-center justify-between md:hidden'>
        <Link href="/">
        <div className='text-xl font-semibold text-customPurple'>Avion</div></Link>
        <Menu />
        </div>
        </div>

        {/* full screen */}
           <div className=" hidden md:flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 ">
           <SearchIcon />

         {/* Center Section: Logo */}
         <div>
          <Link href="/">
          <h1 className="text-xl font-semibold text-customPurple">Avion</h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <HeaderIcons />
        </div>
      </div>

      {/* Navigation Menu (Hidden on small screens) */}
      <nav className="hidden sm:block border-t text-customPurple">
        <ul className="flex items-center justify-center space-x-6 py-4">
          <li>
            <Link href="#" className="hover:text-customPurple">Plant pots</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Ceramics</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Tables</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Chairs</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Crockery</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Tableware</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-customPurple">Cutlery</Link>
          </li>
        </ul>
      </nav>
        </header>
    )
}
export default Header


