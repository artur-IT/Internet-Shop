
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <main>
        {isHome ? <p>Witaj na stronie sklepu komputerowego</p> : ""}
        <Outlet />  {/* render routing child from main.tsx */}
      </main>
      <Footer />
    </>
  );
}
