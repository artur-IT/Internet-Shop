import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import type { Cart as CartType } from '../../../../server/prisma/types'
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const [cart, setCart] = useState<CartType[]>()
  const [cartPrices, setCartPrices] = useState<number[]>([])
  const [summary, setSummary] = useState<number>()
  const [error, setError] = useState(false)

  const calculateSum = (newPrices: number[]) => {
    const result = newPrices?.reduce((accu, currenValue) => accu + currenValue, 0)
    setSummary(result)
  }

  const saveOrder = async () => {
    await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: cart
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Order not saved!");
        return res.json();
      })
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/cart')
      .then((res) => {
        if (!res.ok) throw new Error("Cart is empty");
        return res.json();
      })
      .then(data => {
        console.log(data);
        setCart(data)
        const prices = data?.map((el: CartType) => el.price)
        setCartPrices(prices)
        setSummary(prices.reduce((accu: number, currenValue: number) => accu + currenValue, 0))
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [])

  if (error) return <NotFound info="Nie ma takiego produktu." />;
  if (!error && !cart) return <p>Wczytywanie...</p>;

  return (
    <div>
      <h1>Cart</h1>
      {cart?.map((el: CartType, index: number) => {
        return (
          <CartItem
            key={index}
            index={index}
            productName={el.productName}
            price={el.price}
            cartPrices={cartPrices}
            setCartPrices={setCartPrices}
            calculate={calculateSum} />
        )
      }
      )}
      <p>Razem: {summary} zł</p>
      <button disabled={summary ? false : true} onClick={saveOrder}>Zapłać</button>
    </div>
  );
}
