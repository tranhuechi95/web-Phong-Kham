const next = require( "next");
const express = require( "express");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const bodyParser = require('body-parser'); // to read form data

app.prepare().then( () => {
        const server = express();

        server.get( '*', (req, res) => {
            return handle(req,res);

        });

        server.listen(port, err => {
            if (err) throw err;
            else {
                console.log(`server ready on http://localhost:${port}`)
            }

        });
        
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(bodyParser.json())
        server.post('/DatLich', (req, res) => {
            console.log(req.body)
            res.send('Success!')
        })

        server.post('/DangKy', (req, res) => {
            console.log(req.body)
            res.send('Success!')
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
