document.querySelector("form").addEventListener("submit",login);

var regUsers=JSON.parse(localStorage.getItem("userDataBase")) || [];


 function login(event){
     event.preventDefault()
  var mob=document.querySelector("#mob").value;

  var ans=true;

  for(var i=0;i<regUsers.length;i++)
  {
      if(regUsers[i].mobile==mob){
          window.location.href="otp.html"
          localStorage.setItem("eml",JSON.stringify(regUsers[i].emailAdd))
          ans=false;

          alert("Enter otp");
      }
   
  }
  if(ans){
      window.location.href="signup.html"

      alert("Number is not registered please signup first or enter registered number");
  }

 }