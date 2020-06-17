const Phrase = require("plkujaw-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `<em><strong>${phrase.content}</strong></em> is a palindrome`;
  } else {
    palindromeResult.innerHTML = `<em><strong>${phrase.content}</strong></em> is not a palindrome`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});
