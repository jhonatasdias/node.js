const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    
    }
    
    /* console.log(req); */
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>MyFirstPage</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}
// 1-Method
/* module.exports = requestHandler; */
// 2-Method
/* module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
} */
//3-Method
/* module.exports.handles = requestHandler;
module.exports.someText = 'Some hard coded text';
*/
// 4-Method
exports.handles = requestHandler;
exports.someText = 'Some hard coded text';
