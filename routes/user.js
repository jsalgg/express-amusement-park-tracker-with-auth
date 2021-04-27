const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const bcrypt = require("bcryptjs");

router.get(
  "/user/register",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = await db.User.build();
    res.render("user-register", {
      user: user,
      title: "Register Page",
      csrfToken: req.csrfToken(),
    });
  })
);
router.post(
  "/user/register",
  csrfProtection,
  asyncHandler((req, res) => {})
);

module.exports = router;
