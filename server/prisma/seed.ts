// Fake "database" – later replace with Prisma
export const categories = [
  {
    id: 1,
    name: 'Monitory',
    slug: 'monitors',
    products: [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Gigabyte' },
      { id: 3, name: 'LG' },
    ],
  },
  { id: 2, name: 'Laptopy', slug: 'laptops' },
  { id: 3, name: 'Smartfony', slug: 'smartphones' },
  {
    id: 4,
    name: 'Gry',
    slug: 'games',
    category: [
      { id: 1, name: 'RPG' },
      { id: 2, name: 'FPS' },
      { id: 3, name: 'Horror' },
    ],
  },
];
