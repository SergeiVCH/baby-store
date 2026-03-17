// import {useState, useEffect} from 'react'
// import type {Product} from '../data/products'

// export const useCart = () => {
//   const [cart, setCart] = useState<{product: Product; quantity: number}[]>(() =>
//     JSON.parse(localStorage.getItem('cart') || '[]'),
//   )

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }, [cart])

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const exist = prev.find((i) => i.product.id === product.id)
//       return exist
//         ? prev.map((i) =>
//             i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i,
//           )
//         : [...prev, {product, quantity: 1}]
//     })
//   }

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

//   return {cart, setCart, addToCart, cartCount}
// }
