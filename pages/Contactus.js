import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'



const Contactus = () => {

  //use state
  const [name, usename] = useState('');
  const [email, useemail] = useState('');
  const [number, usenumber] = useState('');
  const [desc, usedesc] = useState('');

  function formhandeler(e) {
    e.preventDefault()
    // console.log("i am preventdefault"); //for debugging
    // console.log(name,email,number,desc);
    const data = { name,email,number,desc };
    console.log(data)

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function handelChange(e) {
    // console.log(e,"change");
    if (e.target.name == 'name') {
      usename(e.target.value)
    }
    if (e.target.name == 'email') {
      useemail(e.target.value)
    }
    if (e.target.name == 'number') {
      usenumber(e.target.value)
    }
    if (e.target.name == 'desc') {
      usedesc(e.target.value)
    }
  }


  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <div className={styles.mainform}>
          <form onSubmit={formhandeler} className={styles.form}>
            <div className={styles.mb3}>
              <label htmlFor="name" className={styles.formlabel}>Name : </label>
              <input type="text" value={name} onChange={handelChange} className={styles.formcontrol} id="name" name="name" aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="email" className={styles.formlabel}>Email address : </label>
              <input type="email" onChange={handelChange} value={email} className={styles.formcontrol} id="email" name="email" aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="number" className={styles.formlabel}>Phone Number :</label>
              <input type="text" onChange={handelChange} value={number} className={styles.formcontrol} id="number" name="number" />
            </div>
            <div className={styles.mb3}>
              <label htmlFor="desc" className={styles.formlabel}>Description :</label>
              <textarea value={desc} onChange={handelChange} name='desc' className={styles.formcontrol2} id="desc" rows="5"></textarea>
            </div>

            <button type="submit" className={styles.btn}>Submit</button>
          </form>
        </div>
      </div>


    </>
  )
}

export default Contactus