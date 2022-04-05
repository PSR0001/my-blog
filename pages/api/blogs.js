import *as fs from 'fs'

export default function handler(req, res) {

//readfile function
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {

    //error checking
    if (err) {
      res.status(200).json({ error: "No such blogs Found !" })
      console.log(err);
    }
    else {
      res.status(200).json(JSON.parse(data))
    }

  })
  
}



