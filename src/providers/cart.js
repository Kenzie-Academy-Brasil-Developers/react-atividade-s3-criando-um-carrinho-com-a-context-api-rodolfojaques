import { createContext, useState } from 'react';

export const CartContext = createContext([])

export const CartProvider= ({children}) => {

    const [id,setId] = useState(0)
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        item.id = id
        setCart([...cart,item])
        setId(id + 1)
    }

    const removeFromCart = (item) => {

        const newCart = cart.filter(itemCart => itemCart.id !== item.id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider
        value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}