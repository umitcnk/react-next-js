import CartContext from "./cart-context"

const CartProvider = props => {

    const addItemToCard = (item) => {}
    const removeItemFromCard =(id) => {}

    const cartContext = {
        items:[],
        totalAmount:0,
        addItem:addItemToCard,
        removeItem: removeItemFromCard
    }

    return (<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>)
}
export default CartProvider