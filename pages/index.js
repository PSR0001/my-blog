import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Category from '../components/Home/Category'
import Features from '../components/Home/Features'
import Footer from '../components/Footer'
import Particle from '../components/Particle'
export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <h1 className={styles.title}>
          Welcome to  <strong className="font-bold text-7xl text-green-500">My Blog!</strong>
        </h1>

        <p className={styles.description}>
          Get Ready for new Blog Post !!
        </p>

        <div className={styles.grid}>

          {/* <Link href='/About' className={styles.card}><h2>Javascript &rarr;</h2></Link> */}
          <div className={styles.card} >
            <Link href={"/Blog"}><h2>Popular Blogs &rarr;</h2></Link>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card} >
            <Link href={"/Blog"} ><h2>Learn &rarr;</h2></Link>
            <p>Learn about Next.js in an interactive course with quizzes!</p>

          </div>
          <div className={styles.card} >
            <Link href={"/Blog"}><h2>Top Rated &rarr;</h2></Link>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>
          <div className={styles.card} >
            <Link href={"/Blog"} ><h2>More &rarr;</h2></Link>
            <p>Learn about Next.js in an interactive course with quizzes!</p>

          </div>

        </div>
      </main>
      <div  >
        <Particle />
      </div>

      <Category />
      <Features />

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <strong>PSR</strong>
        </span>
      </footer>
      <Footer />
    </div>
  )
}
