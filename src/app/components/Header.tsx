import Link from "next/link"
import Menu from "./Menu"

import SearchIcon from "./SearchIcon"
import HeaderIcons from "./HearderIcons"

const Header = () => {
    return (
        <header className="bg-white shadow-sm">

           <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative' >

            {/* Mobile Screen */}
            <div className='h-full flex items-center justify-between '>
        <Link href="/">
        <div className='text-xl md:text-2xl font-semibold text-customPurple'>Avion</div></Link>

        <div className="hidden md:flex items-center gap-6">
        <Link href="/">Home</Link>
        <span>&#128900;</span>
        <Link href="/pages/about">About</Link>
        <span>&#128900;</span>
        <Link href="/pages/contact">Contact</Link>
        </div>
        <Menu />
        <HeaderIcons />
        </div>
        </div>


      {/* Navigation Menu (Hidden on small screens) */}
      <nav className="hidden sm:block border-t text-customPurple">
        <ul className="flex items-center justify-center space-x-6 py-4">
          <li>
            <Link href="/categories/plantpots" className="hover:text-customPurple">Plant pots</Link>
          </li>
          <li>
            <Link href="/categories/ceramics" className="hover:text-customPurple">Ceramics</Link>
          </li>
          <li>
            <Link href="/categories/tables" className="hover:text-customPurple">Tables</Link>
          </li>
          <li>
            <Link href="/categories/chairs" className="hover:text-customPurple">Chairs</Link>
          </li>
          <li>
            <Link href="/categories/crockery" className="hover:text-customPurple">Crockery</Link>
          </li>
          <li>
            <Link href="/categories/tableware" className="hover:text-customPurple">Tableware</Link>
          </li>
          <li>
            <Link href="/categories/cutlery" className="hover:text-customPurple">Cutlery</Link>
          </li>
        </ul>
      </nav>
        </header>
    )
}
export default Header


