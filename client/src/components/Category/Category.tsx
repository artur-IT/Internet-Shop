import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';

export default function Category() {
  const { slug } = useParams();
  const [category, setCategory] = useState<{
    name: string;
    slug: string;
  } | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/category/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Category not found');
        return res.text();
      })
      .then((res) => JSON.parse(res))
      .then((data) => { setCategory(data) })
  }, [slug]);

  if (!category) return <NotFound info="Nie ma takiej kategorii." />;

  return (
    <div>
      <p>Kategoria: {category.name}</p>
    </div>
  );
}
