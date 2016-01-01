var request = require('supertest'),
    app     = require('../app'),
    agent   = request.agent(app),
    assert  = require('assert');

describe('Routes', function(){

  describe('GET /gui', function(){
    it('responds successfully with a 200 status', function(done){
      agent.get('/gui').expect(200, done);
    });

    // it('renders the GUI show view', function(done){
    // });
  });

  // this request is only ever made by the RaspPi
  // a view is unnecessary
  describe('GET /bot_status', function(){
    var getBotStatus;

    beforeEach(function(){
      getBotStatus = agent.get('/bot_status').set('Accept', 'application/json');
    });

    it('responds successfully with a 200 status', function(done){
      getBotStatus.expect(200, done);
    });

    // FIXME: is this checking the response?
    // it('responds with JSON', function(done){
    //   getBotStatus
    //     .expect('Content-Type', 'application/json; charset=utf-8')
    //     .expect('Content-Length', '2')
    //     .expect(200, done);
    // });
  });

  // this request is made by either the app's online user or the RaspPi
  describe('POST /bot_status', function(){
    var postBotStatus;

    beforeEach(function(){
      var status = {
        power: 'off',
        controller: 'manual'
      };

      postBotStatus = agent.post('/bot_status')
        .send({power: 'off', controller: 'manual'});
    });

    // TODO: write tests for error handling; doesn't give back custom errors

    it('responds successfully with a 200 status', function(done){
      postBotStatus.expect(200);
      done();
    });

    // FIXME: Can you test for this?
    it('accepts JSON', function(done){
      console.log(request);
      postBotStatus.expect('Content-Type', 'application/json; charset=utf-8');
      done();
    });

    // it('renders the show view', function(done){
    // });
  });
});
