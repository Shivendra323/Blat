const express = require("express");
const router = express.Router();
const { setMessages } = require('../Controllers/setMessageController');
const { getMessage } = require("../Controllers/getMessageController");

router.post("/", setMessages);
router.get("/", getMessage);

module.exports =router;