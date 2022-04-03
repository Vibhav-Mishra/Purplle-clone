

// var eml=JSON.parse(localStorage.getItem("eml"))
// document.getElementById("email2").textContent=eml;


var pay = (localStorage.getItem("pay1"))
console.log(pay)

document.getElementById("total2").innerText=pay
document.getElementById("total3").innerText=pay


document.getElementById("form").addEventListener("submit",formSubmit);
	
	function formSubmit(event){
        event.preventDefault()
		alert("Address added successfully")
		window.location.href="./payment.html";
	}