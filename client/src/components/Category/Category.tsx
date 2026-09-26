import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

export default function Category() {
  const { slug } = useParams();
  const [category, setCategory] = useState<{ name: string, slug: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/categories/${slug}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Category not found');
        }
        return res.text();
      })
      .then(res => JSON.parse(res))
      .then(data => {
        setCategory(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [slug]);

  if (error) return <div>backend says: {error}  <NotFound /></div>;
  if (!category) return <div>Loading...</div>;

  return (
    <div>
      <p>Kategoria: {category.name}</p>
      <p>Slug: {category.slug}</p>
    </ div>
  );
}
