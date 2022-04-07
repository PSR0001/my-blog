import React,{ useState,useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
// import { useEffect } from 'react/cjs/react.development'
// import { useState } from 'react/cjs/react.production.min'
const Blog = (props) => {

    const [Blogs, setBlogs] = useState(props.data)
    // useEffect(() => {
    //     //console.log("useeffect is running...")
    //     fetch('api/blogsdir').then((a) => {
    //         return a.json()
    //     })
    //         .then((parsed) => {
    //             // console.log(parsed)
    //             setBlogs(parsed)
    //         })
    // },[])

    return (
        <>
            <main className={styles.main} >
                <h1>All Blogs Reserved</h1>
                <div>
                    <div className={styles.grid}>    
                        {Blogs.map((blogItems) => {
                            return <div className={styles.card} key={blogItems.slug}>
                                <Link href={`/Blogpost/${blogItems.slug}`}><h2>{blogItems.title} &rarr;</h2></Link>
                                <p>{blogItems.content.substr(0,60)}...</p>
                            </div>
                        })}
                       
                    </div>

                </div>

            </main>

        </>
    )
}
export async function getServerSideProps(context) {
    
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/blogsdir`)
    const data = await res.json()
//   console.log(data); //for debugging
    // Pass data to the page via props
    return { props: { data } }
  }
export default Blog