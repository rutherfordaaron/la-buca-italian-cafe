import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/la buca.png';

export default function App({ Component, pageProps }: AppProps) {
  const toggleNav = () => {
    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("hidden");
  }

  return (
    <>
      <header className='bg-slate-600 flex justify-between align-middle p-4'>
        <Link href="/">
          <Image src={logo} alt="la buca" />
        </Link>
        <button type="button" onClick={toggleNav}>
          O
        </button>
        <nav id="nav" className='hidden'>
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>

      </footer></>
  )
}
