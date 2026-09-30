import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [categoryList, setCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/category`)
      .then((res) => {
        if (!res.ok) throw new Error('Category not found');
        return res.text();
      })
      .then((res) => JSON.parse(res))
      .then((data) => setCategory(data))
  }, []);

  if (!categoryList) return null;

  return (
    <div>
      <h1>Home</h1>
      {categoryList.length !== 0 ? categoryList.map((item: any) =>
        <Link to={`/category/${item.slug}`} key={item.id}>
          {item.name}
        </Link>
      ) : <p>No categories found</p>}
    </div>
  );
}
