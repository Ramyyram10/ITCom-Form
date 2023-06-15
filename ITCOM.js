var currentCard = 1;
var totalCards = 4;

function showCard(cardNumber) {
    document.getElementById('card' + cardNumber).classList.remove('hidden');
}

function hideCard(cardNumber) {
    document.getElementById('card' + cardNumber).classList.add('hidden');
}

function nextCard() {
    if (currentCard < totalCards) {
        hideCard(currentCard);
        currentCard++;
        showCard(currentCard);
}
}	

function previousCard() {
    if (currentCard > 1) {
hideCard(currentCard);
currentCard--;
showCard(currentCard);
}
}
const inputField = document.getElementById('myInput');

function checkInputField() {
if (inputField.value.trim() === '') {
inputField.focus();
}
}
// Function to check if the input field is empty
function checkInputField() {
var inputField = document.getElementById('myInput');
if (inputField.value === '') {
alert('Input field is empty!');
}
}
function checkInputs() {
const cards = document.getElementsByClassName('card hidden');
let isEmpty = false;

for (let i = 0; i < cards.length; i++) {
const inputField = cards[i].querySelector('.input-field');
if (inputField.value === '') {
isEmpty = true;
break;
}
}

if (isEmpty) {
alert('One or more input fields are empty!');
}
}


function validateForm() {

    // var inputValue = document.getElementById("myInput").value;
    var array = [document.getElementById("myInput").value,document.getElementById("myInput2").value,document.getElementById("myInput3").value,document.getElementById("myInput4").value,document.getElementById("myInput5").value ];
    for (let i = 0; i <array.length; i++) {
        if (array[i] === null || array[i].trim() === "") {
     
            myFunction()
         return false;
       }
      }
    
  }

function myFunction() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}