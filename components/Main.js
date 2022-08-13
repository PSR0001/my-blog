import React, { useEffect } from "react";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Main = () => {
    return (
        <div >

            <h1
            data-aos="zoom-in-up"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            className={styles.title}>
                Welcome to  <strong className="font-bold text-7xl text-green-500">My Blog!</strong>
            </h1>
            <p className={styles.description}>
                Get Ready for new Blog Post !!
            </p>
            <div  className={styles.grid}>
                <div 
                 data-aos="fade-right"
                 data-aos-offset="400"
                 data-aos-easing="ease-in-sine"
                 className={styles.card} 
                 >
                    <Link href={"/Blog"}><h2>Popular Blogs &rarr;</h2></Link>
                    <p>Find in-depth information about Next.js features and API.</p>
                </div>
                <div 
                data-aos="fade-left"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
                className={styles.card} 
                >
                    <Link href={"/Blog"} ><h2>Learn &rarr;</h2></Link>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>

                </div>
                <div 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.card} 
                >
                    <Link href={"/Blog"}><h2>Top Rated &rarr;</h2></Link>
                    <p>Find in-depth information about Next.js features and API.</p>
                </div>
                <div 
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.card} >
                    <Link href={"/Blog"} ><h2>More &rarr;</h2></Link>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </div>
            </div>
        </div>
    )
}

export default Main