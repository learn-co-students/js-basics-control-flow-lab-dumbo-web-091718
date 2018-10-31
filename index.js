function scuberGreetingForFeet(someDistance) {
  if (someDistance <= 400) {
    return 'This one is on me!'
  }
  else if (someDistance > 2000 && someDistance < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(desiredDestination) {
  return desiredDestination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(passengersTip) {
  switch (passengersTip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
      break;
    }
}
// Write your code in this file!
