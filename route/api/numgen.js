const express = require("express");
const router = express.Router();
const fs  = require('fs');

//generate 10 digits phone number
router.post("/generate", (req, res) => {
  let userId = req.body.id;
  let value = req.body.numGen;
  let dataHold =[];
  if(!userId) console.log('not Allowed');
  for(let i =0; i<value; i++){
    let firstRandomNum = Math.random().toString().slice(2,7);
    let secondRandomNum = Date.now().toString().slice(9);
    let phoneNumber =  (firstRandomNum + secondRandomNum).padStart(10,'0');

    let data = {
      phoneNumber: phoneNumber,
      dateCreated: new Date(),
    }

    fs.appendFile("dataStore.json", JSON.stringify(data), (err) => {
      if(err){
        return res.status(500).json({msg: 'something went wrong'});
      }
    })
    dataHold.push(data);
  }
  return res.status(200).json({dataHold});
});

//get all generated number
router.get("/generate", (req, res) => {
  let readfile= fs.readFileSync('dataStore.json');
  let data = JSON.parse(readfile)
    console.log(data);
    return;
  });

module.exports = router;