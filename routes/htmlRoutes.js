const router = require('express').Router();


// HTML ROUTES
    // GET - HOME PAGE

router.get("/", (req, res) => {
    res.send("This is the homepage")
})




module.exports = router;