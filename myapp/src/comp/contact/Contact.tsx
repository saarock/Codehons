import styles from './Contact.module.css';
import Link from 'next/link';
export default function Contact() {
    return (
        <>
            <div className={styles.contact} id='contact'>
                <div className={styles.shadow}></div>
                <div className={styles.shadow1}></div>
                <div className={styles.shadow2}></div>
                <div className={styles.shadow3}></div>

                <div className={styles.all_contact}>
                    <div className="mid">

                        <div className={styles.con}>
                            <div className={styles.left}>
                                <div className={styles.left_top}>
                                    <h3>CONTACT US</h3>
                                </div>
                                <div className={styles.left_middle}>
                                    <h2>
                                        Have a <span className={styles.extra}>Project </span>  or want to <span className={styles.extra}>Collaborate? </span>
                                    </h2>
                                </div>

                                <div className={styles.left_bottom}>
                                    <p>We would love to hear from you.
                                        Drop a message.</p>
                                </div>

                                <div className={styles.box}>
                                    <div className={styles.title}>Location</div>
                                    <div className={styles.answer}>Kathmandu Raatopul</div>
                                    <div className={styles.title}>Mail at</div>
                                    <div className={styles.answer}>saarock4646@gmail.com</div>
                                    <div className={styles.title}>Follow on social media</div>
                                    <Link href="#" className={styles.follow}>Follow</Link>
                                    <div className={styles.answer}>  </div>

                                </div>
                            </div>


                            <div className={styles.right}>
                                <div className={styles.form}>
                                    <label htmlFor="Name">FullName</label>

                                    <input type="text" placeholder='John smith' />
                                    <br />

                                    <label htmlFor="email">Email</label>

                                    <input type="email" placeholder='a@gmail.com' />

                                    <br />

                                    <label htmlFor="subject">Subject</label>

                                    <input type="text" placeholder='I need help' />

                                    <br />

                                    <label htmlFor="description">Description</label>

                                    <textarea name="message" id={styles.message} cols={10} rows={30}></textarea>
                                    {/* <input type="text" placeholder='Type your message...' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}