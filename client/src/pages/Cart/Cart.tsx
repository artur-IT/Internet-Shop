import { useEffect, useState } from "react";
import type { CartItem as CartTypes } from '../../types'
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  const [cart, setCart] = useState<CartTypes[]>()
  const [summary, setSummary] = useState<number>(0)
  const [error, setError] = useState(false)

  const calculateSum = () => {
    const result = cart?.reduce((accu, currenValue) => accu + currenValue.totalPrice, 0)
    setSummary(Number(result))
  }

  const calculateProductPrice = (newQuantity: number, position: number) => {
    const temp = cart
    temp?.forEach((el: CartTypes, index: number) => {
      if (index === position) {
        el.quantity = newQuantity;
        el.totalPrice = el.price * el.quantity;
      }
    })
    setCart(temp)
    calculateSum()
  }

  const saveOrder = async () => {
    let finallyCart: {}[] = []
    cart?.forEach(el => el.quantity !== 0 ? finallyCart.push(el) : null)

    await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: finallyCart,
        cartValue: summary,
        orderDate: new Date().toLocaleString("pl-PL")
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Order not saved!");
        return res.json();
      })
      .catch((err) => console.log("Błąd zapisu do pliku historii zamówień ", err))
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/cart')
      .then((res) => {
        if (!res.ok) throw new Error("Cart is empty");
        return res.json();
      })
      .then(data => {
        let sum = 0
        data?.forEach((el: CartTypes) => {
          el.totalPrice = el.price * el.quantity;
          sum += el.totalPrice
          return el
        })
        setSummary(sum)
        setCart(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [])

  if (error) return <p>Nie ma produktów w koszyku. </p>;
  if (!error && !cart) return <p>Wczytywanie...</p>;

  return (
    <div>
      <h1>Koszyk</h1>
      {cart?.map((el: CartTypes, index: number) => {
        return (
          <CartItem
            key={index}
            index={index}
            name={el.productName}
            price={el.price}
            quantity={el.quantity}
            totalPrice={el.totalPrice}
            calculateProductPrice={calculateProductPrice} />
        )
      }
      )}
      <p>Razem: {summary} zł</p>
      <button disabled={summary ? false : true} onClick={saveOrder}>Zapłać</button>
    </div>
  );
}
