
 document.querySelector("form").addEventListener("submit",formSubmit);
 var userStack=JSON.parse(localStorage.getItem("userDatabase")) || [];

  function formSubmit(event){
      event.preventDefault();
      var email=document.querySelector("#email").value;
      var pass = document.querySelector("#pass").value;
      var user = document.querySelector("#user").value;
      var mbl = document.querySelector("#mbl").value;

      var userData={
          emailAdd:email,
          password:pass,
          username:user,
          mobile:mbl
      }

      userStack.push(userData)
      localStorage.setItem("userDataBase",JSON.stringify(userStack));
      alert("signup Successfully")
      window.location.href="login.html";
  }