import { useState } from "react"

type Props = {
  index: number,
  productName: string,
  price: number,
  cartPrices: number[],
  setCartPrices: (e: number[]) => void,
  calculate: (e: number[]) => void
}

export default function CartItem({ index, productName, price, cartPrices, setCartPrices, calculate }: Props) {
  const [amount, setAmount] = useState(1)

  const handlePrice = (value: string) => {
    const newAmount = Number(value)
    setAmount(newAmount)

    const newPrices = [...cartPrices]
    newPrices[index] = newAmount * price
    setCartPrices(newPrices)
    calculate(newPrices)
  }

  return (
    <ul className='cart'>
      <li>{productName}</li>
      <li>Wartość: {price} zł</li>
      <li>Ilość: </li>
      <input type="number" min="0" max="5" defaultValue={amount} onChange={(e) => handlePrice(e.target.value)}></input> szt.
      <li>Cena: {price * amount} zł</li>
    </ul>
  )
}
