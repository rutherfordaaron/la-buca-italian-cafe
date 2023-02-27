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
      <section className="bg-slate-800 p-4 relative">
        <div>
          <h2 className="text-center">Hours</h2>
          <div className="flex gap-3 justify-center">
            <div className="flex flex-col justify-between">
              <p className="text-right my-1 text-lg"><span className="font-bold">Monday</span>: 5:00 pm - 9:00 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Tuesday</span>: 5:00 pm - 9:00 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Wednesday</span>: 5:00 pm - 9:00 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Thursday</span>: 5:00 pm - 9:00 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Friday</span>: 5:00 pm - 10:00 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Saturday</span>: 5:00 pm - 9:30 pm</p>
              <p className="text-right my-1 text-lg"><span className="font-bold">Sunday</span>: 5:00 pm - 9:00 pm</p>
            </div>
          </div>
        </div>
        <div>

        </div>
      </section>
    </article>
  )
}

export default Home;