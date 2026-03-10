import '../styles/order.css'

function Order() {
    return (
        <section className="order">
            <h3 className="order__heading">Your order</h3>

            <ul className='order__list'>
                <li className="order__item">
                    <div>
                        <span className="order__title">Pizza</span>
                        <button className="order__remove-btn">remove</button>
                    </div>
                    <p className="order__price">$14</p>
                </li>
            </ul>


            <hr className="order__divider" />

            <div className="order__total">
                <span className="order__total-label">Total price:</span>
                <span className="order__price">$26</span>
            </div>

            <button className="order__submint-btn">Complete order</button>
            

        </section>
    )
}

export default Order