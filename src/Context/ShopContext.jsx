import { createContext, useMemo, useState } from "react";
import { arrivalsData, beastDealsData, beastSaleData, hotDealsData, organicData, recommendData, shortProductData } from "../Data/data";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);
export default function ShopContextProvider({ children }) {
      // products
      const [products, setProducts] = useState([...beastDealsData, ...recommendData, ...hotDealsData, ...arrivalsData, ...beastSaleData, ...organicData, ...shortProductData])
      // cart
      const [cart, setCart] = useState([]);
      // ✅ Correct — strip $ then multiply price × amount
      const total = useMemo(() => {
            return cart.reduce((acc, item) => {
                  const price = parseFloat(item.price.replace('$', '')) || 0
                  return acc + price * item.amount
            }, 0)
      }, [cart])
      // quantity
      const quantity = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.amount, 0);
      }, [cart])
      // addToCart
      const addToCart = (products) => {
            toast.success("Added to cart!")
            setCart((prev) => {
                  const exist = prev.find((item) => item.id === products.id);
                  if (exist) {
                        return prev.map((item) => item.id === products.id ? { ...item, amount: item.amount + 1 } : item)
                  }
                  return [...prev, { ...products, amount: 1 }]
            })
      }
      // removeFromCart
      const removeFromCart = (id) => {
            setCart((prev) => prev.filter((item) => item.id !== id))
            toast.success("Removed from cart!")
      }
      // clearCart
      const clearCart = () => {
            setCart([]);
            toast.success("Cart cleared!")
      }
      // incraseQuantity
      const incraseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item))
      }
      // decraseQuantity
      const decraseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.amount - 1 } : item).filter((item) => item.amount > 0))
      }
      // likceCart
      const [likeCart, setLikeCart] = useState([]);
      // likequantity
      const likequantity = useMemo(() => {
            return likeCart.length;
      }, [likeCart])
      // toggleLike
      const toggleLike = (products) => {
            const cartItem = likeCart.find((item) => item.id === products.id);
            if (cartItem) {
                  toast.success("removed FROM LIKE!")
            } else {
                  toast.success("added to LIKE!")
            }
            setLikeCart((prev) => {
                  const exist = prev.find((item) => item.id === products.id);
                  if (exist) {
                        return prev.filter((item) => item.id !== products.id)
                  }
                  return [...prev, products]
            })
      }
      // removeFromLikeCart
      const removeFromLikeCart = (id) => {
            setLikeCart((prev) => prev.filter((item) => item.id !== id))
           toast.success("Removed to like")
      }
      // fillterProducts
      const [search, setSearch] = useState('')
      const fillterProducts = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      return (
            <ShopContext.Provider value={{
                  products, setProducts,
                  cart, setCart,
                  total,
                  quantity,
                  addToCart,
                  incraseQuantity,
                  removeFromCart,
                  clearCart,
                  decraseQuantity,
                  likeCart, setLikeCart,
                  likequantity,
                  toggleLike,
                  removeFromLikeCart, 
                  search, setSearch, fillterProducts
            }}>
                  {children}
            </ShopContext.Provider>
      )
}