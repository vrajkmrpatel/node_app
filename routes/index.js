const apiKeyMiddleWare = require('../middlewares/apikey')
const router = require("express").Router();

// ROUTE LEVEL MIDDLEWARE
// router.use(apiKeyMiddleWare)

// Routes
router.get("/", (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});

// Download

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// SINGLE ROUTE BASED MIDDLEWARE DECLARATION
// router.get("/api/products",apiKeyMiddleWare, (req, res) => {
//   res.json([
//     {
//         id: '123',
//         name: 'Chrome'
//     },
//     {
//         id: '124',
//         name: 'Firefox'
//     },
//     {
//         id: '125',
//         name: 'Opera'
//     },

//   ]);
// });



module.exports = router;
