const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))
app.use(morgan('short'))

const router = require('./routes/user.js')
app.use(router)

app.get("/", (req, res) => {
    console.log("responding to root route")
    res.send("Hello from  ROOT")
})

app.get("/users", (req, res) => {
    var user1 = { firstname: "birja", lastname: "kumar" }
    const user2 = { firstname: "amit", lastname: "kumar" }
    res.json([user1, user2])
})

app.get('/img', (req, res) => {
    res.sendFile(__dirname + "\\uploads\\1569853449253Tulips.jpg");
    // res.jsonp({
    //     "res": __dirname + "\\uploads",
    // });
    console.log(path);
});

app.listen(3003, () => {
    console.log("Server is up and listening on 3003...")
})