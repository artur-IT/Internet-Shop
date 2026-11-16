# Architecture Decision Record

### Dlaczego pewne koncepcje zostały przyjęte lub odrzucone żeby za rok każdy wiedział, dlaczego system wygląda tak, a nie inaczej.

Opisuje konkretne wybory dotyczące architektury systemu, ich kontekst, uzasadnienie oraz potencjalne konsekwencje. **Służy tylko do opisywania decyzji, które mają duży wpływ na architekturę, rozwój lub bezpieczeństwo aplikacji, a ich zmiana w przyszłości byłaby kosztowna.**

### Po co tworzy się ADR?

• **Unikanie powracania do tych samych dyskusji**: Zapobiega sytuacji, w której ktoś po roku pyta: „Czemu używamy tej bazy danych, a nie innej?”.

• **Transparentność**: Pokazuje nie tylko samą decyzję, ale też odrzucone alternatywy.

• **Łatwiejszy onboarding**: Nowi członkowie zespołu mogą szybko zrozumieć historię i ewolucję architektury systemu.

• **Prostota**: To nie jest wielotomowa, martwa dokumentacja w Wordzie. ADR to zazwyczaj prosty plik tekstowy trzymany w tym samym repozytorium kodu co aplikacja i weryfikowany przez pull request / code review.

---

### 1. Tytuł – krótki, jednoznaczny opis decyzji (_np. ADR-005: Wybór bazy danych PostgreSQL_).

### 2. Kontekst – jaki problem próbujemy rozwiązać i w jakich warunkach działamy.

### 3. Decyzja – jasne przedstawienie wybranego rozwiązania.

### 4. Uzasadnienie – wyjaśnienie wyboru oraz rozważane alternatywy.

### 5. Konsekwencje – jakie są plusy i minusy tego wyboru, co dzięki temu zyskujemy, a co tracimy lub komplikujemy.
