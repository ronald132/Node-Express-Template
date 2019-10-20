const express = require("express");
const router = express.Router();

//@route  GET api/users/test
//@access Public
router.get("/test", (req, res) => {
  res.json("hello from api/users");
});

module.exports = router;
