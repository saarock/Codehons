import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuFries } from "react-icons/ci";
export default function Nav() {
    return (
        <>
            <div className={styles.navs}>
                <div className={styles.all_navs}>
                    <div className={styles.logo}>
                        <Image src="/images/codehons-high-resolution-logo.png" alt='logo' width={60} height={60}></Image>
                    </div>
                    <ul className={styles.navbars}>
                        <li className={styles.nav}><Link className={styles.nav_a} href="/">Home</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#contact">Contact</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#services">Services</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="#about">About</Link></li>
                        <li className={styles.nav}><Link className={styles.nav_a} href="/products">Products</Link></li>
                    </ul>

                    <div className={styles.open_CONTACT}>
                        <CiMenuFries />
                    </div>
                </div>
            </div>
        </>
    )
}