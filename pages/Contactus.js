import React from 'react'
import styles from '../styles/Contact.module.css'
const Contactus = () => {
  return (
    <>
    <div className={styles.container}>
    <h1>Contact Us</h1>
    <div className={styles.mainform}>
      <form className={styles.form}>
        <div className={styles.mb3}>
          <label for="name" className={styles.formlabel}>Name : </label>
          <input type="text" className={styles.formcontrol} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputEmail1" className={styles.formlabel}>Email address : </label>
          <input type="email" className={styles.formcontrol} id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputPassword1" className={styles.formlabel}>Phone Number :</label>
          <input type="text" className={styles.formcontrol} id="exampleInputPassword1"/>
        </div>
        <div className={styles.mb3}>
          <label for="exampleInputPassword1" className={styles.formlabel}>Description :</label>
          <textarea className={styles.formcontrol2} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  </div>
    
    
    </>
  )
}

export default Contactus