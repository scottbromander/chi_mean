var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
    name: String,
    message: String
});

var Message = mongoose.model('message', MessageSchema, 'messages');

router.get('/', function(req,res){
    res.send("Fishsticks");
});

router.post('/', function(req,res){
    var message = new Message({
        name: req.body.name,
        message: req.body.message
    });

    message.save(function(err, savedMessage){
      if(err){
        console.log("Mongo Error: ", err);
        res.sendStatus(500);
      }

      res.send(savedMessage);
    });
});

router.put('/', function(req,res){
    res.sendStatus(200);
});

router.delete('/', function(req,res){
    res.sendStatus(200);
});

module.exports = router;
