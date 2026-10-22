import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import Home from '../Home/Home'

export default function Category() {
  const { slug } = useParams();
  const [error, setError] = useState<boolean>(false);
  const [category, setCategory] = useState<{
    name: string;
    slug: string;
    products: {
      id: string;
      name: string;
      slug: string;
      description: string;
      price: number;
      image: string;
    }[];
  } | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/category/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Category not found');
        return res.json();
      })
      .then((data) => setCategory(data))
      .catch(err => { setError(true); console.log(err); })
  }, [slug]);

  if (error) return <NotFound info="Nie ma takiej kategorii." />;
  if (!category) return 'Loading...';

  return (
    <div>
      {/* <Home /> */}
      <p>Kategoria: {category.name}</p>
      <div>
        {category?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
