var express       = require('express'),
    botController = require('../controllers/bot'),
    guiController = require('../controllers/gui'),
    router        = express.Router();

router.get('/gui', function(request, response){
  // FIXME: render the proper file
  // response.status(200).render();
});

router.get('/bot_status', function(request, response){
  botController.botReport(request, function(result){
    // FIXME: is this effective errorhandling?
    if(typeof result == 'undefined'){
      // TODO: move test for JSON result from controller to routes
      response.status(500).json(error);
    } else {
      response
        .status(200)
        .set('Content-Type', 'application/json')
        .json(result);
    }
  });
});

router.post('/bot_status', function(request, response){
  botController.updateBot(request, function(error, success){
    if(success === false){
      response.status(500).json(error);
    } else {
      response.status(200);
    }
  });
});

module.exports = router;
