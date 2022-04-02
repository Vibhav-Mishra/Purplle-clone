document.querySelector("form").addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault()
    alert("Welcome Back")
    window.location.href="index.html"
}
