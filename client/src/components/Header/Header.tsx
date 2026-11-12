import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import styles from '../ProductMenu/ProductMenu.module.css';
import ProductMenu from '../ProductMenu/ProductMenu';
import React from 'react';
import type { Category } from '../../types'


export default function Header() {
  const [categoryList, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/category`)
      .then((res) => {
        if (!res.ok) throw new Error('Category not found');
        return res.text();
      })
      .then((res) => JSON.parse(res))
      .then((data) => setCategory(data))
  }, []);

  function generateCategoriesFromProducts() {
    const categoryMap = new Map<string, {
      id: string[],
      name: string;
      catSlug: string;
      subcatSlugs: string[],
      subcategories: string[]
    }>();

    categoryList.forEach(product => {
      const subcatId = product.subcategories.map(el => el.id);
      const categoryName = product.name;
      const catSlugs = product.slug
      const subcatSlugs = product.subcategories.map(el => el.slug);
      const subcategoryName = product.subcategories.map(el => el.name);

      if (!categoryMap.has(categoryName)) {
        categoryMap.set(categoryName, {
          id: subcatId,
          name: categoryName,
          catSlug: catSlugs,
          subcatSlugs: subcatSlugs,
          subcategories: []
        });
      }

      categoryMap.get(categoryName)!.subcategories.push(...subcategoryName);
    });

    return Array.from(categoryMap.values()).map(category => ({
      ...category,
      subcategories: Array.from(category.subcategories)
    }));
  }

  const catListTab = generateCategoriesFromProducts()

  let subcatId: string[] = []
  let catLink = ""
  let catSlugs = ""
  let subcatLink: string[] = []
  let subcatSlugsLink: string[] = []

  const getCategoriesNames = (data: any, menuIdx: number) => {
    subcatId = []
    catLink = ""
    catSlugs = ""
    subcatLink = []
    subcatSlugsLink = []
    catLink = data[menuIdx]?.name
    catSlugs = data[menuIdx]?.catSlug
    if (data[menuIdx]?.subcategories) {
      data[menuIdx].subcategories.forEach((el: string) => {
        subcatLink.push(el)
      })
      data[menuIdx].subcatSlugs.forEach((el: string) => {
        subcatSlugsLink.push(el)
      })
      data[menuIdx].id.forEach((el: string) => { subcatId.push(el) })
    }
  }

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

      <nav className={styles.menu} aria-label="Menu główne">
        <input type="checkbox" id="nav-toggle" className={styles.menu__toggle} />

        {/* Hamburger: clicking transfers focus to the checkbox */}
        <label htmlFor="nav-toggle" className={styles.menu__hamburger} aria-label="Otwórz menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className={styles.menu__list}>
          {categoryList.map((item: any, index: number) => {
            getCategoriesNames(catListTab, index);
            return (
              <React.Fragment key={crypto.randomUUID()}>
                <ProductMenu id={subcatId} catSlugs={catSlugs} subcatSlugs={subcatSlugsLink} catLink={catLink} subcatLink={subcatLink} />
              </React.Fragment>)
          }
          )}
          <Search />
        </ul>
      </nav>
    </header>
  )
}

