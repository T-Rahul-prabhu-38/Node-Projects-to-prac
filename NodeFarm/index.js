const http = require('http');
const url = require('url');
const fs = require('fs');


//reading file only once
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const productData = JSON.parse(data); 


//create server
const server = http.createServer((req, res) => {
    const pathName = req.url;

    //overview page
    if (pathName === '/' || pathName === "/overview") {
        res.end('This is the OVERVIEW');

    } 
    
    //product page
    else if (pathName === '/product') {
        res.end('This is the PRODUCT');

    } 
    
    //api calls
    else if( pathName === '/api') {
        res.writeHead(200,{'content-type' : 'applications/json'})
        res.end(data);

    } else {
        res.writeHead(404);
        res.end('Page not found!');
    }
});


//we can use localhost
server.listen(8000, 'localhost', () => {
    console.log(" listening to port on 8000 ")
})




