import styles from './Footer.module.css';
export default function Footer() {
    return (<>
        <div className={styles.footer}>
            <div className={styles.right_reserve}>
                © Copyright 2024 <span className='codehons'>  CodeHons </span> All Rights Reserved.
            </div>
        </div>
    </>)
}