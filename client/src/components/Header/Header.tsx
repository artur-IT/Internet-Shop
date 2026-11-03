import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';

export default function Header() {
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

  if (!categoryList) return <p>Wczytywanie...</p>;
  if (categoryList.length === 0) return <p>Brak kategorii</p>;

  return (
    <header>
      <div>
        <Link to={'/cart'}>Koszyk</Link>
        <Link to={'/login'}>Zaloguj</Link>
        <Link to={'/contact'}>Kontakt</Link>
        <Link to={'/about'}>O nas</Link>
      </div>
      <h1>Home</h1>
      <div>
        {categoryList.map((item: any) =>
          <Link to={`/category/${item.slug}`} key={item.id}>
            {item.name}
          </Link>
        )}
        <Search />
      </div>

    </header>
  )
}
