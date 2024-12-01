// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword
} = require("../controllers/Auth")

const {isDemo}=require("../middlewares/demo");


const { auth } = require("../middlewares/auth")
// Route for user login
router.post("/login", login)

// Route for user signup
router.post("/signup", signup)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// Route for Changing the password
router.post("/changepassword", auth,isDemo, changePassword)


// Export the router for use in the main application
module.exports = router;