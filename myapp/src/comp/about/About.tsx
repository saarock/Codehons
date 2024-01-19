import styles from './About.module.css';
import Image from 'next/image';
export default function About() {
    return (
        <>
            <div className={styles.about} id="about">
                <div className={styles.all_about}>
                    <div className="mid">
                        <div className={styles.left}>
                            <h3>ABOUT ME</h3>
                            <h2>Transforming visions into
                                exceptional portfolios</h2>
                            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia
                                consequuntur magni dolores eos designer heresm qui ratione</p>

                            <button>Download Cv</button>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.image}>
                                <Image src="/images/414919040_1159943758304254_13402246144835913_n.jpg" alt='me' width={200} height={200} className={styles.me}></Image>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.box_left}></div>
                                <div className={styles.box_right}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}