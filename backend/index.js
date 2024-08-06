const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv") // keep keys confidential
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
dotenv.config()

const stripeRoute = require("./routes/stripe")
const cors = require("cors")

const path = require("path")


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("connect successful"))
    .catch((error) => {
        console.log(error)
    })

// app.get("/api/test", () =>{
//     console.log("test successful")
// })
// app.get('/', function (req, res) {
//     res.render('index', {});
//     });


app.use(cors())

app.use(express.json())

app.use("/api/users", userRoute)

app.use("/api/auth", authRoute)

app.use("/api/products", productRoute)

app.use("/api/carts", cartRoute)

app.use("/api/orders", orderRoute)

app.use("/api/checkout", stripeRoute)

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'), function(err){
        if(err){
            res.status(500).send(err)
        }
    });
});


app.listen(process.env.PORT || 5000, () => {
    console.log("backend is running")
})