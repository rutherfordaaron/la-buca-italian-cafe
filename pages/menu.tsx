import { useState } from "react";

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
            <h3 className="text-lg">speciale cocktails</h3>
            <h3 className="text-lg">vino vianco</h3>
            <h3 className="text-lg">vino rosso</h3>
            <h3 className="text-lg">beer on tap</h3>
            <h3 className="text-lg">bottled beer & cider</h3>
            <h3 className="text-lg">non-alcoholic beverages</h3>
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
            <h3 className="text-lg">primi</h3>
            <h3 className="text-lg">insalate, zuppa, & contorni</h3>
            <h3 className="text-lg">pasta</h3>
            <h3 className="text-lg">entrata</h3>
            <h3 className="text-lg">additions</h3>
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