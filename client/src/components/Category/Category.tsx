import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import Product from '../Product/Product';

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
    <div className='category'>
      <div>
        <p>Kategoria: {category.name}</p>
      </div>
      <div className='products_list'>
        {category?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
