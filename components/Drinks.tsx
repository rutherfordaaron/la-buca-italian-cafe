import MenuItem from "./MenuItem"
import { Tag } from "./MenuItem"

const Drinks = () => {
  return (
    <section className="min-h-screen p-5">
      {/* ---------- Speciale Cocktails ---------- */}
      <h3 className="">Speciale Cocktails</h3>
      <MenuItem
        name="Grapefruitti Margarita"
        description="cuervo gold tequila, gra gala, fresh squeezed ruby grapefruit, lime, rocks, salt"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Whiskey Sour"
        description="makers mark, lemon, simple, rocks, amarena cherry"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="A Taversaiamo"
        description="monopolowa vodka, st. germain elderflower liqueur, lime, simple, served up"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Americano"
        description="campari, sweet vermouth, soda, ver ice with an orange peel"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Dark & Stormy"
        description="goslings dark rum, lime, ginger, simple, soda, served over ice"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Aviation"
        description="tanquerey gin, creme de violette, lemon, lucardo maraschino brandy, up with a twist of lemon"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Modern Fashioned"
        description="buffalo trace bourbon, ramazotti amaro, over a large cuve with an orange peel"
        price={11}
        tags={[]}
      />
      <MenuItem
        name="Sazerac"
        description="bulleit rye, sambuca, peychauds bitters, stirred and served neat with an orange peel"
        price={11}
        tags={[]}
      />

      {/* ---------- Vino Vianco ---------- */}
      <h3 className="">Vino Vianco</h3>

      {/* ---------- Vino Rosso ---------- */}
      <h3 className="">Vino Rosso</h3>

      {/* ---------- Beer on Tap ---------- */}
      <h3 className="">Beer on Tap</h3>

      {/* ---------- Bottled Beer & Cider ---------- */}
      <h3 className="text-lg">Bottled Beer & Cider</h3>

      {/* ---------- Non-Alcoholic Beverages ---------- */}
      <h3 className="">Non-Alcoholic Beverages</h3>
    </section>
  )
}

export default Drinks;