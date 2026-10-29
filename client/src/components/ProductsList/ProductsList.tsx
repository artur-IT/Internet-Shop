import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

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

  return (
    <>
      <h1>{subcategory?.name}</h1>
      {!error ? subcategory?.products?.map(el => <p key={el.id}>{el.name}</p>) : <p>{error}</p>}
    </>
  )
}
