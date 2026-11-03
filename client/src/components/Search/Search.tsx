import { useState } from 'react';
import { Link } from 'react-router-dom';

type ProductDetails = {
  id: string
  name: string
  categorySlug: string
  subCategorySlug: string
}

export default function Search() {
  const [word, setWord] = useState('');
  const [result, setResult] = useState<ProductDetails[]>([])

  const handleInput = (phrase: string) => {
    setWord(phrase)
    fetch(`http://localhost:3001/api/search?q=${encodeURIComponent(phrase)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Products not found');
        return res.json()
      })
      .then((res: ProductDetails[]) => setResult(res))
  }

  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Szukaj" className="search_input" value={word} onChange={(e) => handleInput(e.target.value)} />
      </form>
      <div className='filtered_products' style={{ display: `${word ? 'flex' : 'none'}` }}>
        {word ? result?.map(el =>
          <Link to={`/category/${el.categorySlug}/${el.subCategorySlug}/${el.id}`} key={el.id} onClick={() => setWord('')}>
            {el.name}
          </Link>) : ""}
      </div>
    </div>
  )
}
