import MenuItem from "@/components/MenuItem";
import Link from "next/link";

const Catering = () => {
  return (
    <article className="p-5 min-h-[75vh] max-w-4xl mx-auto">
      <h1 className="text-center">Catering</h1>
      <p className="text-slate-400 italic">All items are shown as a serving for 12 people, but can be adjusted as needed.</p>
      <section>
        <h3>Starters</h3>
        <MenuItem
          name="Assorted Seasonal Pickled Vegetables"
          description=""
          price={68}
          tags={[]}
        />
        <MenuItem
          name="Carciofi"
          description="artichoke, pomodoraccio tomato, herb and olive oil"
          price={80}
          tags={[]}
        />
        <MenuItem
          name="Polpette"
          description="baguette, spicy meatballs, marinara, and smoked mozzarella"
          price={120}
          tags={[]}
        />
        <MenuItem
          name="Olive Brushetta"
          description="kalamata olive tapenade"
          price={110}
          tags={[]}
        />
        <MenuItem
          name="Caprese Bruschetta"
          description="tomato, fresh mozzarella and basil"
          price={120}
          tags={[]}
        />
      </section>

      <section>
        <h3>Insalate & Sides</h3>
        <MenuItem
          name="Verdi"
          description="mixed greens tossed with olive oil and balsamic vinegar"
          price={80}
          tags={[]}
        />
        <MenuItem
          name="Spinaci"
          description="baby spinach with tomatoes, olives and feta dressed with a lemon-infused olive oil and balsamic vinegar"
          price={98}
          tags={[]}
        />
        <MenuItem
          name="Caesar"
          description="romaine lettuce and croutons tossed with a traditional anchovy, garlic, lemon, and parmesan aioli"
          price={98}
          tags={[]}
        />
        <MenuItem
          name="Gorgonzola"
          description="romain lettuce with apple, roasted walnuts and creamy gorgonzola dressing"
          price={98}
          tags={[]}
        />
        <MenuItem
          name="Mashed Potatoes"
          description="topped with basil pesto and olive oil"
          price={80}
          tags={[]}
        />
        <MenuItem
          name="Sauté"
          description="broccoli or seasonal vegetables with olive oil, garlic and lemon"
          price={90}
          tags={[]}
        />
      </section>

      <section>
        <h3>Pasta</h3>
        <MenuItem
          name="Alfredo"
          description="linguine tossed in a roasted garlic and parmesan cream sauce"
          price={160}
          tags={[]}
        />
        <MenuItem
          name="Pomodoro Spaghetti"
          description="tossed with a fresh basil and garlic tomato sauce"
          price={120}
          tags={[]}
        />
        <MenuItem
          name="Pesto Basilico"
          description="linguine tossed with a pesto of fresh basil, pinenuts, walnuts, garlic, parmesan and olive oil"
          price={160}
          tags={[]}
        />
        <MenuItem
          name="Bolognese"
          description="spaghetti with a heary beef and pork ragu"
          price={188}
          tags={[]}
        />
        <MenuItem
          name="Puttanesca"
          description="penne, roma tomatoes, mediterranean olives, capers, oregano, garlic, crushed red pepper with a hint of anchovy"
          price={160}
          tags={[]}
        />
        <MenuItem
          name="Vegetariana"
          description="penne, roma tomatoes, broccoli, roasted yellow peppers and pinenuts tossed with garlic, lemon juice and extra virgin olive oil"
          price={160}
          tags={[]}
        />
        <MenuItem
          name="Salmone Ubriaco"
          description="wild salmon poached in vodka and cream, tossed with scallions and spaghetti"
          price={188}
          tags={[]}
        />
        <MenuItem
          name="Lasagne"
          description="baked, beef and pork bolognese, ricotta, bechamel and mozzarella"
          price={188}
          tags={[]}
        />
        <MenuItem
          name="Al Forno"
          description="penne baked with mascarpone, mozzarella, fontina and parmesan cheeses with tomato sauce"
          price={160}
          tags={[]}
        />
        <MenuItem
          name="Abituale"
          description="penne tossed with spicy italian sausage in parmesan and roasted garlic tomato cream sauce"
          price={188}
          tags={[]}
        />
        <MenuItem
          name="Pancetta e Funghi"
          description="penne with sauteed pancetta, mushrooms and shallots finished with dry vermouth and a hint of cream"
          price={188}
          tags={[]}
        />
      </section>

      <section>
        <h3>Additions</h3>
        <p className="italic text-slate-400">May be added to any of our menu items</p>
        <div className="md:grid md:grid-cols-2 md:gap-x-24">
          <MenuItem
            name="Add roasted chicken breast"
            description=""
            price={77}
            tags={[]}
          />
          <MenuItem
            name="Add spicy meat balls"
            description=""
            price={88}
            tags={[]}
          />
          <MenuItem
            name="Add spicy italian sausage"
            description=""
            price={77}
            tags={[]}
          />
          <MenuItem
            name="Add seasonal vegetables"
            description=""
            price={88}
            tags={[]}
          />
          <MenuItem
            name="Add prawns"
            description=""
            price={128}
            tags={[]}
          />
          <MenuItem
            name="Add salmon"
            description=""
            price={128}
            tags={[]}
          />
          <MenuItem
            name="Add broccoli"
            description=""
            price={88}
            tags={[]}
          />
          <MenuItem
            name="Substitute gluten free penne"
            description=""
            price={88}
            tags={[]}
          />
          <MenuItem
            name="Substitute gnocchi or cheese raviloli"
            description=""
            price={88}
            tags={[]}
          />
        </div>
      </section>

      <section className="border-b border-slate-400 mb-5">
        <h3>Entree</h3>
        <MenuItem
          name="Polenta con Maiale"
          description="slow roasted pork with caramelized onions and peas, served on parmesan polenta in a fresh sage chianti butter sauce"
          price={200}
          tags={[]}
        />
        <MenuItem
          name="Pollo Marsala"
          description="chicken medallions sauteed with mushrooms in a marsala wine sauce, served with mashed potatoes"
          price={220}
          tags={[]}
        />
        <MenuItem
          name="Pollo Parmigiana"
          description="lightly dusted chicken medallions, smoked mozzarella, tomato basil sauce, spaghetti"
          price={220}
          tags={[]}
        />
        <MenuItem
          name="Risotto Funghi e Verdure"
          description="arborio rice with mushrooms, seasonal vegetables and parmesan cheese"
          price={200}
          tags={[]}
        />
        <MenuItem
          name="Pesci del Giorno"
          description="fish of the day varies based on the season. Please inquire"
          price={[0, 0]}
          tags={[]}
        />
      </section>

      <section className="flex flex-col gap-4 italic">
        <p>Gratuity of 20% will be included with every order.</p>
        <p>Delivery available for a 20% fee.</p>
        <p>48 hour notice is required for all catering orders.</p>
        <p><Link className="underline" href="/contact">Contact us</Link> for any questions or catering orders.</p>
      </section>
    </article>
  )
}

export default Catering;