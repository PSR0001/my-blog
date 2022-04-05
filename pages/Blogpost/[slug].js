import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <h2>Title : {slug}</h2>
      <hr/>
      <p>
      JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.
      </p>



    </div>
  )
}

export default slug