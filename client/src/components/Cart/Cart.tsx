import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import type { Cart as CartType } from '../../../../server/prisma/types'

export default function Cart() {
  const [cart, setCart] = useState<CartType[]>()
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/api/cart')
      .then((res) => {
        if (!res.ok) throw new Error("Cart is empty");
        return res.json();
      })
      .then(data => setCart(data))
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
        return (<ul className='cart' key={index}>
          <li>{el?.productName}</li>
          <li>Cena: {el?.price} zł</li>
          <li>Ilość: {el?.amount} szt.</li>
        </ul>)
      }
      )}
    </div>
  );
}
