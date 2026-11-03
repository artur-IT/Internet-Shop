import { useState } from 'react';
import { categories } from '../../../../server/prisma/seed2';
import { Link } from 'react-router-dom';

type ProductDetails = {
  id: string
  name: string
  category: string
  subCategory: string
}

export default function Search() {
  const [word, setWord] = useState('');
  const filtered: ProductDetails[] = []

  for (let el of categories) {
    for (let item of el.subcategories) {
      for (let prod of item.products) {
        filtered.push({ category: el.slug, subCategory: item.slug, id: prod.id, name: prod.name })
      }
    }
  }

  const result = filtered.filter(el => el.name.toLowerCase().includes(word.toLowerCase()))

  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Szukaj" className="search_input" value={word} onChange={(e) => setWord(e.target.value)} />
      </form>
      <div className='filtered_products' style={{ display: `${word ? 'flex' : 'none'}` }}>
        {word ? result.map(el =>
          <Link to={`/category/${el.category}/${el.subCategory}/${el.id}`} key={el.id} onClick={() => setWord('')}>
            {el.name}
          </Link>) : ""}
      </div>
    </div>
  )
}
