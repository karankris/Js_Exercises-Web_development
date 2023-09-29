function validateLoginForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    var ph = document.getElementById("ph").value;
    var user = document.getElementById("uname").value.trim();
    console.log(user);
    // var userformat = /^[A-Za-z]+$/; //give space after[a-z ] to make space between the characters in username
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phformat = /^\d{10}$/; 
    // console.log("email is -->",mailformat.test(email));

    if(email)
    {
    if(mailformat.test(email)==true){
      document.getElementById("email").style="border:3px solid green;";
    document.getElementById("mailerror").style="display:none;"
    document.getElementById("mailvalid").style="display:none;"
    document.getElementById("lgo").style="display: inline-block;"
    }
    else {
    document.getElementById("email").style="border:3px solid red"
    document.getElementById("mailvalid").style="display:block;color:red"
    document.getElementById("mailerror").style="display:none"
    document.getElementById("lgo").style="display: none;"
         console.log("faiure email is required");
    }
  }
    else {
      document.getElementById("email").style="border:3px solid red";
    document.getElementById("mailerror").style="display:block;color:red"
    document.getElementById("mailvalid").style="display:none"
    document.getElementById("lgo").style="display: none;"
    }

 if(password){
  document.getElementById("password").style="border:3px solid green;";
  document.getElementById("passworderror").style="display:none;"
  document.getElementById("lgo1").style="display: inline-block;"
  console.log("Yes goto username");
 }
 else{
  document.getElementById("password").style="border:3px solid red;"
  document.getElementById("passworderror").style="display:inline;color:red"
  document.getElementById("lgo1").style="display: none;"
 }
if(cpass){
if(cpass!=password)
{
document.getElementById("cpassword").style="border:3px solid red;"
  document.getElementById("cpassworderror").style="display:inline;color:red"
  document.getElementById("lgo1.1").style="display:none;"
  document.getElementById("cpassnull").style="display:none;"
}
else if(cpass==password && password)
{
document.getElementById("cpassword").style="border:3px solid green;"
  document.getElementById("cpassworderror").style="display:none;"
  document.getElementById("lgo1.1").style="display: inline-block;"
  document.getElementById("cpassnull").style="display:none;"
}
}
else{
document.getElementById("cpassnull").style="display:inline;color:red"
document.getElementById("cpassworderror").style="display:none;"
document.getElementById("cpassword").style="border:3px solid red;"
document.getElementById("lgo1.1").style="display:none;"
}
 if(ph){
 if(phformat.test(ph)==true)
 {
  document.getElementById("ph").style="border:3px solid green;"
  document.getElementById("pherror").style="display:none;"
  document.getElementById("phvalid").style="display:none;"
  document.getElementById("lgo2").style="display: inline-block;"
 }
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("phvalid").style="display:block;color:red"
document.getElementById("pherror").style="display:none;"
document.getElementById("lgo2").style="display: none;"
}
}
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("pherror").style="display:block;color:red"
document.getElementById("phvalid").style="display:none;"
document.getElementById("lgo2").style="display: none;"
}
if(user)
{
if(user.length>=3)
{
  document.getElementById("uname").style="border:3px solid green;"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("uvalid").style="display:none;"
  document.getElementById("lgo3").style="display: inline-block;"
}
else{
  document.getElementById("uname").style="border:3px solid red;"
  document.getElementById("uvalid").style="display:block; color:red"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("lgo3").style="display: none;"
}
}
else{
document.getElementById("uname").style="border:3px solid red;"
document.getElementById("uerror").style="display:block; color:red"
document.getElementById("uvalid").style="display:none;"
document.getElementById("lgo3").style="display: none;"
}
}
// <!-- //Notes for javascript -->
// <!-- // console.log(" email and password",document.getElementById("email").value); -->
// <!-- // function getCountry(){
//   //     console.log(" country");
//   // }
//   // function trigger()
//   // {
//   //     console.log(" username");
//   // }
//   // onclick
//   // onchange
//   // onkeydown
//   // onkeyup
//   // onmouseover
//   // onkeypress
//   // onblur
// // declerations
// // var let const -->