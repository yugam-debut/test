const http = require('http');
const querystring = require('querystring');
var arr = [];
const server = http.createServer((req, res) => {
    if (req.url != '/favicon.ico') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const obj = JSON.parse(JSON.stringify(querystring.parse(body)));
                arr.push(JSON.stringify(obj));
                res.end(`
                    <html>
                    <head>
                        <title>My webpage</title>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                        <script src="script.js"></script>
                    </head>
                    <body>
                        <form id="eventForm" action="/" method="post">
                            <label for="txtname">Name :</label>
                            <input type="text" name="txtname" /><br />
                            <label for="email">Email :</label>
                            <input type="email" name="email" /><br />
                            <label for="age">Age :</label>
                            <input type="number" name="age" /><br />
                            <input type="submit" value="Save"/>
                        </form>
                        <form id="Form" action="/listdata" method="get">
                            <input type="submit" value="List Data"/>
                        </form>                    
                    </body>
                    </html>
                `);
            });
        }
        else if(req.method === 'GET'){
            if(req.url == '/listdata?'){
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {  
                    var arrayval = '<table border="1px"><tr><td>Name</td><td>Email</td><td>Age</td></tr>';
                    for(let i=0;i<arr.length;i++)
                    {
                        var temp = JSON.parse(arr[i]);
                        arrayval += "<tr><td>" + temp.txtname + "</td>";
                        arrayval += "<td>" + temp.email + "</td>";
                        arrayval += "<td>" + temp.age + "</td></tr>";
                    }
                    arrayval += "</table>";  
                    res.end(`
                        <html>
                        <head>
                            <title>My webpage</title>
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                            <script src="script.js"></script>
                        </head>
                        <body>
                            <form id="eventForm" action="/" method="post">
                                <label for="txtname">Name :</label>
                                <input type="text" name="txtname" /><br />
                                <label for="email">Email :</label>
                                <input type="email" name="email" /><br />
                                <label for="age">Age :</label>
                                <input type="number" name="age" /><br />
                                <input type="submit" value="Save"/>
                            </form>
                            <form id="Form" action="/" method="get">
                                <input type="submit" value="List Data"/>
                            </form>
                            <div>Array Length=`+arr.length+`</div>
                            `+arrayval+`
                        </body>
                        </html>
                    `);
                });
            }
            else if((req.url == '/')){
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {  
                    res.end(`
                        <html>
                        <head>
                            <title>My webpage</title>
                        </head>
                        <body>
                            <form id="eventForm" action="/" method="post">
                                <label for="txtname">Name :</label>
                                <input type="text" name="txtname" /><br />
                                <label for="email">Email :</label>
                                <input type="email" name="email" /><br />
                                <label for="age">Age :</label>
                                <input type="number" name="age" /><br />
                                <input type="submit" value="Save"/>
                            </form>
                            <form id="Form" action="/listdata" method="get">
                                <input type="submit" value="List Data"/>
                            </form>
                        </body>
                        </html>
                    `);
                });
            }
            else{
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                });
                req.on('end', () => {  
                    res.end(`
                        <html>
                        <head>
                            <title>My webpage</title>
                        </head>
                        <body>
                            <div><h2>404 Not Found</h2></div>
                        </body>
                        </html>
                    `);
                });
            }
        }
        else {}
    }
    
});
server.listen(3000);