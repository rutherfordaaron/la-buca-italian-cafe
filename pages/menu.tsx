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
            {/* ---------- PRIMI ---------- */}
            <h3 className="">Primi</h3>
            <MenuItem
              name="Seasonal Pickled Vegetables"
              description=""
              price={7}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Mediterranean Olives"
              description="marinated in lemon garlic olve oil"
              price={8}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Arancini"
              description="stuffed with bolognese & fontina cheese served over marninara"
              price={9}
              tags={[]}
            />
            <MenuItem
              name="Carciofi"
              description="artichoke, pomodoraccio tomato, herb and olive oil"
              price={8}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Polpette"
              description="grilled baguett, spicy meatballs, marinara, smoked mozzarella"
              price={12}
              tags={[]}
            />
            <MenuItem
              name="Calamari"
              description="lightly dusted and fried, served with roasted pepper aioli*"
              price={15}
              tags={[]}
            />
            <MenuItem
              name="Olive Bruschetta"
              description="kalamata olive tapenade"
              price={11}
              tags={[Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Pomodoro Bruschetta"
              description="tomato & roasted garlic"
              price={11}
              tags={[Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Caprese Bruschetta"
              description="tomato, fresh mozzarella & basil"
              price={12}
              tags={[Tag.v]}
            />

            {/* ---------- Insalate, Zuppa, & Contorni ---------- */}
            <h3 className="">Insalate, Zuppa, & Contorni</h3>
            <MenuItem
              name="Zuppa del Giorno"
              description=""
              price={[8, 10]}
              sizes={["cup", "bowl"]}
              tags={[]}
            />
            <MenuItem
              name="Verdi"
              description="mixed greens and red onion tossed with olive oil and balsamic vinegar"
              price={[9, 13]}
              sizes={["small", "large"]}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Spinaci"
              description="baby spinach with tomatoes, lives and feta, lemon-infused olive oil and balsamic"
              price={[10, 14]}
              sizes={["small", "large"]}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />
            <MenuItem
              name="Casesar"
              description="romaine lettuce and croutons with an anchovy, garlic, lemon, parmesan aioli"
              price={[10, 14]}
              sizes={["small", "large"]}
              tags={[]}
            />
            <MenuItem
              name="Gorgonzola"
              description="romaine lettuce, apple roasted walnuts, creamy gorgonzola dressing"
              price={[10, 14]}
              sizes={["small", "large"]}
              tags={[Tag.gf, Tag.v]}
            />
            <MenuItem
              name="Mashed Potatoes"
              description="topped with basil pesto"
              price={8}
              tags={[Tag.gf, Tag.v]}
            />
            <MenuItem
              name="Sautè"
              description="broccoli or seasonal vegetables with olive oil, garlic 
              & lemon"
              price={9}
              tags={[Tag.gf, Tag.v, Tag.vegan]}
            />

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