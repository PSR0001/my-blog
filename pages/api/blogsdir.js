import *as fs from 'fs'

export default async function handler(req, res) {
let myfile;
let allBlogs = [];
//readfile function
 let data = await fs.promises.readdir("blogdata")

 for (let index = 0; index < data.length; index++) {
   const element = data[index];
   myfile = await fs.promises.readFile(("blogdata/"+element),'utf-8');
  //  console.log(myfile); //for debugging
   allBlogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allBlogs)

//  (err, data) => {

//     //error checking
//     if (err) {
//       res.status(200).json({ error: "No such blogs Found !" })
//       console.log(err);
//     }
//     else {
//       res.status(200).json(data)
//     }

//   })
  
}



