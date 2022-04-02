document.querySelector("form").addEventListener("submit",formSubmit);
var userStack=JSON.parse(localStorage.getItem("UserDataBase")) || [];
function formSubmit(event)
{
  event.preventDefault();
  var Name=document.querySelector("#cardno").value;
  var cvv=document.querySelector("cvv").value;
  var otp=document.querySelector("#otp").value;

  var userData={
      firstName: fName,
      secondName: sName,
      emailId:email,
      password:pass
  }
  if(userData.emailId=="")
  {
      alert("Enter Email Id");
  }
  if(userData.password=="")
  {
      alert("Enter password");
  }
  userStack.push(userData);
  localStorage.setItem("userDataBase",JSON.stringify(userStack));
  if(userData.emailId=="")
  {
   alert("Enter Email Id");
  }
  if(userData.password=="")
  {
   alert("Enter Password");
  }
  window.location.href="login.html";
}