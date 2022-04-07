import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import React from 'react'
import { useState,useEffect } from 'react'

const slug = () => {

  const [blog,setblog] = useState([]);

  const router = useRouter();

   useEffect(()=>{

    if(!router.isReady) return;
    const {slug}  = router.query;
    // console.log("i am in react ...")
    console.log(slug);
    fetch(`/api/blogs?slug=${slug}`).then((a) => {
      return a.json()
    }).then((parsed) => {
      // console.log(parsed)
      setblog(parsed)
    })

   },[router.isReady]) //**
  
  return (
    <div className={styles.container}>
      <h2>Title : {blog.title}</h2>
      <hr/>

      <p>{blog.content}</p>



    </div>
  )
}

export default slug