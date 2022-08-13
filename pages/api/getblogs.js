import connectDB from '../../middleware/mongoose'
import Blogs from '../../models/Blogs'

const handler = async(req, res)=> {
    let Blog = await Blogs.find()
    // console.log(Blogs)

    //todo add a if else statement

    //cross check
    
    res.status(200).json({ Blog })
  }


export default connectDB(handler)
  