const express = require("express");
const router = express.Router();
const { SubscribeChannel } = require('../Controllers/subscribeController');
const { getChannelSubscriber } = require("../Controllers/getSubscriberController");

router.post("/", SubscribeChannel);
router.get("/", getChannelSubscriber);

module.exports =router;