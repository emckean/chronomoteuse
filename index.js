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
  
  'things' : [
    'Women', 
    'Bureaucrats', 
    'Robots', 
    'Science-fiction writers', 
    'Dogs', 
    'Cats',
    'Uplifted bunnies',
    'Superintelligent AIs', 
    'Senators', 
    'Mothers', 
    'Anti-heroes',
    'Shamans',
    'Superhumans',
    'Poets',
    'Bartenders',
    'Historians',
    'Dentists',
    'Venture capitalists',
    'Self-styled messiahs',
    'Selfie artists',
    'Brave little toasters',
    'Olympic athletes',
    'Worriers',
    'Self-aware security cameras'
    ],
 
  'result' : [
    'control the government.', 
    'install ad-blockers.',
    'practice \'serious journalism\'',
    'are in charge.', 
    'regularly visit the moon for weekend getaways.',
    'sent Elon Musk to Mars by himself to think about what he\'s done.',
    'brought about the Singularity for lulz.',
    'are made of titanium.', 
    'refuse to use mobile phones.',
    'have nuclear weapons.', 
    'outlawed biowarfare.',
    'have created amusement parks for their favorite YA dystopias.',
    'stopped using the word \'hope\'.',
    'brought about global anarchy.',
    'live in giant airships.',
    'have self-driving jetpacks.',
    'reproduce parthenogenically.',
    'create anime plots via deep learning.',
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
    'dismantled the surveillance state.',
    'all have tiny houses.',
    'never marry.',
    'stopped breathing oxygen.',
    'turned back the sea-level rise.',
    'eradicated the patriarchy.',
    'have incredibly charismatic children.',
    'toppled Facebook.',
    'control the means of production.',
    'give the President wedgies.',
    'administer block grants for graffiti.',
    'never admit defeat.',
    'defer to their in-home automation systems.',
    'work for peace.',
    'sing in virtual choirs.',
    'muster into militia regiments.',
    'connive to steal famous artworks.',
    'are working to build their own time machines! Uh-oh ...',
    'invent new musical instruments.',
    'disenfranchised the rich.',
    'invented a true all-day sucker.',
    'bake IoT cakes.',
    'live on the ocean floor.',
    'run on solar power.',
    'conduct virtual post-mortems.',
    'replace their femurs with titanium',
    'speak only in cryptic crossword clues.'
    ],

  'origin': ['I have traveled to the year #year#. Things are so different here! #things# #result#']
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
    
  if (phraseLengthOK(phrase)) {
     console.log('this is the first second:' + phrase);
      return phrase;
    }
    else {
      console.log('got here!')
      pickPhrase();
    }
  }

exports.handler = function tweetChronomoteuse(event, context) {
    var phraseToTweet = pickPhrase();
   
  
  	T.post('statuses/update', { status: phraseToTweet }, function(err, reply) {
              if (err) {
                console.log('error:', err);
                context.fail();
              }
              else {
                console.log('tweet:', reply);
                context.succeed();
              }
            });
  };  


