import { Link } from 'react-router-dom';
import styles from './productMenu.module.css';

type Props = {
  id: string[],
  catSlugs: string,
  catLink: string,
  subcatLink: string[],
  subcatSlugs: string[]
}

export default function ProductMenu({ id, catSlugs, catLink, subcatLink, subcatSlugs }: Props) {
  return (
    <li className={styles.menu__item}>
      <a href="#" className={styles.menu__link}>{catLink}</a>
      <ul className={styles.submenu}>
        {subcatLink.map((el: string, index: number) =>
          <li key={id[index]}><Link to={`/category/${catSlugs}/${subcatSlugs[index]}`} className={styles.submenu__link}>{el}</Link></li>
        )}
      </ul>
    </li>
  )
}
