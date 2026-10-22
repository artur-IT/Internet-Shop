
import Main from '../Main/Main'
import About from '../About/About'
import Header from "../Header/Header"
import Footer from '../Footer/Footer';

export default function Home() {

  return (
    <div>
      <Header />

      <main>
        <Main>
          <About />

        </Main>
      </main>
      <Footer />
    </div>
  );
}
