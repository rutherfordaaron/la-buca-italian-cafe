import { useState } from "react";
import Food from "@/components/Food";
import Desserts from "@/components/Desserts";
import Drinks from "@/components/Drinks";
import Kids from "@/components/Kids";

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
        return <Kids />
      case Page.drinks:
        return <Drinks />
      case Page.desserts:
        return <Desserts />
      default:
        return <Food />
    }
  }
  return (
    <>
      <div className="flex items-center justify-center gap-5 p-5">
        <button
          className={`transition-all ${page === Page.food ? "font-bold text-lg border-b-2" : "border-b text-slate-300"}`}
          type="button"
          onClick={e => setPage(Page.food)}
        >Food
        </button>
        <button
          className={`transition-all ${page === Page.drinks ? "font-bold text-lg border-b-2" : "border-b text-slate-300"}`}
          type="button"
          onClick={e => setPage(Page.drinks)}
        >
          Drinks
        </button>
        <button
          className={`transition-all ${page === Page.desserts ? "font-bold text-lg border-b-2" : "border-b text-slate-300"}`}
          type="button"
          onClick={e => setPage(Page.desserts)}
        >
          Dessert
        </button>
        <button
          className={`transition-all ${page === Page.kids ? "font-bold text-lg border-b-2" : "border-b text-slate-300"}`}
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