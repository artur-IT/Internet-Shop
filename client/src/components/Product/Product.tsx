type Props = {
  key: string
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }
}

export default function Product({ product }: Props) {

  return (
    <ul className='product' id={product.id}>
      <li>{product.name}</li>
      <li>{product.price} zł</li>
      <li>{product.image}</li>
      <li>{product.description}</li>
    </ul>
  );
}
