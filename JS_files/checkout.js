

// var eml=JSON.parse(localStorage.getItem("eml"))
// document.getElementById("email2").textContent=eml;




document.getElementById("form").addEventListener("submit",formSubmit);
	
	function formSubmit(event){
        event.preventDefault()
		alert("Address added successfully")
		window.location.href="./payment.html";
	}