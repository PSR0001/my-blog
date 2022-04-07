import React,{ useState,useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
// import { useEffect } from 'react/cjs/react.development'
// import { useState } from 'react/cjs/react.production.min'
const Blog = () => {

    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        //console.log("useeffect is running...")
        fetch('api/blogsdir').then((a) => {
            return a.json()
        })
            .then((parsed) => {
                // console.log(parsed)
                setBlogs(parsed)
            })
    },[])

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

export default Blog