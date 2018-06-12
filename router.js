const express = require("express");
const router = express.Router();

//Declare any routes here.

const chatRoutes = require("./routes/chat_routes.js");
const authRoutes = require("./routes/auth_routes.js");
const streamRoutes = require("./routes/stream_routes.js");

router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);
router.use("/streams", streamRoutes);

router.get("/login", (req, res) => {
  res
    .status(200)
    .send({
      message: "Page found"
    })
    .end();
});

router.use((error,req,res,next) => {
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
