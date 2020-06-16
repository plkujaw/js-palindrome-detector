const Phrase = require("plkujaw-palindrome");

function palindromeTester() {

  let string = prompt("Please enter a string to test:");
  let phrase = new Phrase(string);

  if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome.`);
  } else {
    alert(`"${phrase.content}" is not a palindrome.`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", function() {
    palindromeTester();
  });
});
