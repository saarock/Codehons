import styles from './Free.module.css';
import P_Index from '../products/P_Index';

export default function Free() {
    return (
        <>
            <div className={styles.free}>
                <div className={styles.all_products}>
                    <div className={styles.product}>
                        <P_Index details={{title:"School themes", url:"https://gyanodaya-website.vercel.app/"}}/>
                   
                    </div>
                </div>
            </div>
        </>
    )
}   