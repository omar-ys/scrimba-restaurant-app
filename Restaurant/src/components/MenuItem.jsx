import '../styles/menuItem.css'

function MenuItem({ name, ingredients, price, emoji }) {
    return (
        <div className="menu-item">
            <span className="menu-item__emoji" aria-hidden="true">
                {emoji}
            </span>

            <div className="menu-item__details">
                <h3 className="menu-item__title">{name}</h3>
                <p className="menu-item__description">
                    {ingredients.join(", ")}
                </p>
                <p className="menu-item__price">${price}</p>
            </div>

            <button className="menu-item__button" aria-label={`Add ${name} to order`}>
                +
            </button>

        </div>
    )
}

export default MenuItem