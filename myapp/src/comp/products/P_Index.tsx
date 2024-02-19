import React from 'react';
import styles from './Index.module.css';
import Image from 'next/image';

 const P_Index = (productsDetails: Object) => {

  const goLive = () => {
    window.open('https://gyanodaya-website.vercel.app/')
  }
  return (
    <>
    <div className={styles.productcontainer}>
      <div className={styles.top}>
<Image src='/images/tem1.png' alt='template1' width={500} height={500}></Image>
      </div>


      <div className={styles.texts}>
        <h1>School thems</h1>
        <button>Details</button>
        <button onClick={goLive}>Live Demo</button>
      </div>
    </div>
    </>
  )
}

export default P_Index;