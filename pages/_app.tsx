import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/la buca.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function App({ Component, pageProps }: AppProps) {
  const toggleNav = () => {
    const nav = document.getElementById("nav");
    if (nav) { nav.classList.toggle("scale-0"); nav.classList.toggle("scale-100") };
  }

  return (
    <>
      <header className='bg-slate-800 flex justify-between items-center p-4 relative shadow-lg z-10'>
        <Link href="/" className='text-4xl font-bold hover:text-slate-200'>la buca</Link>
        <button type="button" onClick={toggleNav} className="z-10 border-none bg-transparent hover:scale-110 transition-all">
          <FontAwesomeIcon icon={faBars} className="text-2xl transition-all" />
        </button>
        <nav id="nav" className='scale-0 absolute flex flex-col justify-end top-0 right-0 bg-slate-900 px-6 py-3 pt-5 w-40 transition-all origin-top-right shadow-lg'>
          <Link href="/menu" className="nav-link">Menu</Link>
          <Link href="/catering" className="nav-link">Catering</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>

      </footer></>
  )
}
