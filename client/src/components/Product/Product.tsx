import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

type ProductDetails = {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  stockStatus: string;
  description: string;
  sku: string;
};

export default function Product() {
  const { prodSlug } = useParams();
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/product/${prodSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data: ProductDetails) => setProduct(data))
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, [prodSlug]);

  if (error) return <NotFound info="Nie ma takiego produktu." />;
  if (!product) return 'Loading...';

  return (
    <ul className='product' id={product.id}>
      <li>{product.name}</li>
      <li>Cena: {product.price} zł</li>
      <li>Ilość: {product.stock} szt.</li>
      <li>{product.description}</li>
    </ul>
  );
}
