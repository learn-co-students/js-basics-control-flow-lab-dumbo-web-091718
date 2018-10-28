// Write your code in this file!
function scuberGreetingForFeet(feet) {
  let message;
   if (feet > 2500) {
     message = "No can do."
   } else if (feet > 2000) {
      message = "I will gladly take your thirty bucks."
   } else if (feet < 200) {
     message =  "This one is on me!"
   }
    return message
}

function ternaryCheckCity(city) {
  let message;

    if (city == "NYC") {
      message = "Ok, sounds good."
    } else {
      message = "No go."
    }
    return message
}

function switchOnCharmFromTip(tip) {

  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}
