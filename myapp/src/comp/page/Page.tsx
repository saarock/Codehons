'use client'
import styles from './Page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from "typed.js";
import { MdSlowMotionVideo } from "react-icons/md";


export default function Page() {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Developer", "Computer Architucture Teacher", "Full Stack Developer", "Teacher"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.shadow}></div>
                <div className={styles.all_contain}>
                    <div className={styles.left}>
                        <div className={styles.top}>
                            <h1>HI, I AM AAYUSH! CREATIVE
                                <br />
                                <span className={styles.extra} ref={el}>
                                    SOFTWARE DEVELOPER


                                </span>
                            </h1>
                        </div>

                        <div className={styles.middle}>
                            <p>
                                I am m a passionate UI/UX designer with a mission to create delightful and intuitive digital
                                experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in
                                translating complex ideas into user-friendly interfaces that captivate and engage.
                            </p>
                        </div>

                        <div className={styles.bottom}>
                            <button className={styles.download_cv}>Download CV</button>
                            <Link href="#" className={styles.watch}>Watch the video <MdSlowMotionVideo /></Link>
                        </div>

                    </div>


                    <div className={styles.right}>
                        <div className={styles.img_me}>
                            <Image src="/images/a.gif" alt='myImage' height={200} width={200} className={styles.me}></Image>
                            {/* <Image src="/images/414919040_1159943758304254_13402246144835913_n.jpg" alt='myImage' height={200} width={200} className={styles.me}></Image> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}