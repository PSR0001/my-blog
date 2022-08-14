import Blog from '../../models/Blogs'
import connectDB from '../../middleware/mongoose'

const handler = async(req, res)=> {
    if (req.method === 'POST') {
        // Process a POST request
        
            let p = new Blog({
                author:req.body.author,
                title:req.body.title,
                content:req.body.content,
                date:req.body.date,
                slug:req.body.slug,
                metadata:req.body.metadata,
                img:req.body.img,              
            })

            await p.save()
        
        res.status(200).json({ success:"success" })

      } else {
        
        res.status(400).json({ error:"Invailed" })
      }
    }
    // let Products = await Product.find()
  


export default connectDB(handler)
  