const next = require( "next");
const express = require( "express");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const bodyParser = require('body-parser'); // to read form data

// newly added
//const monk = require("monk");
//var db = monk('localhost:27017/bacsidao');

// middleware logic to modify the req

// end newly added
app.prepare().then( () => {
        const server = express();

        const MongoClient = require('mongodb').MongoClient;
        // Connection URL
        var url = 'mongodb://localhost:27017';
        // Database Name
        const dbName = 'bacsidao';
        // Create a new MongoClient
        const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

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
            // new code
            mongoClient.connect(err => {
                if (err) {
                    console.log("Cannot connect to mongoDB server!");
                    res.send("Failure to connect to DB");
                } else {
                    console.log("Connected successfully to server");
                    const db = mongoClient.db(dbName);
                    const collection = db.collection('DatLichKham');
                    collection.insertOne(req.body, (err, result) => {
                        if (err) {
                            console.log("Insertion into DB failed!");
                            console.log(err);
                            res.send("Failed to insert form into DB!");
                        } else {
                            console.log("Insertion succeeds!");
                            //console.log(result);
                            res.send("Insertion successful!");
                        }
                    });
                }
            });
            // console.log(req.body) // req.body contains all the data to write to db
            // res.send('Success!')
        })

        server.post('/DangKy', (req, res) => {
            mongoClient.connect(err => {
                if (err) {
                    console.log("Cannot connect to mongoDB server!");
                    res.send("Failure to connect to DB");
                } else {
                    console.log("Connected successfully to server");
                    const db = mongoClient.db(dbName);
                    const collection = db.collection('DangKy');
                    collection.insertOne(req.body, (err, result) => {
                        if (err) {
                            console.log("Insertion into DB failed!");
                            console.log(err);
                            res.send("Failed to insert form into DB!");
                        } else {
                            console.log("Insertion succeeds!");
                            console.log(result);
                            res.send("Insertion successful!");
                        }
                    });
                }
            });
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
