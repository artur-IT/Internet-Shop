import { Link } from 'react-router-dom';
import { categories } from '../../../../server/prisma/seed';

export default function Home() {
  const categoryList = categories.map((item) => (
    <Link to={`/category/${item.slug}`} key={item.id}>
      {item.name}
    </Link>
  ));
  return (
    <div>
      <h1>Home</h1>
      <ul>{categoryList}</ul>
    </div>
  );
}
