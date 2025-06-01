const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const app = express()


app.use(express.static("dist"))
app.use(express.json())
app.use(cors({
    origin: "https://abhi-ambhore-portfolio.onrender.com",
    credentials: true
}))


app.use("/api/public", require("./route/public.route"))

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "resource not found" })
})

app.use("*", (err, req, res, next) => {
    res.status(500).json({ message: "server error" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})