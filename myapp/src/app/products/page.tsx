'use client'
import styles from './Product.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Free from '@/comp/free/free';
import { useState } from 'react';
import Paid from '@/comp/paid/paid';

export default function Products() {
    const [true_false, setTrueFalse] = useState(false);
    const openConvertorTool = () => {
        window.open("https://convertor.codehons.com", "_blank");

    }

    const free = () => {
        setTrueFalse(false)

    }

    const pro = () => {
        setTrueFalse(true)
    }
    return (
        <>
            <div className={styles.products}>
                <div className={styles.product_choose_free}>
                    <div className={styles.mid}>
                        <div className={styles.search}>
                            <div className={styles.free_use} onClick={free}>Free Software</div>
                            <div className={styles.pro_in_sell} onClick={pro}>Buy pro Themes</div>
                            <div className={styles.search}>
                                <input type="search" name="search" id="search" placeholder='Search...' />
                            </div>
                        </div>

                        <div className={styles.allproucts}>
                            {
                                true_false ? (<>
                                    <Paid />
                                </>) : (<>
                                    <Free />
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}