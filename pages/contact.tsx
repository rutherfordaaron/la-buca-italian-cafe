import Map from "@/components/Map";
import Link from "next/link";

const Contact = () => {
  return (
    <article className="p-5 min-h-[75vh] max-w-4xl mx-auto">
      <h1 className="text-4xl">Get in touch!</h1>
      <div className="mb-5">
        <p>Call us at <Link className="underline" href="tel:5032381058">(503) 238-1058</Link></p>
        <p>Email us at <Link className="underline" href="mailto:labucaeast@gmail.com">labucaeast@gmail.com</Link></p>
        <p>Or <Link className="underline" href="https://www.google.com/maps/dir//''/@45.5235634,-122.7071369,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5495a0bf3c5ffd61:0x5f17c2164bd045bf!2m2!1d-122.6371189!2d45.52348!3e3">get directions</Link> and drop on in!</p>
      </div>
      <div className="mt-5 md:grid grid-cols-2 items-center">
        <Map />
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
      </div>
    </article>
  )
}

export default Contact;