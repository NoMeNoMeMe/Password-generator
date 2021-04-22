
function generate() {
  let charset = [];
  let big_b = document.getElementById('upper').checked;
  let small_b = document.getElementById('lower').checked;
  let numbers_b = document.getElementById('numbers').checked;
  let signs_b = document.getElementById('special').checked;
  let len = document.getElementById('pass_length').value;
  let pass = '';
  if (big_b) {
    charset.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }
  if (small_b) {
    charset.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }

  if (numbers_b) {
    charset.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
  }

  if (signs_b) {
    charset.push('!', '@', '#', '$', '%', '^', '&', '*', '+', '+', '?');
  }

  for (let i = 0; i < len; i++) {
    char = charset[Math.floor(Math.random()*charset.length)];
    pass += char;
  }

  document.getElementById('result').innerHTML = pass;
}


window.addEventListener("load", function() {
  document.getElementById('generate').addEventListener('click', generate);
});


window.addEventListener("load", function() {
  document.querySelector('#pass_length').addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      generate();
    }
  }); 
}); 


