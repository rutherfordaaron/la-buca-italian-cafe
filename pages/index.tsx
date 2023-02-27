import Map from "@/components/Map";
import Review from "@/components/Review";
import Link from "next/link";

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
        <div className="my-6">
          <div className="h-[300px]">
            <Map />
          </div>
          <Link href="https://www.google.com/maps/dir//''/@45.5235634,-122.7071369,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x5495a0bf3c5ffd61:0x5f17c2164bd045bf!2m2!1d-122.6371189!2d45.52348!3e3" className="text-center underline font-bold text-lg block my-4">Come visit us!<br />40 NE 28th Ave, Portland, OR 97232</Link>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-800 to-stone-600 relative h-auto pb-10 flex flex-col">
        <Review
          body="The wait staff was wonderful. The food was delicious. We didn't have to wait for a table. We elected to sit outside because the weather was good. Did not feel like we were separated from the restaurant, felt like we were an extension."
          name="Michelle V"
          left={false}
        />
        <Review
          body="Portland, OR has a vibrant dining scene and is represented well by La Buca Italian Cafe, despite just arriving in town and not having made reservations in advance, they were able to seat us immediately, choose outdoor seating to enjoy the weather...this is an easy place to find and a joy to indulge. 5 stars for great food, great service and fair prices, this should be a regular if you are a local, and a must visit if coming from out of town. Highly recommended!"
          name="AJ Medina"
          left={true}
        />
        <Review
          body="We went here for my husband's work Christmas party and it was an amazing treat. Drinks, dinner and dessert were all phenomenal tasting. The staff and the owners were all super friendly and accommodating for the group."
          name="Kristen Madsen"
          left={false}
        />
      </section>
    </article>
  )
}

export default Home;