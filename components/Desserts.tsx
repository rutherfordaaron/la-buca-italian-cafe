import MenuItem from "./MenuItem"
import { Tag } from "./MenuItem"

const Desserts = () => {
  return (
    <section className="p-5">
      <MenuItem
        name="Tiramisu"
        description="espresso dipped ladyfingers layered with mascarpone and dutch cocoa"
        price={9}
        tags={[]}
      />
      <MenuItem
        name="Lemon Cheesecake"
        description="creamy lemon mascarpone cheesecake with berry coulis"
        price={9}
        tags={[]}
      />
      <MenuItem
        name="Bread Pudding"
        description="rustic bread baked with apples, raisins, cinnamon, served warm with whiskey cream"
        price={8}
        tags={[]}
      />
      <MenuItem
        name="Flourless Chocolate Torte"
        description=""
        price={9}
        tags={[]}
      />
      <MenuItem
        name="Double Fudge Chocolate Cake"
        description="dense and rich with dark chocolate ganache"
        price={10}
        tags={[]}
      />
      <MenuItem
        name="Carrot Cake"
        description="with buttercream frosting"
        price={9}
        tags={[]}
      />
      <MenuItem
        name="Gelato"
        description="see server for today's offerings"
        price={6}
        tags={[]}
      />
    </section>
  )
}

export default Desserts;