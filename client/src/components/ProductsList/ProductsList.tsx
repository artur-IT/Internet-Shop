import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

type Subcategory = {
  name: string;
  products: {
    id: string;
    name: string;
  }[];
};

export default function ProductsList() {
  const { categorySlug, subSlug } = useParams();
  const [error, setError] = useState<boolean>(false);
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);

  const productsList = () => subcategory?.products?.map(el => <li key={el.id}><Link to={`/category/${categorySlug}/${subSlug}/${el.id}`} key={el.id}>{el.name}</Link></li>)

  useEffect(() => {
    if (!categorySlug || !subSlug) return;

    fetch(`http://localhost:3001/api/category/${categorySlug}/${subSlug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Category not found');
        return res.json();
      })
      .then((data: Subcategory) => setSubcategory(data))
      .catch(err => { setError(true); console.log(err); })
  }, [categorySlug, subSlug]
  )

  if (error) return <p>Błąd: {error}</p>;
  if (!error && !subcategory) return <p>Wczytywanie...</p>;

  return (
    <div className="product_list">
      <h1>{subcategory?.name}</h1>
      <ul>
        {productsList()}
      </ul>
    </div>
  )
}
