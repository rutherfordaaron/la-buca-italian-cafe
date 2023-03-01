import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import { Tag } from "@/components/MenuItem";

enum Page {
  food = "FOOD",
  drinks = "DRINKS",
  kids = "KIDS",
  desserts = "DESSERTS"
}

const Menu = () => {
  const [page, setPage] = useState(Page.food);

  const getPage = () => {
    switch (page) {
      case Page.kids:
        return (
          <section className="min-h-screen p-5">
            <h2 className="text-center text-4xl">Kids</h2>
            <hr className="font-bold mb-5" />
          </section>
        )
      case Page.drinks:
        return (
          <section className="min-h-screen p-5">
            <h2 className="text-center text-4xl">Drinks</h2>
            <hr className="font-bold mb-5" />
            <h3 className="">speciale cocktails</h3>
            <h3 className="">vino vianco</h3>
            <h3 className="">vino rosso</h3>
            <h3 className="">beer on tap</h3>
            <h3 className="text-lg">bottled beer & cider</h3>
            <h3 className="">non-alcoholic beverages</h3>
          </section>
        )
      case Page.desserts:
        return (
          <section className="min-h-screen p-5">
            <h2 className="text-center text-4xl">Dessert</h2>
            <hr className="font-bold mb-5" />
          </section>
        )
      default:
        return (
          <section className="min-h-screen p-5">
            <h2 className="text-center text-4xl">Food</h2>
            <hr className="font-bold mb-5" />

            <h3 className="">primi</h3>
            <MenuItem
              name="seasonal pickled vegetables"
              description=""
              price={7}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="mediterranean olives"
              description="marinated in lemon garlic olve oil"
              price={8}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />

            <h3 className="">insalate, zuppa, & contorni</h3>

            <h3 className="">pasta</h3>

            <h3 className="">entrata</h3>

            <h3 className="">additions</h3>
          </section>
        )
    }
  }
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <button
          className={`transition-all ${page === Page.food ? "font-bold text-lg border-b-2" : "border-b"}`}
          type="button"
          onClick={e => setPage(Page.food)}
        >Food
        </button>
        <button
          className={`transition-all ${page === Page.drinks ? "font-bold text-lg border-b-2" : "border-b"}`}
          type="button"
          onClick={e => setPage(Page.drinks)}
        >
          Drinks
        </button>
        <button
          className={`transition-all ${page === Page.desserts ? "font-bold text-lg border-b-2" : "border-b"}`}
          type="button"
          onClick={e => setPage(Page.desserts)}
        >
          Dessert
        </button>
        <button
          className={`transition-all ${page === Page.kids ? "font-bold text-lg border-b-2" : "border-b"}`}
          type="button"
          onClick={e => setPage(Page.kids)}
        >
          Kids
        </button>
      </div>
      <article>
        {getPage()}
      </article>
    </>
  )
}

export default Menu;