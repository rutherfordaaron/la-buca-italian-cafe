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

      {/* ---------- Vino Bianco ---------- */}
      <h3 className="">Vino Bianco</h3>
      <MenuItem
        name="Vandori"
        description="pinot grigio, italy nv"
        price={[8, 26]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Farina"
        description="chiaretto bardolino, italy '21"
        price={[9, 33]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Sun Garden"
        description="riesling, germany '20"
        price={[9, 33]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Franco Serra"
        description="bianco (chardonnay/cortese), piemonte, italy '21"
        price={[9, 33]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Riff"
        description="pinot grigio, venezie, italy '21"
        price={[10, 37]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Cooper Mountain"
        description="organic pinot gris, willamette valley '21"
        price={[11, 41]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="La Bella"
        description="prosecco, friulani, italy nv"
        price={[0, 10]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Moncalvina"
        description="moscato d'asti, italy '19"
        price={[0, 35]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />

      {/* ---------- Vino Rosso ---------- */}
      <h3 className="">Vino Rosso</h3>
      <MenuItem
        name="Vandori"
        description="cabernet sauvignon, italy nv"
        price={[8, 26]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="San Giorgio"
        description="sangiovese di publia, italy '20"
        price={[9, 33]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Casa Benasal"
        description="tinto garnacha, spain '20"
        price={[9, 33]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Travignoli"
        description="chianti, italy '21"
        price={[10, 37]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Barone Cornacchia"
        description="montepulciano d'abruzzo, italy '19"
        price={[10, 37]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Throw Back"
        description="cabernet sauvignon, columbia valley '19"
        price={[11, 41]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Loosen Christopher"
        description="jj pinot noir, willamette valley '19"
        price={[13, 46]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Bodegas Ontañon"
        description="tempranillo garnacha, rioja, spain '18"
        price={[0, 39]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Inama"
        description="piu, camenere, italy '19"
        price={[0, 44]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="La Valentina"
        description="spelt, montepulciano d'abruzzo, italy '17"
        price={[0, 44]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />
      <MenuItem
        name="Vietti"
        description="dolcetto d'alba, italy '20"
        price={[0, 44]}
        sizes={["glass", "bottle"]}
        tags={[]}
      />

      {/* ---------- Beer on Tap ---------- */}
      <h3 className="">Beer on Tap</h3>
      <MenuItem
        name="Upright"
        description="engelberg pilsener, portland"
        price={[5, 7]}
        sizes={["glass", "pint"]}
        tags={[]}
      />
      <MenuItem
        name="Hammer and Stitch"
        description="the weizen, portland"
        price={[5, 7]}
        sizes={["glass", "pint"]}
        tags={[]}
      />
      <MenuItem
        name="Double Mountain"
        description="ira, hood river"
        price={[5, 7]}
        sizes={["glass", "pint"]}
        tags={[]}
      />
      <MenuItem
        name="Barely Brown's"
        description="pallet jack ipa, baker city"
        price={[5, 7]}
        sizes={["glass", "pint"]}
        tags={[]}
      />
      <MenuItem
        name="Everybody's Brewing"
        description="hazy ipa, white salmon"
        price={[5, 7]}
        sizes={["glass", "pint"]}
        tags={[]}
      />

      {/* ---------- Bottled Beer & Cider ---------- */}
      <h3 className="">Bottled Beer & Cider</h3>

      {/* ---------- Non-Alcoholic Beverages ---------- */}
      <h3 className="">Non-Alcoholic Beverages</h3>
    </section>
  )
}

export default Drinks;