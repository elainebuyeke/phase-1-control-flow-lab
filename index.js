function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";  // Free ride for 400 feet or less
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";  // $20 for distances between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";  // $30 for distances between 2000 and 2500 feet
  } else {
    return "No can do.";  // No ride for distances over 2500 feet
  }}
  // Write your code here!
  
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
  // Write your code here!
  
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    case "no tip":
      return "Bye.";
    default:
      return "Bye.";
  }
}
  // Write your code here!