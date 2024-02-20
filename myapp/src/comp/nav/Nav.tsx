"use client"
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuFries } from "react-icons/ci";
import React, { useEffect, useState, useRef } from 'react';
export default function Nav() {
    const [lastScroll , setLastScroll] = useState<number>(0);
    const nav = useRef<HTMLHeadElement | null>(null);
    const backToTop = useRef<HTMLDivElement | null>(null);
    const mobNav = useRef<HTMLUListElement| null>(null);
    
    useEffect(() => {
        const handleScroll = () => {
            const navBar = nav.current;
            const backTop = backToTop.current;
            const scrollNumber = window.scrollY;
            
            if (navBar && backTop) {
                if (scrollNumber < lastScroll) {
                    navBar.classList.add('STICKY_NAV');
                    backTop.classList.add('go_top_show');
                    
                } else {
                    navBar.classList.remove('STICKY_NAV');
                    backTop.classList.add('go_top_show');

                  

                }

                if(scrollNumber === 0)  {
                    navBar.classList.remove('STICKY_NAV');
                    backTop.classList.remove('go_top_show');

                    
                }
                setLastScroll(scrollNumber);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll]); // Dependency array to ensure useEffect runs only when lastScroll changes
    

    useEffect(() => {
        function removeNav() {
            const m  =mobNav.current;
            if(m) {
                
             m.style.transform = `translateX(${-20}rem)`;
            //  m.classList.add('show_nav');
            }
    
        }
        window.addEventListener('click', removeNav);
    
        return() => {
            window.removeEventListener('click', removeNav);
        }
    }, [])




    // Go top
    const goTop = () => {
        window.scrollTo(0,0);
    }

    const openNav = (e:React.MouseEvent<HTMLDivElement>) => {
        const m  =mobNav.current;
        if(m) {
            
         m.style.transform = `translateX(${0})`;
        //  m.classList.add('show_nav');
        }

        e.stopPropagation()
    }


 
    return (
        <>

        <div className="scrollTop" ref={backToTop}>
            <span onClick={goTop}>Top</span>
        </div>
        <header ref={nav}>

   
            <div className={styles.navs}>
                <div className={styles.all_navs}>
                    <div className={styles.logo}>
                        <Image src="/images/codehonslogo.png" alt='logo' width={60} height={60} className={styles.logoImage} priority quality={100}></Image>
                    </div>
                    <ul className={styles.navbars} ref={mobNav} onClick={(e) => e.stopPropagation()}>
                        <li className={styles.nav}><Link className={styles.nav_a} href="/">Home</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#contact">Contact</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#services">Services</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#about">About</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="/products">Products</Link></li>
                    </ul>

                    <div className={styles.open_CONTACT} onClick={openNav}>
                        <CiMenuFries />
                    </div>
                </div>
            </div>   
             </header>
        </>
    )
}