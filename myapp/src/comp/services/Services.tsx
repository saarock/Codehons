"use client"
import styles from './Services.module.css';
import Image from 'next/image';
import { BsBackpack2Fill } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";
import React, { useRef, useEffect, useState } from 'react';
import Theme from '../wordpress_theme/Theme';
export default function Services() {
    const [hoverDirection, setHoverDirection] = useState<string>('');

    const first = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element) {
            // Check if the clicked element is the parent element (styles.rule)
            if (element.classList.contains(styles.rule)) {
                element.classList.toggle(styles.short);
            } else {

                // Toggle the class on the parent only if the clicked element is not a child
                const parentElement = element.closest(`.${styles.rule}`);
                if (parentElement) {
                    parentElement.classList.toggle(styles.short);
                }

            }

        }
    }

    const second = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element) {
            // Check if the clicked element is the parent element (styles.rule)
            if (element.classList.contains(styles.rule)) {
                element.classList.toggle(styles.short);
            } else {

                // Toggle the class on the parent only if the clicked element is not a child
                const parentElement = element.closest(`.${styles.rule}`);
                if (parentElement) {
                    parentElement.classList.toggle(styles.short);
                }

            }

        }
    }


    const third = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;
        if (element) {
            // Check if the clicked element is the parent element (styles.rule)
            if (element.classList.contains(styles.rule)) {
                element.classList.toggle(styles.short);
            } else {

                // Toggle the class on the parent only if the clicked element is not a child
                const parentElement = element.closest(`.${styles.rule}`);
                if (parentElement) {
                    parentElement.classList.toggle(styles.short);
                }

            }


        }
    }


    const div1 = (e: React.MouseEvent<HTMLDivElement>) => {

        const { clientX, clientY } = e;
        const target = e.currentTarget;
        const { left, top, width, height } = target.getBoundingClientRect();
        const offsetX = clientX - left - width / 2;
        const offsetY = clientY - top - height / 2;

        let direction = '';

        if (Math.abs(offsetX) > Math.abs(offsetY)) {
            direction = offsetX > 0 ? 'right__' : 'left__';
        } else {
            direction = offsetY > 0 ? 'bottom__' : 'top__';
        }

        setHoverDirection(direction);
    }



    // after click 
    const goToYoutube = () => {
        alert('Done')
    }

    // Empty dependency array ensures that the effect runs only once, similar to componentDidMount
    return (
        <>
            <div className={styles.services} id="services">
                <div className={styles.all_services}>

                    <div id="mid">


                        <div className={styles.top}>
                            <h3>MY SERIVCE</h3>
                        </div>

                        <div className={styles.middle}>
                            <h2>Crafting stories through <br />
                                design and innovation</h2>
                        </div>
                        <div className={styles.bottom}>

                            <div className={`${styles.bottom_left} ${hoverDirection}`} onMouseOver={div1}>
                                <div className={styles.icon}>
                                    <BsBackpack2Fill />
                                </div>
                                <div className={styles.what}>
                                    <h3>Fullstack (Node python)</h3>
                                </div>

                                <div className={styles.describe}>
                                    <p>
                                        Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting
                                        fugit sed thisnqui
                                        a consequuntur magni doloreseos designer heresm qui
                                    </p>
                                </div>

                            </div>
                            <div className={styles.bottom_middle}>

                                <div className={styles.icon}>
                                    <BsBackpack2Fill />
                                </div>
                                <div className={styles.what}>
                                    <h3>Web Desing</h3>
                                </div>

                                <div className={styles.describe}>
                                    <p>
                                        Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting
                                        fugit sed thisnqui
                                        a consequuntur magni doloreseos designer heresm qui
                                    </p>
                                </div>
                            </div>
                            <div className={styles.bottom_right}>
                                <div className={styles.icon}>
                                    <BsAwardFill />
                                </div>
                                <div className={styles.what}>
                                    <h3>Web Desing</h3>
                                </div>

                                <div className={styles.describe}>
                                    <p>
                                        Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting
                                        fugit sed thisnqui
                                        a consequuntur magni doloreseos designer heresm qui
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.logo_back}>

                    {/* JAVASCRIPT */}
                    <span className={styles.playIcon}>
                        <FaCirclePlay />
                    </span>

                    <div className={styles.programming_langauges} onClick={goToYoutube}>
                        <div className="mid">

                            <div className={styles.allpro}>
                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}  onClick={goToYoutube}>
                                        <AiOutlineHtml5 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <FaCss3 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <FaCss3 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <TbBrandJavascript />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <FaReact />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        < SiNextdotjs />
                                    </span>

                                </div>



                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <SiPython />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <SiDjango />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <CiDatabase />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>

                                    <span className={styles.icon_pro}>
                                        <FaJava />
                                    </span>

                                </div>






                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.animations}>
                    <div className={styles.animate}>
                        <ul className={styles.scroller_inner}>
                            <li>Node js</li>
                            <li>Node TS</li>
                            <li>python</li>
                            <li>react</li>
                            <li>next js</li>
                            <li>js</li>
                            <li>java</li>
                            <li>computer architecture</li>

                            <li>Node js</li>
                            <li>Node TS</li>
                            <li>python</li>
                            <li>react</li>
                            <li>next js</li>
                            <li>js</li>
                            <li>java</li>
                            <li>computer architecture</li>

                        </ul>
                    </div>


                    <div className={styles.all_}>
                        <div id="mid">
                            <div className={`${styles.rule} ${styles.rule_}`} onClick={first}>
                                <div className={styles.q}>
                                    <div className={styles.left_}> Why Codehons? </div>
                                    <div className={styles.right_}>+</div>
                                </div>

                                <div className={styles.ans}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin
                                    professor at Hampden-Sydney College in Virginia, looked up one
                                </div>

                            </div>
                            <div className={styles.rule} onClick={second}>
                                <div className={styles.q}>
                                    <div className={styles.left_}> Why Codehons? </div>
                                    <div className={styles.right_}>+</div>
                                </div>

                                <div className={styles.ans} >
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin
                                    professor at Hampden-Sydney College in Virginia, looked up one
                                </div>
                            </div>
                            <div className={styles.rule} onClick={third}>
                                <div className={styles.q}>
                                    <div className={styles.left_}> Why Codehons? </div>
                                    <div className={styles.right_}>+</div>
                                </div>

                                <div className={styles.ans}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old. Richard McClintock, a Latin
                                    professor at Hampden-Sydney College in Virginia, looked up one
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


            <Theme/>
        </>
    )
}