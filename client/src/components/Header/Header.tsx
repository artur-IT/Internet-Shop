import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Search from '../Search/Search';
import styles from '../ProductMenu/ProductMenu.module.css';
import ProductMenu from '../ProductMenu/ProductMenu';
import type { Category } from '../../types'

export default function Header() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/category`);
        if (!response.ok) throw new Error('Error retrieving categories');

        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const prepareCategoryData = () => {
    const categoryMap = new Map<string, {
      id: string[],
      name: string;
      catSlug: string;
      subcatSlugs: string[],
      subcategories: string[]
    }>();

    categories.forEach(category => {
      if (!category.subcategories) return;
      const subcatId = category.subcategories.map(el => el.id);
      const categoryName = category.name;
      const catSlugs = category.slug;
      const subcatSlugs = category.subcategories.map(el => el.slug);
      const subcategoryName = category.subcategories.map(el => el.name);

      if (!categoryMap.has(categoryName)) {
        categoryMap.set(categoryName, {
          id: subcatId,
          name: categoryName,
          catSlug: catSlugs,
          subcatSlugs: subcatSlugs,
          subcategories: []
        });
      }

      const existingCategory = categoryMap.get(categoryName)!;
      existingCategory.subcategories.push(...subcategoryName);
    });

    return Array.from(categoryMap.values()).map(category => ({
      ...category,
      subcategories: Array.from(new Set(category.subcategories)) // We remove duplicates using Set()
    }));
  };

  if (loading) return <p>Wczytywanie...</p>;
  if (error) return <p>Błąd: {error}</p>;
  if (categories.length === 0) return <p>Brak kategorii</p>;

  const preparedCategories = prepareCategoryData();
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
          {preparedCategories.map((category, index) => (
            <ProductMenu
              key={index}
              id={category.id}
              catSlugs={category.catSlug}
              subcatSlugs={category.subcatSlugs}
              catLink={category.name}
              subcatLink={category.subcategories}
            />
          ))}
          <Search />
        </ul>
      </nav>
    </header>
  );
}

