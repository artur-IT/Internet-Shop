### PROJECT DESCRIPTION

Chcę stworzyć sklep internetowy "CompiX" z akcesoriami komputerowymi podobny do tego, jak wygląda sklep [komputronik.pl](https://komputronik.pl/).
Sklep służy tylko jako projekt do mojego portfolio, nie ma tu potrzeby implementacji prawdziwych płatności, blogów z artykułami itp. Wszystkie dane są mockowane. Sklep ma posiadać proste zakładanie w bazie danych nowego konta kupującego oraz logowanie i wylogowanie. Bez opcji resetowania hasła.
Użytkownik może dodawać produkty do koszyka. Koszyk jest przechowywany w localStorage. Po zalogowaniu użytownik może kupić zawartość koszyka a historia jego zakupów jest zapisywana w bazie danych.
Użytkownik może też wyszukiwać produkty w całym sklepie. Znalezione produkty może sortować wg nazw lub ceny.
Strona będzie dostosowana do różnych urządzeń, od desktopu po tablet i telefon. Strona powinna być responsywna i dostosowana do różnych rozmiarów ekranów.

Full specifications of the home page and MVP are in [homepage_spec.md](docs/homepage_spec.md)

### TECH STACK

Monorepo with: `client/` = (Vite + React 19 + TypeScript + Biome) and `server/` = (Express + TypeScript)

- **Frontend**: Vite, React 19.2, TypeScript 5.7, React Router 7
- **Backend**: Node.js, Express, TypeScript 5.7, cors, dotenv, bcrypt, jsonwebtoken
- **Styling**: CSS modules + global.css
- **Forms**: React Hook Form (built-in validation)
- **Database**: PostgreSQL + Prisma (minimal schema + seed)
- **Data**: TanStack Query (only GET products/categories)
- **Testing**: Vitest - Unit tests for key components, React Testing Library - UI tests for components
- **State Management**: React Context
- **Authentication**: bcrypt + JWT in localStorage (simplified)
- **Hosting**: now Local only, later Vercel
- **Package manager**: pnpm
- **Linter**: ESLnt
- **Formatter**: Prettier

---

### FOLDERS STRUCTURE

- `client/` - frontend
- `server/` - backend

- `client/src/components`,
- `client/src/pages`,
- `client/src/hooks`,
- `client/src/lib`,
- `client/src/context`

- `server/src/routes`,
- `server/src/controllers`,
- `server/src/middleware`,
- `server/src/prisma`

### OUT OF SCOPE FEATURES

- password reset
- blog with articles
- real payments

---

### BACKEND (learning priority)

- middleware with Express in `server/src/middleware` for check JWT token and errors handling
- Prisma schema in `server/src/prisma`
- database connection in `server/src/db.ts` exports a single shared PrismaClient instance for all modules
- error handling in `server/src/errors.ts`
- hand validation in `server/src/validation.ts`

- GET /api/health
- GET /api/categories,
- GET /api/categories/:slug
- GET /api/products,
- GET /api/products/:slug
- GET /api/search, GET /api/search?q=
- GET /api/cart,
- GET /api/orders,
- POST /api/orders,
- POST /api/auth/register,
- POST /api/auth/login

Seed: ~15–30 products in 5–7 categories

---

### SETUP

- run server: cd server && `pnpm dev`
- run client: cd client && `pnpm dev`
- install dependencies: `pnpm install`
- run Biome: `pnpm biome check`
- run Biome with fix: `pnpm biome check --write .`

---

### CODING PRACTICES

#### Guidelines for clean code

- If adding new functionality, suggest for me which tests should I write.
- Use feedback from linters to improve the code when making changes.
- Prioritize error handling and edge cases.
- Handle errors and edge cases at the beginning of functions.
- Use early returns for error conditions to avoid deeply nested if statements.
- Place the happy path last in the function for improved readability.
- Avoid unnecessary else statements; use if-return pattern instead.
- Use guard clauses to handle preconditions and invalid states early.
- Implement proper error logging and user-friendly error messages.
- Do not create files in folders that are not in the structure (see AGENTS.md).
- Always add short comment to new code sections if function is not very simple and obvious and not self-explanatory.
- Suggest two or three ways to solve the problem and briefly explain why you chose the solution you did.

#### Coding conventions

- **Imports:** Use absolute paths (e.g. `@/components`, `@/lib`) instead of relative (`../components`).
- **Async:** Prefer `async/await`.
- **Code size:** Generate minimal length code.
- **Implementation order:** Prefer this order of implementation solutions: HTML5 → JavaScript → React when applicable.
- **Libraries:** Do not add libraries without permission.
- **Database Prisma schema**: User, Product, Category, Order

#### No time estimates

- **NEVER** provide time estimates (e.g. "30 min", "2h") and weeks.
- Time estimates are imprecise and misleading.
- Instead, focus on outlining the steps to complete, not the expected duration.
