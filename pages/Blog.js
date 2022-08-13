import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Blog = (props) => {

    const [Blogs, setBlogs] = useState(props.data)
    
    return (
        <>
            <div className="container px-7  mx-auto">
                <div className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-green-500"></div>
                    </div>
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">All Blogs Reserved</h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {Blogs.map((blogItems, key) => {
                        return (<div key={key} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="hover-img object-cover object-center h-full w-full" src="https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350" />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{blogItems.title}</h2>
                            <p className="text-base leading-relaxed mt-2">   {blogItems.metadata.substr(0, 80)}...</p>
                            <a className="text-green-500 inline-flex items-center mt-3">

                                <Link href={`/Blogpost/${blogItems.slug}`}><h2>Learn More</h2></Link>

                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>)
                    })}
                </div>
            </div>
            <section className="text-gray-600 body-font mx-3">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                            <Image alt="content" className="hover-img object-cover object-center h-full w-full" src="/blog/1.jpg" height={500} width={1200} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                            <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">More info</button>
                        </div>
                        <div className="sm:w-1/2 mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <Image alt="content" className="hover-img object-cover object-center h-full w-full" src="/blog/2.jpg" height={500} width={1200} />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
                            <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                            <button className="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">More info</button>
                        </div>
                    </div>
                </div>
            </section>


            <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <strong>PSR</strong>
        </span>
      </footer>
      <Footer />




        </>
    )
}
export async function getServerSideProps(context) {

    
    // Fetch data from external API
    const response = await fetch(`http://localhost:3000/api/blogsdir`)
    const data = await response.json()

    return { props: { data } }
}
export default Blog