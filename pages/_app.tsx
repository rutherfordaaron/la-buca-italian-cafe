import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [listener, setListener] = useState(false);

  const toggleNav = () => {
    const nav = document.getElementById("nav");
    const body = document.querySelector("body");
    console.log(Boolean(body && nav))
    if (nav && body) {
      if (!listener) {
        console.log("no listener")
        setListener(true);
        nav.classList.remove("scale-0");
        nav.classList.add("scale-100");
        console.log(nav.classList)

        setTimeout(() => {
          body.addEventListener("click", () => {
            nav.classList.add("scale-0")
            nav.classList.remove("scale-100")
            setListener(false);
          }, { once: true })
        }, 10)
      }
    }
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
        <LoadScript googleMapsApiKey={"AIzaSyABGsCfvz2E6KsmLkqzewSdJJ6feKoozmk"}>
          <Component {...pageProps} />
        </LoadScript>
      </main>
      <footer className='bg-gray-600 relative p-5 flex flex-col gap-8 justify-between items-center'>
        <div className='flex gap-8'>
          <Link href="/menu" className="underline text-lg">Menu</Link>
          <Link href="/contact" className="underline text-lg">Contact</Link>
          <Link href="/catering" className="underline text-lg">Catering</Link>
        </div>
        <div className='flex gap-8'>
          <div className='text-5xl'>
            <Link href="https://www.facebook.com/LaBucaEast"><FontAwesomeIcon icon={faFacebook} /></Link>
          </div>
          <div className='text-5xl'>
            <Link href="https://twitter.com/labucapdx"><FontAwesomeIcon icon={faTwitter} /></Link>
          </div>
          <div className='text-5xl'>
            <Link href="https://www.instagram.com/labucapdx/"><FontAwesomeIcon icon={faInstagram} /></Link>
          </div>
        </div>
      </footer>
    </>
  )
}
