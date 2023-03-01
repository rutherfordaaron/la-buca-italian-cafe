import MenuItem from "./MenuItem";
import { Tag } from "./MenuItem";

const Kids = () => {
  return (
    <section className="p-5">
      <p className="italic text-slate-400">All main items served with apple slices and bread</p>
      <MenuItem
        name="Bavette Steak"
        description="and buttered mashed potatoes"
        price={13}
        tags={[]}
      />
      <MenuItem
        name="Roasted Chicken"
        description="and broccoli"
        price={12}
        tags={[]}
      />
      <MenuItem
        name="Pasta"
        description="penne with marinara, alfredo, or butter and parmesan"
        price={9}
        tags={[]}
      />
      <MenuItem
        name="Add Chicken"
        description=""
        price={5}
        tags={[]}
      />
      <MenuItem
        name="Add Broccoli"
        description=""
        price={4}
        tags={[]}
      />
      <MenuItem
        name="Add Peas"
        description=""
        price={3.5}
        tags={[]}
      />
      <MenuItem
        name="Add Mashed Potatoes"
        description="buttered"
        price={5}
        tags={[]}
      />
    </section>
  )
}

export default Kids;