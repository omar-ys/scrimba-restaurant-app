import '../styles/orderState.css'

function OrderState({ name }){
    return(
        <div className="order-state">
            <p className="order-state__content">Thanks, {name}! Your order is on its way!</p>
        </div>
    )
}

export default OrderState