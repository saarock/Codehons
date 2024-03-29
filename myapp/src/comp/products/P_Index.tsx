import React from 'react';
import styles from './Index.module.css';
import Image from 'next/image';

interface Props {
  details?: {title:string, url:string};
}
 const P_Index:React.FC<Props> = ({details}) => {
  console.log(details)

  const goLive = () => {
    window.open(details?.url)
  }
  return (
    <>
    <div className={styles.productcontainer}>
      <div className={styles.top}>
<Image src='/images/tem1.png' alt='template1' width={500} height={500}></Image>
      </div>


      <div className={styles.texts}>
        <h1>{details?.title}</h1>
        <button>Details</button>
        <button onClick={goLive}>Live Demo</button>
      </div>
    </div>
    </>
  )
}

export default P_Index;