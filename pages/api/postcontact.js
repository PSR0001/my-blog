import *as fs from 'fs'

export default function handler(req, res) {

    //genarated a random number
    let num = Math.floor((Math.random() * 100) + 1);


    if (req.method === 'POST') {
        console.log(req.body);
        fs.writeFile(`contactdata/${req.body.name + num}.json`, JSON.stringify(req.body), () => {

            res.status(200).json({ message: "success" })
        })
    } else {
        // Handle any other HTTP method

        res.status(200).json(["Contact Us"])
    }


}



