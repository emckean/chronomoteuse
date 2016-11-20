var tracery = require('tracery-grammar');
var Twit = require('twit');
var T = new Twit(require('chronomoteuse_files/config.js'));

function getYear() {
 	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var year = getRandomIntInclusive(2071, 5000);

	
	var thisYear = year + " CE"
	return(thisYear);

}


var grammar = tracery.createGrammar({
  'year' : getYear(),
  
  'things' : ['Women', 'Robots', 'Science-fiction writers', 'Dogs', 'Superintelligent AIs', 'Senators', 'Mothers'],
 
  'result' : ['control the government.', 
  'are in charge.', 
  'are made of titanium.', 
  'refuse to use mobile phones.',
  'have nuclear weapons.', 
  'watch television.', 
  'use the internet for nostalgia\'s sake.', 
  'are the only ones who tweet.',
  'use sentient bicycles.',
  'play in jazz bands twenty-four hours a day.', 
  'travel in space.', 
  'have flying cars.', 
  'rule the world.', 
  'live in geodesic domes.',
  'have self-driving houses.',
  'dismantled the surveillance state.'],

  'origin': ['I have traveled to the year #year#. Things are so different! #things# #result#']
});

function phraseLengthOK(phrase) {
      if (phrase.length <= 130){
        return true;
      } else {
        return false;
      }
  }
 

function pickPhrase(){
	grammar.addModifiers(tracery.baseEngModifiers); 
	var phrase = grammar.flatten('#origin#');

    
    if (phraseLengthOK(phrase) && phrase !== 'undefined') {
        return phrase;
      }
      else {
        myPhrase = pickPhrase();
      }
  }

// exports.handler = function tweetChronomoteuse(event, context) {
    var phraseToTweet = pickPhrase();
    console.log(phraseToTweet);
  
  // 	T.post('statuses/update', { status: phraseToTweet }, function(err, reply) {
  //             if (err) {
  //               console.log('error:', err);
  //               context.fail();
  //             }
  //             else {
  //               console.log('tweet:', reply);
  //               context.succeed();
  //             }
  //           });
  // };  


