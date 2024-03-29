import React from 'react'
import { useState} from 'react'
import Image from 'next/image';

const slug = (props) => {

  const [blog, setblog] = useState(props.data);
  const [num,serNum]=useState( Math.floor(Math.random() * (5 + 1)))

// console.log(number)

  return (
    <div className='bg-gray-100'>
      
      <div className="w-full mx-auto text-white">

        <div className="flex flex-wrap w-full bg-blend-darken bg-gray-100  relative mb-4">
          {/* <img alt="gallery" className=" realtive  w-full object-cover h-full object-center block  absolute inset-0" src={imgUrl}/> */}
          <Image alt="gallery" className="  w-full object-cover h-full object-center block   inset-0" src={`/show/${num}.jpg`} height={370} width={1520}></Image>
          {/* <div className="text-center relative z-10 w-full">
            <h2 className="text-5xl  font-medium title-font mb-2">Title : {blog.Blog.title}</h2>
            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          
          </div> */}
          
        </div>

        <div className="lg:w-[900px] mx-auto text-gray-600 body-font  bg-slate-200">
          <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 shadow-sm">Title : {blog.Blog.title}</h1>
              <p className="mb-8 leading-relaxed">{blog && <div dangerouslySetInnerHTML={createMarkup(blog.Blog.content)}></div>}</p>
            </div>
          </div>
        </div>
        <div className=" w-2/3 mx-auto py-11 flex justify-between ">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Previous</button>
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Next</button>
            </div>
      </div>

    </div>
  )
}

function createMarkup(c) {
  return {__html: c};
}

//server side rendaring
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { slug } = context.query;
  // console.log(context.req.url);
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const data = await res.json()

  
  // Pass data to the page via props
  return { props: { data } }
}

export default slug