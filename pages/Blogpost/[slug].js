// import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import React from 'react'
import { useState,useEffect } from 'react'

const slug = (props) => {

  const [blog,setblog] = useState(props.data);

  // const router = useRouter();
 
  //  useEffect(()=>{

  //   if(!router.isReady) return;
  //   const {slug}  = router.query;
  //   // console.log("i am in react ...")
  //   console.log(slug);
  //   fetch(`/api/blogs?slug=${slug}`).then((a) => {
  //     return a.json()
  //   }).then((parsed) => {
  //     // console.log(parsed)
  //     setblog(parsed)
  //   })

  //  },[router.isReady]) //**
  
  return (
    <div className={styles.container}>
      <h2>Title : {blog.title}</h2>
      <hr/>

      <p>{blog.content}</p>
    </div>
  )
}

//server side rendaring
export async function getServerSideProps(context) {
  // Fetch data from external API
  const {slug}  = context.query;
  // console.log(context.req.url);
  const res = await fetch(`http://localhost:3000/api/blogs?slug=${slug}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default slug