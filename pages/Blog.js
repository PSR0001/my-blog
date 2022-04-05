import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
    return (
        <>
            <main className={styles.main} >
                <Link href='/About'>Home</Link>
                <h1>All Blogs Reserved</h1>
                <div>
                    <div className={styles.grid}>

                        {/* <Link href='/About' className={styles.card}><h2>Javascript &rarr;</h2></Link> */}
                        <div className={styles.card} >
                            <Link  href={"/Blogpost/learn-Javascript"}><h2>Javascript &rarr;</h2></Link>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </div>
                        <div className={styles.card} >
                            <Link href={"/Blogpost/learn-Python"} ><h2>Python &rarr;</h2></Link>
                                <p>Learn about Next.js in an interactive course with quizzes!</p>
                            
                        </div>
                        <div className={styles.card} >
                            <Link  href={"/Blogpost/learn-C++"}><h2>C++ &rarr;</h2></Link>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </div>
                        <div className={styles.card} >
                            <Link href={"/Blogpost/learn-PHP"} ><h2>PHP &rarr;</h2></Link>
                                <p>Learn about Next.js in an interactive course with quizzes!</p>
                            
                        </div>
                       
                    </div>

                </div>

            </main>

        </>
    )
}

export default Blog