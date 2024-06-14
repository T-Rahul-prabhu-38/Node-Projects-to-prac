const fs = require('fs')
const superagent = require('superagent')


fs.readFile('./dog.txt',(err,data)=>{
    console.log(data);

    fs.writeFile('dog-img.txt',(err,data)=>{
        
    })
})