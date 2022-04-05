import *as fs from 'fs'

export default function handler(req, res) {

//readfile function
  fs.readdir(`blogdata`, (err, data) => {

    //error checking
    if (err) {
      res.status(200).json({ error: "No such blogs Found !" })
      console.log(err);
    }
    else {
      res.status(200).json(data)
    }

  })
  
}



