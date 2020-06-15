// this index.js collects the PACKAGED API routes from the routes/API/index.js
const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

// When we import the routes to server.js, they'll already be packaged and ready to go with this index.js