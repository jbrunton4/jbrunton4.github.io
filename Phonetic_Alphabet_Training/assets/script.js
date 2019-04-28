var score = 0
var qs = 0;

// Add listener for ans check
window.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == '13') {
        checkAns();
    }
}

function newQuestion() {
    // Define English letters
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
           'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '100 (hundred)', '1000 (thousand)'];
    // Define phonetic letters
    const phonetics = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo',
             'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor',
             'Whiskey', 'X-ray', 'Yankee', 'Zulu', 'Wun', 'Too', 'Tree', 'Fow-er', 'Fife', 'Six', 'Sev-en', 'Ait',
             'Niner', 'Ten', 'Zee-ro', ' Hun-dred', 'Tou-sand'];
    // Create a new list containing both lists
    const all = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
           'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '100 (hundred)', '1000 (thousand)', 'Alpha', 'Bravo',
             'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo',
             'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor',
             'Whiskey', 'X-ray', 'Yankee', 'Zulu', 'Wun', 'Too', 'Tree', 'Fow-er', 'Fife', 'Six', 'Sev-en', 'Ait',
             'Niner', 'Ten', 'Zee-ro', ' Hun-dred', 'Tou-sand'];
    // Pick a random to be the question
    var query = all[Math.floor(Math.random() * all.length)];
    // Update the question box with the question
    document.getElementById('questionbox').value = query;
    // Add 1 to questions and update answer box
    document.getElementById('scorecount').value = 'Score : ' + score + '/' + qs;
}

// Define the start function
function start() {
    // Set score to 0
    var score = 0;
    var qs = 0;
    // Update the score counter
    document.getElementById('scorecount').value = 'Score : 0/0 (100%)';
    // Make the first question
    newQuestion();
    document.getElementById('startbutton').value = 'Reset';
}

// Define check answer function
function checkAns() {
	// Get the answer from the input box
    var ans = document.getElementById('ansinput').value;
	// Make the answer lower case to ignore case errors
    ans = ans.toLowerCase();
	// Automatically assume that the answer is not correct
	var correct = false;
	// Large if statement to test if the answer is correct
    if (document.getElementById('questionbox').value == 'Alpha' && ans == 'a') {
        score += 1;
		correct = true;
    } else if (document.getElementById('questionbox').value == 'Alpha' && ans == 'a') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Bravo' && ans == 'b') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Charlie' && ans == 'c') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Delta' && ans == 'd') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Echo' && ans == 'e') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Foxtrot' && ans == 'f') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Golf' && ans == 'g') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Hotel' && ans == 'h') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'India' && ans == 'i') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Juliet' && ans == 'j') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Kilo' && ans == 'k') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Lima' && ans == 'l') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Mike' && ans == 'm') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'November' && ans == 'n') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Oscar' && ans == 'o') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Papa' && ans == 'p') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Quebec' && ans == 'q') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Romeo' && ans == 'r') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Sierra' && ans == 's') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Tango' && ans == 't') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Uniform' && ans == 'u') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Victor' && ans == 'v') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Whiskey' && ans == 'w') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'X-ray' && ans == 'x') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Yankee' && ans == 'y') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Zulu' && ans == 'z') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'A' && ans == 'alpha') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'B' && ans == 'beta') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'C' && ans == 'charlie') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'D' && ans == 'delta') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'E' && ans == 'echo') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'F' && ans == 'foxtrot') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'G' && ans == 'golf') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'H' && ans == 'hotel') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'I' && ans == 'india') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'J' && ans == 'juliet') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'K' && ans == 'kilo') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'L' && ans == 'lima') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'M' && ans == 'mike') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'N' && ans == 'november') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'O' && ans == 'oscar') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'P' && ans == 'papa') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Q' && ans == 'quebec') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'R' && ans == 'romeo') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'S' && ans == 'sierra') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'T' && ans == 'tango') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'U' && ans == 'uniform') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'V' && ans == 'victor') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'W' && ans == 'whiskey') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'X' && ans == 'x-ray') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Y' && ans == 'yankee') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Z' && ans == 'zulu') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '1' && ans == 'wun') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '2' && ans == 'too') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '3' && ans == 'tree') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '4' && ans == 'fow-er') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '5' && ans == 'fife') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '6' && ans == 'six') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '7' && ans == 'sev-en') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '8' && ans == 'ait') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '9' && ans == 'niner') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '0' && ans == 'zee-ro') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '100 (hundred)' && ans == 'hun-dred') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == '1000 (thousand)' && ans == 'tou-sand') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Wun' && ans == '1') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Too' && ans == '2') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Tree' && ans == '3') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Fow-er' && ans == '4') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Fife' && ans == '5') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Six' && ans == '6') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Sev-en' && ans == '7') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Ait' && ans == '8') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Niner' && ans == '9') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Zee-ro' && ans == '0') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Hun-dred' && ans == '100') {
        score += 1;
		correct = true;
    }  else if (document.getElementById('questionbox').value == 'Tou-sand' && ans == '1000') {
        score += 1;
		correct = true;
    } else {
        score += 0;
		correct = false;
    }
	
	// Increment questions variable
    qs += 1;
	
	// If the answer is false, correct it
	if (correct == false && document.getElementById('questionbox').value == 'A') {
		alert('The correct answer was: Alpha.');
	} else if (correct == false && document.getElementById('questionbox').value == 'B') {
		alert('The correct answer was: Bravo.');
	} else if (correct == false && document.getElementById('questionbox').value == 'C') {
		alert('The correct answer was: Charlie.');
	} else if (correct == false && document.getElementById('questionbox').value == 'D') {
		alert('The correct answer was: Delta.');
	} else if (correct == false && document.getElementById('questionbox').value == 'E') {
		alert('The correct answer was: Echo.');
	} else if (correct == false && document.getElementById('questionbox').value == 'F') {
		alert('The correct answer was: Foxtrot.');
	} else if (correct == false && document.getElementById('questionbox').value == 'G') {
		alert('The correct answer was: Golf.');
	} else if (correct == false && document.getElementById('questionbox').value == 'H') {
		alert('The correct answer was: Hotel.');
	} else if (correct == false && document.getElementById('questionbox').value == 'I') {
		alert('The correct answer was: India.');
	} else if (correct == false && document.getElementById('questionbox').value == 'J') {
		alert('The correct answer was: Juliet.');
	} else if (correct == false && document.getElementById('questionbox').value == 'K') {
		alert('The correct answer was: Kilo.');
	} else if (correct == false && document.getElementById('questionbox').value == 'L') {
		alert('The correct answer was: Lima.');
	} else if (correct == false && document.getElementById('questionbox').value == 'M') {
		alert('The correct answer was: Mike.');
	} else if (correct == false && document.getElementById('questionbox').value == 'N') {
		alert('The correct answer was: November.');
	} else if (correct == false && document.getElementById('questionbox').value == 'O') {
		alert('The correct answer was: Oscar.');
	} else if (correct == false && document.getElementById('questionbox').value == 'P') {
		alert('The correct answer was: Papa.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Q') {
		alert('The correct answer was: Quebec.');
	} else if (correct == false && document.getElementById('questionbox').value == 'R') {
		alert('The correct answer was: Romeo.');
	} else if (correct == false && document.getElementById('questionbox').value == 'S') {
		alert('The correct answer was: Sierra.');
	} else if (correct == false && document.getElementById('questionbox').value == 'T') {
		alert('The correct answer was: Tango.');
	} else if (correct == false && document.getElementById('questionbox').value == 'U') {
		alert('The correct answer was: Uniform.');
	} else if (correct == false && document.getElementById('questionbox').value == 'V') {
		alert('The correct answer was: Victor.');
	} else if (correct == false && document.getElementById('questionbox').value == 'W') {
		alert('The correct answer was: Whiskey.');
	} else if (correct == false && document.getElementById('questionbox').value == 'X') {
		alert('The correct answer was: X-ray.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Y') {
		alert('The correct answer was: Yankee.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Z') {
		alert('The correct answer was: Zulu.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Alpha') {
		alert('The correct answer was: A.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Beta') {
		alert('The correct answer was: B.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Charlie') {
		alert('The correct answer was: C.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Delta') {
		alert('The correct answer was: D.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Echo') {
		alert('The correct answer was: E.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Foxtrot') {
		alert('The correct answer was: F.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Golf') {
		alert('The correct answer was: G.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Hotel') {
		alert('The correct answer was: H.');
	} else if (correct == false && document.getElementById('questionbox').value == 'India') {
		alert('The correct answer was: I.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Juliet') {
		alert('The correct answer was: J.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Kilo') {
		alert('The correct answer was: K.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Lima') { 
	alert('The correct answer was: L.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Mike') {
		alert('The correct answer was: M.');
	} else if (correct == false && document.getElementById('questionbox').value == 'November') {
		alert('The correct answer was: N.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Oscar') {
		alert('The correct answer was: O.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Papa') {
		alert('The correct answer was: P.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Quebec') {
		alert('The correct answer was: Q.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Romeo') {
		alert('The correct answer was: R.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Sierra') {
		alert('The correct answer was: S.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Tango') {
		alert('The correct answer was: T.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Uniform') {
		alert('The correct answer was: U.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Victor') {
		alert('The correct answer was: V.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Whiskey') {
		alert('The correct answer was: W.');
	} else if (correct == false && document.getElementById('questionbox').value == 'X-ray') {
		alert('The correct answer was: X.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Yankee') {
		alert('The correct answer was: Y.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Zulu') {
		alert('The correct answer was: Z.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Wun') {
		alert('The correct answer was: 1.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Too') {
		alert('The correct answer was: 2.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Tree') {
		alert('The correct answer was: 3.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Fow-er') {
		alert('The correct answer was: 4.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Fife') {
		alert('The correct answer was: 5.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Six') {
		alert('The correct answer was: 6.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Sev-en') {
		alert('The correct answer was: 7.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Ait') {
		alert('The correct answer was: 8.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Niner') {
		alert('The correct answer was: 9.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Zee-ro') {
		alert('The correct answer was: 0.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Hun-dred') {
		alert('The correct answer was: 100.');
	} else if (correct == false && document.getElementById('questionbox').value == 'Tou-sand') {
		alert('The correct answer was: 1000.');
	} else if (correct == false && document.getElementById('questionbox').value == '1') {
		alert('The correct answer was: Wun.');
	} else if (correct == false && document.getElementById('questionbox').value == '2') {
		alert('The correct answer was: Too.');
	} else if (correct == false && document.getElementById('questionbox').value == '3') {
		alert('The correct answer was: Tree.');
	} else if (correct == false && document.getElementById('questionbox').value == '4') {
		alert('The correct answer was: Fow-er.');
	} else if (correct == false && document.getElementById('questionbox').value == '5') {
		alert('The correct answer was: Fife.');
	} else if (correct == false && document.getElementById('questionbox').value == '6') {
		alert('The correct answer was: Six.');
	} else if (correct == false && document.getElementById('questionbox').value == '7') {
		alert('The correct answer was: Sev-en.');
	} else if (correct == false && document.getElementById('questionbox').value == '8') {
		alert('The correct answer was: Ait.');
	} else if (correct == false && document.getElementById('questionbox').value == '9') {
		alert('The correct answer was: Niner.');
	} else if (correct == false && document.getElementById('questionbox').value == '0') {
		alert('The correct answer was: Zee-ro.');
	} else if (correct == false && document.getElementById('questionbox').value == '100 (Hundred)') {
		alert('The correct answer was: Hun-dred.');
	} else if (correct == false && document.getElementById('questionbox').value == '1000 (Thousand)') {
		alert('The correct answer was: Tou-sand.');
	}
	
	// If the answer is blank, ask for one. Else, make a new question and test if the game is over.
    if (ans == '') {
		alert('Please provide an answer.');
	} else {
		var totalPercent = Math.floor(score / qs * 100);
		document.getElementById('scorecount').value = 'Score : ' + score + '/' + qs + '(' + totalPercent+ '%)';
		newQuestion();
		document.getElementById('ansinput').value = '';
        if (qs >= 100) {
            if (score == 100) {
                window.location.href = 'Endpages/fullscore.html';
            } else if (score >= 80) {
                window.location.href = 'Endpages/nofullscore.html';
            } else if (score < 80) {
                window.location.href = 'Endpages/lowscore.html';
            }
        } 
	}
}

