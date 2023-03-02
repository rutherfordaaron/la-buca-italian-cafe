import MenuItem from "./MenuItem";
import { Tag, symbols } from "./MenuItem";

const Food = () => {
  return (
    <section className="min-h-screen p-5">
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

      {/* ---------- Pasta ---------- */}
      <h3 className="">Pasta</h3>
      <MenuItem
        name="Alfredo"
        description="linguinie tossed in a roasted garlic and parmesan cream sauce"
        price={17}
        tags={[Tag.v]}
      />
      <MenuItem
        name="Pomodoro"
        description="spaghetti tossed with a fresh basil and garlic tomato sauce"
        price={14}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="Pesto Basilica"
        description="linguine, fresh basil, pine nutes, walnuts, garlic, parmesan, olive oil"
        price={18}
        tags={[Tag.v]}
      />
      <MenuItem
        name="Bolognese"
        description="spaghetti with a heary beef & pork ragu"
        price={19}
        tags={[]}
      />
      <MenuItem
        name="Puttanesca"
        description="penne, roma tomatoes, olives, capers, garlic, red pepper, and a hint of anchovy"
        price={17}
        tags={[]}
      />
      <MenuItem
        name="Vegetariana"
        description="penne, roma tomatoes, broccoli, roasted yellow peppers, pine nut, garlic, lemon juice, pepper flakes, extra virgin olive oil"
        price={18}
        tags={[Tag.v, Tag.vegan]}
      />
      <MenuItem
        name="Salmone Ubriaco"
        description="spaghetti, vodka cream poached wil salmon, scallions*"
        price={19}
        tags={[]}
      />
      <MenuItem
        name="Lasagne"
        description="beef & pork bolognese, rictta, bèchamel, mozzarella"
        price={18}
        tags={[]}
      />
      <MenuItem
        name="Al Forno"
        description="baked penne, mascarpone, mozzarella, parmesan, tomato sauce"
        price={17}
        tags={[Tag.v]}
      />
      <MenuItem
        name="Abituale"
        description="penne, spicy italian sausage, parmesan & roasted garlic tomato cream sauce"
        price={18}
        tags={[]}
      />
      <MenuItem
        name="Pancetta e Funghi"
        description="penne, pancetta, mushrooms, shallots, cream"
        price={18}
        tags={[]}
      />

      {/* ---------- Entrata ---------- */}
      <h3 className="">Entrata</h3>
      <MenuItem
        name="Pollo Marsala"
        description="lighly dusted chicken medallions, marsala wine sauce, and mushrooms, served with mashed potatoes "
        price={20}
        tags={[]}
      />
      <MenuItem
        name="Polenta con Maiale"
        description="slow roasted pork, caramelized onions, peas, parmesan plenta, sage chianti butter"
        price={19}
        tags={[Tag.gf]}
      />
      <MenuItem
        name="Risotto Funghi e Verdure"
        description="mushrooms, seasonal vegetables, parmesan"
        price={19}
        tags={[Tag.v]}
      />
      <MenuItem
        name="Bavette Steak 8oz"
        description="mashed potatoes, blistered tomatoes, salsa di palermo*"
        price={26}
        tags={[Tag.gf]}
      />

      {/* ---------- Additions ---------- */}
      <h3 className="">Additions</h3>
      <p className="italic text-slate-400">May be added to any of our menu items.</p>
      <div className="md:grid md:grid-cols-2 md:gap-x-24">
        <MenuItem
          name="Add 8oz bavette steak*"
          description=""
          price={13}
          tags={[]}
        />
        <MenuItem
          name="Add roasted chicken breast"
          description=""
          price={7}
          tags={[]}
        />
        <MenuItem
          name="Add salmon*"
          description=""
          price={9}
          tags={[]}
        />
        <MenuItem
          name="Add prawns*"
          description=""
          price={9}
          tags={[]}
        />
        <MenuItem
          name="Add spicy italian sausage"
          description=""
          price={7}
          tags={[]}
        />
        <MenuItem
          name="Add spicy meat balls"
          description=""
          price={8}
          tags={[]}
        />
        <MenuItem
          name="Add prosciutto"
          description=""
          price={4}
          tags={[]}
        />
        <MenuItem
          name="Add broccoli or seasonal veggies"
          description=""
          price={6}
          tags={[Tag.gf, Tag.v, Tag.vegan]}
        />
        <MenuItem
          name="Add fresh mozzarella"
          description=""
          price={4}
          tags={[Tag.gf, Tag.v]}
        />
        <MenuItem
          name="Substitute gnocchi or cheese ravioli"
          description=""
          price={4}
          tags={[Tag.v]}
        />
        <MenuItem
          name="Substitute gluten free penne"
          description=""
          price={4}
          tags={[Tag.gf, Tag.v, Tag.vegan]}
        />
      </div>
      <hr />
      <div className="mt-6 flex flex-col gap-4">
        <p>*Consuming raw or undercooked seafood, eggs, or meat may increase you risk of foodborn illness.</p>
        <div className="flex gap-3">
          {symbols["GLUTEN FREE"]}
          <p>Gluten Free</p>
        </div>
        <div className="flex gap-3">
          {symbols.VEGETARIAN}
          <p>Vegetarian</p>
        </div>
        <div className="flex gap-3">
          {symbols.VEGAN}
          <p>Vegan</p>
        </div>
      </div>
    </section>
  )
}

export default Food;