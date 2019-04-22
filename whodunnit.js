const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Prediction: The murderer is Miss Scarlet
// Why: The murderer is declared in the scenario variable which is able to be used by the declareMurderer function which is in turn able to be used by the verdic function
// Actual: The murderer is Miss Scarlet.



const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Professor Plum
// Why: murderer is declared first as a const variable so when changeMurderer tries to declare it as a var type it will already exist and won't allow it to be changed.
// Actual: TypeError: Assignment to constant variable.
// Thoughts after Running: Forgot that trying to change a const variable would just give an error


let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Prediction: First Verdict: Mrs Peacock, Second Verdict: Professor Plum
// Why: firstVerdict uses declareMurder which has a local murderer variable and will use that, secondVerdict will use the murderer variable available to the whole section of code
// Actual: First Verdict:  The murderer is Mrs. Peacock. Second Verdict:  The murderer is Professor Plum.


let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Prediction: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs Peacock
// Why: the variable declaring her as suspectThree is the only one available to the last console.log. The one in declareAllSuspects is only for that variable and won't change the original one
// Actual: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs. Peacock.


const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// Prediction: The weapon is the Revolver
// Why: Objects inside const variables can be changed so the changeWeapon function will work
// Actual: The weapon is the Revolver.


let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Mrs White
// Why: both changeMurderer and plotTwist murderer variable would automatically use var which would be able to change the value of the original let murderer variable. And changeMurderer always calls plotTwist after changing the murderer to Mr Green so it will always be Mrs White after running the changemurderer function.
// Actual: The murderer is Mrs. White.


let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Miss Scarlet
// Why: even though changeMurderer calls the plotTwist function last it is a let variable and will only change the murderer within that function. However the unexpectedOutcome called before it will change the original murderer variable to Miss Scarlet
// Actual: The murderer is Mr. Green.
// Thoughts after running: Would the change of murderer to Miss Scarlet only work on the let murderer = Colonel Mustard above it? If so that would leave the original murderer changed to Mr Green after the first change.


const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Prediction: The weapon is Lead Pipe
// Why: The order plotTwist and unexpectedOutcome are called inside of the changeScenario fucntion means taht the weapon never changes to the candle stick as Colonel Mustard isn't the murderer at that point
// Actual: The weapon is Candle Stick.
// Thoughts after Running: Have now noticed that unexpectedOutcome runs inside the plotTwist function which would change the murderer and therfore change the weapon


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Professor Plum
// Why: The change to the murderer in the if statement only exists inside that statement as it uses let
// Actual: The murderer is Professor Plum.


let murderer = 'Professor Plum';

const changeMurderer = function() {
  let murderer = 'Mrs White';
  
  const unexpectedAlibi = function() {
    if (murderer === 'Mrs White') {
      murderer = 'Mrs Peacock';
    };
    
    const plotTwist = function() {
      const murderer = 'Mr Green'
    };
    
    plotTwist()
  };
  unexpectedAlibi()
};

const declareMurderer = function() {
  return `The murderer is ${murderer}.`
};

changeMurderer()
const verdict = declareMurderer()
console.log(verdict)
