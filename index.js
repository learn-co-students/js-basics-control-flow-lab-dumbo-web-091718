// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting;

  if (someValue <= 400) {
    greeting = "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500) {
    greeting = "I will gladly take your thirty bucks."
  } else if  (someValue > 2500){
    greeting = "No can do."
  }
  return greeting
}

function ternaryCheckCity(city) {
  let checker;

  city === "NYC" ? (checker = "Ok, sounds good.") : (checker = "No go.");

  return checker
}

function switchOnCharmFromTip(tip) {
  let charm;

  switch (tip) {
    case 'generous':
      charm = "Thank you so much.";
      break;
    case 'not as generous':
      charm = "Thank you.";
      break;
    default:
      charm = "Bye."
      break
  }
  return charm
}
