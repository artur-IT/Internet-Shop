import { useEffect, useState } from "react"
import NotFound from "../../components/NotFound";

type OrderItem = {
  productName: string,
  price: number,
  quantity: number,
}

type Order = {
  id: string,
  items: OrderItem[]
}

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState<Order[]>([])
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/order-history')
      .then((res) => {
        if (!res.ok) throw new Error('Order History not found');
        return res.json();
      })
      .then(data => setOrderHistory(data))
      .catch(err => { setError(true); console.log(err); })
  }, [])

  if (error) return <NotFound info="Brak historii zamówień." />;
  if (!error && orderHistory.length === 0) return <p>Wczytywanie...</p>;

  return (
    <div className='category'>
      <h1>Historia Zamówień</h1>
      {orderHistory.map((order: Order) => (
        <div key={order.id} className="order">
          <h4>Numer zamówienia: {order.id}</h4>
          <ul className='order-history'>
            {order.items.map((item: OrderItem, index: number) => (
              <li key={index}>
                <p>{item.productName}</p>
                <p>Ilość: {item.quantity} szt.</p>
                <p>Cena: {item.price} zł</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
