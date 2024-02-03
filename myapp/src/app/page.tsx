"use client"
import Image from 'next/image';
import Page from '@/comp/page/Page';
import Services from '@/comp/services/Services';
import About from '@/comp/about/About';
import Contact from '@/comp/contact/Contact';
import { useEffect, useState } from 'react';
;
export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {

    const handleMouseMove = (e: any) => {

      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])



  return (
    <>
      <div
        className={'light-spot'}
        style={{
          top: `${cursorPosition.y - 25}px`,
          left: `${cursorPosition.x - 25}px`,
        }}
      />
      <div className="one">
        <Page />
      </div>

      <main>
        <Services />
        <About />
        <Contact />
        <div className="what">

        </div>
      </main>

    </>

  )
}
