import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      .then(data => {
        setCategory({ name: data, slug: slug || '' });
      })
      .catch(err => {
        setError(err.message);
      });
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Kategoria: {category.name}</div>
      <div>Slug: {category.slug}</div>
    </>
  );
}
