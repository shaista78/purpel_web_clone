var holder = document.getElementById("connect");


function tes (){
    var holder = document.getElementById("connect");
    holder.style.color = 'red';
   
}
// holder.addEventListener('mous', tes);
 function hol (){
    var botn = document.getElementById("btn");
     botn.style.background = 'red';
alert("yes")
 }
 var user = [];
 var cred = [];
//  var localstorageitem = localStorage.getItem("jwel");
 if(localStorage.getItem("cred")==null){

    localStorage.setItem("user",JSON.stringify([]));
    localStorage.setItem("cred",JSON.stringify([]));
}
 function store (){

     var inputmob = document.getElementById("nu").value;
     var inputpass = document.getElementById("pas").value;
    //  localStorage.setItem("username", JSON.stringify(inputmob.value));
    //  localStorage.setItem("password",JSON.stringify(inputpass.value));
    // var objcred = {
    //     password: inputpass
    // }
    // var objuser = {
    //     name: inputmob,
    // }
    user.push(inputmob);
    cred.push(inputpass);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("cred", JSON.stringify(cred));

 }
 