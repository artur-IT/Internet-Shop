type Props = {
  index: number,
  name: string,
  price: number,
  quantity: number,
  totalPrice: number
  calculateProductPrice: (a: number, b: number) => void
}

export default function CartItem({ index, name, price, quantity, totalPrice, calculateProductPrice }: Props) {
  const handlePrice = (value: string) => {
    const newQuantity = Number(value)
    calculateProductPrice(newQuantity, index)
  }

  return (
    <ul className='cart'>
      <li>{name}</li>
      <li>Wartość: {price} zł</li>
      <li>Ilość: </li>
      <input
        type="number"
        min="0"
        max="5"
        defaultValue={quantity}
        onChange={(e) => handlePrice(e.target.value)}
      ></input> szt.
      <li>Cena: {totalPrice} zł</li>
    </ul>
  )
}

