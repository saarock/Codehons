'use client'
import styles from './Product.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
    const openConvertorTool = () => {
        window.open("https://convertor.codehons.com", "_blank");

    }
    return (
        <>
            <div className={styles.products}>
                <div className={styles.title}>
                    <h2>Free products of the Codehons</h2>
                </div>
                <div className={styles.all_products}>
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <Image src="/images/414919040_1159943758304254_13402246144835913_n.jpg" className={styles.productImage} alt='convertor' width={200} height={200}></Image>
                        </div>
                        <div className={styles.d}>
                            <p>
                                This is the tool for Students change from image to pdf , Image height width or Format, and also make the hight
                                quality Image.
                            </p>
                        </div>
                        <div className={styles.visit_site}>
                            <button className={styles.watch} onClick={openConvertorTool}>Use tool</button>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}