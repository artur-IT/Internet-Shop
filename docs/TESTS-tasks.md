## 🧪 6. Testy – dokładne opisy

### 🔐 Testy backendu (Vitest)

- [ ] **Test dla `POST /api/auth/register`**:
  - Sprawdź, czy rejestracja działa poprawnie przy prawidłowych danych
  - Sprawdź, czy rejestracja z błędными danymi (np. nieprawidłowy email) zwraca błąd
  - Sprawdź, czy użytkownik jest zapisany w bazie danych

- **[ X ] Test dla `POST /api/auth/login`**:
  - Sprawdź, czy poprawne dane logowania zwracają token JWT
  - Sprawdź, czy niepoprawne dane logowania zwracają błąd
  - Sprawdź, czy token jest poprawny i można go użyć do autoryzacji

- [ ] **Test dla `GET /api/products`**:
  - Sprawdź, czy lista produktów jest zwracana poprawnie
  - Sprawdź, czy dane są z bazy danych

- [ ] **Test dla `GET /api/products/:slug`**:
  - Sprawdź, czy szczegółowy produkt jest zwracany poprawnie
  - Sprawdź, czy nieistniejący slug zwraca błąd 404

- [ ] **Test dla `GET /api/category`**:
  - Sprawdź, czy lista kategorii jest zwracana poprawnie

- [ ] **Test dla `GET /api/category/:slug`**:
  - Sprawdź, czy produkty z danej kategorii są zwracane poprawnie
  - Sprawdź, czy nieistniejąca kategoria zwraca błąd

- [ X ] **Test dla `GET /api/health`**:
  - Sprawdź, czy endpoint zwraca status 200 i poprawną wiadomość

### 🧪 Testy UI (React Testing Library)

- [ ] **Test komponentu `ProductCard`**:
  - Sprawdź, czy produkt jest wyświetlany z poprawnymi danymi (nazwa, cena, obrazek)

- [ ] **Test komponentu `Navbar`**:
  - Sprawdź, czy linki są widoczne i działają (np. do logowania, koszyka)
  - Sprawdź, czy po zalogowaniu zmienia się widok (np. pojawia się „Witaj, Jan”)

- [ ] **Test strony `Login`**:
  - Sprawdź, czy formularz się wyświetla
  - Sprawdź, czy błędy walidacji są pokazywane

- [ ] **Test strony `Register`**:
  - Sprawdź, czy formularz rejestracji działa poprawnie
  - Sprawdź, czy błędy są obsługiwane (np. nieprawidłowy email)

- [ ] **Test komponentu `Cart`**:
  - Sprawdź, czy produkty są dodawane do koszyka
  - Sprawdź, czy koszyk się wyświetla poprawnie

---

## 🧠 Dlaczego taka kolejność jest ważna?

1. **Tworzenie testów od razu po funkcjonalności**:
   - Zmniejsza ryzyko błędów i ułatwia debugowanie

2. **Backend jako podstawa frontendu**:
   - Frontend opiera się na backendzie – najpierw backend, potem frontend
   - Testy backendu zapewniają, że API działa poprawnie

3. **Testy UI jako końcowe sprawdzenie**:
   - Testy UI sprawdzają, czy wszystko wygląda i działa jak powinno w przeglądarce
   - Są testowane tylko po zakończeniu funkcjonalności

4. **Logiczna kolejność rozwoju projektu**:
   - Zaczynamy od podstaw (konfiguracja, baza danych)
   - Potem budujemy API (backend)
   - Następnie frontend – interfejs użytkownika
   - Na końcu testy i wizualizacja

---
