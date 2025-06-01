const { sendNotification } = require("../controller/public.controller")

const router = require("express").Router()
router
    .post("/send-mail", sendNotification)

module.exports = router
