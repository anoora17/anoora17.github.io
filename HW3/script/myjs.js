
// Draw the canvas
// function drawCanvas() {
//     var c = canvas.getContext('2d');
//     // reset the canvas and set basic styles
//     canvas.width = canvas.width;
//     c.lineWidth = 10;
//     c.strokeStyle = 'green';
//     c.font = 'bold 24px Optimer, Arial, Helvetica, sans-serif';
//     c.fillStyle = 'red';
//     // draw the ground
//     drawLine(c, [20,190], [180,190]);
//     // start building the gallows if there's been a bad guess
//     if (badGuesses > 0) {
//         // create the upright
//         c.strokeStyle = '#A52A2A';
//         drawLine(c, [30,185], [30,10]);
//         if (badGuesses > 1) {
//             // create the arm of the gallows
//             c.lineTo(150,10);
//             c.stroke();
//         }
//         if (badGuesses > 2) {
//             c.strokeStyle = 'black';
//             c.lineWidth = 3;
//             // draw rope
//             drawLine(c, [145,15], [145,30]);
//             // draw head
//             c.beginPath();
//             c.moveTo(160, 45);
//             c.arc(145, 45, 15, 0, (Math.PI/180)*360);
//             c.stroke(); 
//         }
//         if (badGuesses > 3) {
//             // draw body
//             drawLine(c, [145,60], [145,130]);
//         }
//         if (badGuesses > 4) {
//             // draw left arm
//             drawLine(c, [145,80], [110,90]);
//         }
//         if (badGuesses > 5) {
//             // draw right arm
//             drawLine(c, [145,80], [180,90]);
//         }
//         if (badGuesses > 6) {
//             // draw left leg
//             drawLine(c, [145,130], [130,170]);
//         }
//         if (badGuesses > 7) {
//             // draw right leg and end game
//             drawLine(c, [145,130], [160,170]);
//             c.fillText('Game over', 45, 110);
//             // remove the alphabet pad
//             letters.innerHTML = '';
//             // display the correct answer
//             // need to use setTimeout to prevent race condition
//             setTimeout(showResult, 200);
//             // increase score of lost games
//             // display the score after two seconds
//             // code to be added later
//         }
//     }
//     // if the word has been guessed correctly, display message,
//     // update score of games won, and then show score after 2 seconds
//     if (correctGuesses == wordLength) {
//         letters.innerHTML = '';
//         c.fillText('You won!', 45,110);
//         // increase score of won games
//         // display score
//         // code to be added later
//     }
// }
// Note the following points:

// The font stack specifies Optimer as the first font. This is for browsers that don't support canvas text. You'll load a JavaScript font for older browsers later.
// The head is drawn using the arc() method, which requires the start and end angles to be specified in radians. To convert degrees to radians, you divide π (pi) by 180 and multiply the result by the number of degrees. Setting the start to 0 and the end to 360 degrees is how you draw a complete circle. When drawing a partial arc, a start angle of 0 starts drawing from the 3 o'clock position.
// If the word hasn't been guessed by the end of the game, the showResult() function—which you'll define next—displays the correct result. However, in testing, I found it necessary to delay its execution for 0.2 seconds using setTimeout() . Otherwise, the result fails to appear.
// Code for displaying the score will be added later.
// Displaying the correct answer

// Playing Hangman can be frustrating, so you need to take losers out of their misery by revealing the word they failed to guess. The showResult() function does just that. It's simply an adaptation of the loop in the checkLetter() function, so it needs little explanation. Here's what it looks like:

// // When the game is over, display missing letters in red
// function showResult() {
//     var placeholders = word.innerHTML;
//     placeholders = placeholders.split('');
//     for (i = 0; i < wordLength; i++) {
//         if (placeholders[i] == '_') {
//         placeholders[i] = '<span style="color:red">' + wordToGuess.charAt(i).toUpperCase() + '</span>';
//         }
//     }
//     word.innerHTML = placeholders.join('');
// }


// ///






// / Global variables
// var canvas = document.getElementById('stage'),
// 	word = document.getElementById('word'),
// 	letters = document.getElementById('letters'),
// 	wordToGuess,
// 	wordLength,
// 	badGuesses,
// 	correctGuesses;

// function init() {
// 	var helptext = $('#helptext'),
// 		w = screen.availWidth <= 800 ? screen.availWidth : 800;
	
// 	// Hide the loading message and display the control buttons
// 	$('#loading').hide();
// 	$('#play').css('display', 'inline-block').click(newGame);
// 	$('#clear').css('display', 'inline-block').click(resetScore);
// 	$('#help').click(function(e) {
// 		$('body').append('<div id="mask"></div>');
//         helptext.show().css('margin-left', (w-300)/2 + 'px');
//     });
// 	$('#close').click(function(e) {
// 		$('#mask').remove();
//         helptext.hide();
//     });
	
// 	// Rescale the canvas if the screen is wider than 700px
// 	if (screen.innerWidth >= 700) {
// 		canvas.getContext('2d').scale(1.5, 1.5);
// 	}
// }

// function newGame() {
// 	var placeholders = '',
// 		frag = document.createDocumentFragment(),
// 		abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// 	badGuesses = 0;
// 	correctGuesses = 0;
// 	wordToGuess = getWord();
// 	wordLength = wordToGuess.length;
// 	// create row of underscores the same length as letters to guess
// 	for (var i = 0; i < wordLength; i++) {
// 		placeholders += '_';
// 	}
// 	word.innerHTML = placeholders;
// 	// create an alphabet pad to select letters
// 	letters.innerHTML = '';
// 	for (i = 0; i < 26; i++) {
// 		var div = document.createElement('div');
// 		div.style.cursor = 'pointer';
// 		div.innerHTML = abc[i];
// 		div.onclick = getLetter;
// 		frag.appendChild(div);
// 	}
// 	letters.appendChild(frag);
// }

// // Get selected letter and remove it from the alphabet pad
// function getLetter() {
// 	checkLetter(this.innerHTML);
// 	this.innerHTML = '&nbsp;';
// 	this.style.cursor = 'default';
// 	this.onclick = null;
// }

// // Check whether selected letter is in the word to be guessed
// function checkLetter(letter) {
	
// }

function resetScore() {
	alert('Score has been reset');
}

// Select random word to guess
function getWord() {
  var a = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return a[parseInt(Math.random()* a.length)];
}

