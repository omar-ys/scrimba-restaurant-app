import { menuArray } from "../data/menuData";
import MenuItem from "./MenuItem";

function Menu({ addToOrder }) {
    return (
        <section className="menu">
            <div className="menu__items">
                {menuArray.map(item => (
                    <MenuItem key={item.id} item={item} addToOrder={() => addToOrder(item)}/>
                ))}
            </div>
        </section>
    )
}

export default Menu