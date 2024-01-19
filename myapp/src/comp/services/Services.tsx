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
export default function Services() {
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

                            <div className={styles.bottom_left}>
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
                    <FaCirclePlay />
                    <div className={styles.programming_langauges}>
                        <div className="mid">

                            <div className={styles.allpro}>
                                <div className={styles.pro_div}>
                                    <h2>HTML</h2>
                                    <span className={styles.icon_pro}>
                                        <AiOutlineHtml5 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>
                                    <h2>CSS</h2>
                                    <span className={styles.icon_pro}>
                                        <FaCss3 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>
                                    <h2>Sass</h2>
                                    <span className={styles.icon_pro}>
                                        <FaCss3 />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>
                                    <h2>javaScript</h2>
                                    <span className={styles.icon_pro}>
                                        <TbBrandJavascript />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>
                                    <h2>React</h2>
                                    <span className={styles.icon_pro}>
                                        <FaReact />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>
                                    <h2>Nextjs</h2>
                                    <span className={styles.icon_pro}>
                                        < SiNextdotjs />
                                    </span>

                                </div>



                                <div className={styles.pro_div}>
                                    <h2>Python</h2>
                                    <span className={styles.icon_pro}>
                                        <SiPython />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>
                                    <h2>Django</h2>
                                    <span className={styles.icon_pro}>
                                        <SiDjango />
                                    </span>

                                </div>

                                <div className={styles.pro_div}>
                                    <h2>Data Visualizations</h2>
                                    <span className={styles.icon_pro}>
                                        <CiDatabase />
                                    </span>

                                </div>


                                <div className={styles.pro_div}>
                                    <h2>Computer Architecture/C/Java</h2>
                                    <span className={styles.icon_pro}>
                                        <FaJava />
                                    </span>

                                </div>






                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.animations}>
                    <h1>YOUR TRUNS IS MY WEALTH</h1>
                    <h2>YOUR TRUNS IS MY WEALTH</h2>
                </div>


            </div>
        </>
    )
}