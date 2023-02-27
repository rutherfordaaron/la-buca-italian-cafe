import logo from "../public/la buca.png";
import Image from "next/image";

const Home = () => {
  return (
    <article>
      <div className="parallax fixed inset-0 z-[0]" />
      <section className="h-screen before:bg-gradient-to-br relative before:from-rose-500 before:to-sky-500 before:opacity-30 before:w-screen before:h-screen before:absolute flex justify-center items-center">
        <div className="w-4/5 max-w-2xl bg-slate-700 px-8 py-9 flex flex-col justify-center items-center shadow-md rounded-lg z-10 text-center">
          <h1 className="mb-4">la buca</h1>
          <p className="text-lg font-bold">Serving generous portions of italian classics.</p>
        </div>
      </section>
      <section className="bg-slate-800 h-screen relative">
        <h2>Test</h2>
      </section>
    </article>
  )
}

export default Home;