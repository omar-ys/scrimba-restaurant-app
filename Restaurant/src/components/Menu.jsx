import { menuArray } from "../data/menuData";
import MenuItem from "./MenuItem";

function Menu() {
    return (
        <section className="menu">
            <div className="menu__items">
                {menuArray.map((item) => (
                    <MenuItem
                        key={item.id}
                        name={item.name}
                        ingredients={item.ingredients}
                        price={item.price}
                        emoji={item.emoji}
                    />
                ))}
            </div>
        </section>
    )
}

export default Menu