const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  author:{type:String,required:true},
  title:{type:String, required:true},
  content:{type:String,required:true},
  date:{type:String},
  slug:{type:String,required:true,unique:true},
  metadata:{type:String,required:true},
  img:{type:String},
},{timestamps:true});
mongoose.models = {}
// export default mongoose.model("product",productSchema)
let UserBlog = mongoose.model("users",blogSchema);

module.exports = UserBlog;