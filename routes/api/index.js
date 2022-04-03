// connecting routes to the server
// 
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// This is the route that will be used to connect the routes to the server
router.use('/users', userRoutes);
// this is the route that will be used to connect the routes to the server
router.use('/thoughts', thoughtRoutes);

module.exports = router;
