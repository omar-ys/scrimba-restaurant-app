import '../styles/checkout.css'

function Checkout({closeCheckout}){

    function handleOverlayClick(e) {
        e.target === e.currentTarget && closeCheckout()
    }

    return(
        <div className="checkout-overlay" onClick={handleOverlayClick}> 
            <div className="checkout">
                <h3 className="checkout__title">Enter card details</h3>
                <form className="checkout__form">
                    <input type="text" className="checkout__input" placeholder="Enter your name" required />
                    <input type="text" inputMode="numeric" className="checkout__input" placeholder="Enter card number" maxLength="16" required />
                    <input type="password" inputMode="numeric" className="checkout__input" placeholder="Enter CVV" maxLength="3" required />
                    <button type="submit" className="checkout__submit-btn">Pay</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout