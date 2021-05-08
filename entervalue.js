function sendvalue (){

	var value = document.getElementById("value").value; 

	localStorage.setItem("value", value)
	window.location.href = "main.html"
}