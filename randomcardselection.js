function selectCardSpade() {

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

var getsuit = document.getElementById("Spades").value

var final = getcheckeditem+getsuit

console.log(final)
localStorage.setItem("sendcard", final)
window.location.href = "randomcard.html"
}

function selectCardHeart() {

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

var getsuit = document.getElementById("Hearts").value

var final = getcheckeditem+getsuit

console.log(final)
localStorage.setItem("sendcard", final)
window.location.href = "randomcard.html"
}

function selectCardDiamonds() {

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

var getsuit = document.getElementById("Diamonds").value

var final = getcheckeditem+getsuit

console.log(final)
localStorage.setItem("sendcard", final)
window.location.href = "randomcard.html"
}

function selectCardClubs() {

var getcheckeditem = document.querySelector('input[name="item"]:checked').value;

var getsuit = document.getElementById("Clubs").value

var final = getcheckeditem+getsuit

console.log(final)
localStorage.setItem("sendcard", final)
window.location.href = "randomcard.html"
}