import Image from 'next/image';
import Page from '@/comp/page/Page';
import Nav from '@/comp/nav/Nav';
import Services from '@/comp/services/Services';
import About from '@/comp/about/About';
import Contact from '@/comp/contact/Contact';
import Footer from '@/comp/footer/Footer';

export default function Home() {
  return (
    <>
      <div className="one">
        <Page />
      </div>

      <main>
        <Services />
        <About />
        <Contact />
      </main>

    </>

  )
}
