
## DESIGN and HOME PAGE STRUCTURE

Strona główna będzie wyglądała w następujący sposób, zaczynając od góry:

1. Pierwszy wiersz zawiera:

- logo,
- pasek wyszukiwania
- oraz ikony logowania, kontaktu i koszyka.

2. Drugi wiersz zawiera automatyczny slider z możliwością ręcznego przewijania zdjęć. Slider zawiera zdjęcia produktów wraz z krótkimi opisami, które są jednocześnie odnośnikiem do danego produktu. Slider zawiera sekcje:

- "Nowości",
- "Promocje",
- "Wyprzedaż",
- "Hit miesiąca",
  Na dole slidera są też zakładki z tymi sekcjami, które można też kliknąć aby od razu wyświetlić dany produkt na sliderze.

3. Trzeci wiersz zawiera menu nawigacyjne zawierające:

- "Laptopy i komputery",
- "Monitory",
- "Sprzęt PC",
- "Gry",
- "Smartfony i smartwatche",
- "Promocje",
- "Wyprzedaż",

Każda sekcja zawiera rozwijane menu zawierające przykładowe podkategorie, które są jednocześnie odnośnikami do danej kategori w sklepie.

4. Czwarty wiersz zawiera "Promocja dnia". Szczegóły tej sekcji są w MVP poniżej.

5. Piąty wiersz zawiera sekcję "Doradzamy" zawierającą 4 kafelki z poradami. Kafelek zawiera zdjęcie, datę dodania artykułu i krótki opis. Tematy w kafelkach to:

- "Jak wybrać laptop",
- "Dobierz monitor do swoich zajęć",
- "Smartfon na każdą kieszeń",
- "Szybkie gry na przerwę w pracy",

6. Szósty wiersz zawiera dwie kolumny. W lewej kolumnie znajduje się krótki opis sklepu, a w prawej jego zdjęcie.

7. Siódmy wiersz to mapa strony zawierająca 4 kolumny:

- "Obsługa klienta",
  - "Płatności i dostawy",
  - "Polityka prywatności",
  - "Warunki korzystania z serwisu",
- "Informacje"
  - "O nas",
  - "Kontakt",
  - "Blog",
  - "Polityka prywatności",
  - "Warunki korzystania z serwisu",
- "Sklep"
  - adres sklepu,
  - telefon,
  - email,
  - godziny otwarcia,
  - sposoby płatności,
  - sposoby dostawy,
- "Masz pytania?:
  - "Telefon",
  - "Email",
  - "Chat",
  - "Formularz kontaktowy",
  - Social media: Facebook, Twitter, YouTube.

8. Ósmy wiersz zawiera krótką informacje typu "Copyright 2026 Sklep Internetowy "CompiX" Sp. z o.o. Wszelkie prawa zastrzeżone.".

---

### **MVP**

1. **Header** (logo, szukaj, ikony) - Komponent + React Router Link

2. **Slider** (4 zakładki) - Komponent UI; produkty z API lub seed

3. **Menu rozwijane** - Komponent UI; statyczna lista podkategorii → linki /category/:slug

4. **Promocja dnia** + 8 produktów - Lewa: 1 produkt z API; prawa: GET /products?limit=8
   - **Lewa**: 1 produkt z API;
   - **Prawa**: 8 produktów z API; prawa: GET /products?limit=8

5. **Doradzamy** (4 kafelki) - Statyczne dane w tablicy JS (bez backendu)

6. **Opis sklepu** + zdjęcie - Statyczna sekcja - Linki React Router → strony statyczne

7. **Mapa strony** (4 kolumny) - Linki React Router → strony statyczne

8. **Copyright** - Statyczny footer - Linki React Router → strony statyczne

9. **Koszyk**

- React Context + localStorage

- Brak tabeli Cart w bazie

- Ikona koszyka i strona /koszyk działają lokalnie

**Strony poza MVP** - placeholdery wystarczą
