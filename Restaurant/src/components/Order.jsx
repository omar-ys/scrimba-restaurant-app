import '../styles/order.css'

function Order({ items, removeFromOrder }) {

    const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

    return (
        <section className="order">
            <h3 className="order__heading">Your order</h3>

            <ul className='order__list'>

                {items.map((orderItem, index) => (
                    <li className="order__item" key={index}>
                        <div>
                            <span className="order__title">{orderItem.name}</span>
                            <button className="order__remove-btn" onClick={() => removeFromOrder(index)}>remove</button>
                        </div>
                        <p className="order__price">${orderItem.price}</p>
                    </li>
                ))}

            </ul>


            <hr className="order__divider" />

            <div className="order__total">
                <span className="order__total-label">Total price:</span>
                <span className="order__price">${totalPrice}</span>
            </div>

            <button className="order__submint-btn">Complete order</button>


        </section>
    )
}

export default Order