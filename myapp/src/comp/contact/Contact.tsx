'use client'
import styles from './Contact.module.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface UserData {
    FullName: string;
    Email: string;
    Subject: string;
    message: string
}

export default function Contact() {
    const [formData, setFormData] = useState<UserData>({
        FullName: "",
        Email: "",
        Subject: "",
        message: ""
    });




    const userFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev: UserData) => ({
            ...prev,
            [name]: value
        }))
    }


    // Send the data to the backend;
    const sendData = async () => {
        // alert("")
        return;
        try {
            const formData_ = new FormData();
            for (let [key, values] of Object.entries(formData)) {
                formData_.append(key, values as string);
            }

            // alert(formData_.get("FullName"))
            const res = await fetch("http://localhost:8000", {
                method: "POST",
                body: JSON.stringify(formData_)
            });








        } catch (err: any) {
            alert(err);
        }
    }

    return (
        <>
            <div className={styles.contact} id='contact'>
                <div className={styles.shadow}></div>
                <div className={styles.shadow1}></div>
                <div className={styles.shadow2}></div>
                <div className={styles.shadow3}></div>

                <div className={styles.all_contact}>
                    <div className={`mid ${styles.c_m}`}>

                        <div className={styles.con}>
                            <div className={styles.left}>
                                <div className={styles.left_top}>
                                    <h3>CONTACT ME</h3>
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

                                    <input type="text" placeholder='John smith' name='FullName' onChange={userFormData} />
                                    <br />

                                    <label htmlFor="email">Email</label>

                                    <input type="email" placeholder='a@gmail.com' name='Email' onChange={userFormData} />

                                    <br />

                                    <label htmlFor="subject">Subject</label>

                                    <input type="text" placeholder='I need help' name='Subject' onChange={userFormData} />

                                    <br />

                                    <label htmlFor="description">Description</label>

                                    <textarea name="message" id={styles.message} cols={10} rows={30} onChange={userFormData} ></textarea>
                                    {/* <input type="text" placeholder='Type your message...' /> */}
                                    <button onClick={sendData} className={styles.send}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}