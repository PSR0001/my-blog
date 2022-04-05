import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
    return (
        <>
            <main className={styles.main} >
                <h1>All Blogs Reserved</h1>
                <div>
                    <div className={styles.grid}>
                        <a href={`/Blogpost/Javascript-learn`} className={styles.card}>
                            <h2>Javascript &rarr;</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="/Blogpost/learn-Python" className={styles.card}>
                            <h2>Python &rarr;</h2>
                            <p>Learn about Next.js in an interactive course with quizzes!</p>
                        </a>

                        <a href="/Blogpost/learn-C++" className={styles.card}>
                            <h2>C++ &rarr;</h2>
                            <p>Discover and deploy boilerplate example Next.js projects.</p>
                        </a>

                        <a href="/Blogpost/learn-PHP" className={styles.card}>
                            <h2>PHP &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public URL with Vercel.
                            </p>
                        </a>
                    </div>

                </div>

            </main>

        </>
    )
}

export default Blog