const express = require("express");
const router = express.Router();

//Declare any routes here.

const chatRoutes = require("./routes/chat_routes.js");
const authRoutes = require("./routes/auth");
router.use("/auth", authRoutes);
router.use(chatRoutes);

const streamRoutes = require("./routes/stream");
router.use("/streams", streamRoutes);

router.get("/login", (req, res) => {
  res
    .status(200)
    .send()
    .end();
});
router.postget("/login", (req, res) => {
  res
    .status(666)
    .send()
    .end();
});

router.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: error.message,
    code: error.code,
    name: error.name,
    status: error.status
  }).end();
});

//Catching all other requests
router.get("*", (req, res) => {
  res
    .status(404)
    .send({
      message: "404 not found"
    })
    .end();
});

module.exports = router;
