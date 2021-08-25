// var holder = document.getElementById("connect");


function tes (){
    var holder = document.getElementById("connect");
    holder.style.color = 'red';
   
}

//  function hol (){
//     var botn = document.getElementById("btn");
//      botn.style.background = 'red';
// alert("yes")
//  }
 var user = [];
 

 if(localStorage.getItem("user")==null){

    localStorage.setItem("user",JSON.stringify([]));
}
var againget = localStorage.getItem("user");
if(againget !== null){
    user= JSON.parse(againget);
}
 function store (){

     var inputmob = document.getElementById("nu").value;
     var inputpass = document.getElementById("pas").value;
     if(inputmob.length == 0 || inputmob.length < 10 || inputmob.length > 10){
         alert("Please enter 10 digit vailid Number")
         return;
     }
    else if(inputpass.length < 8){
        alert("Please enter min. 8 char")
        return; 
    }

     if(localStorage.getItem("user") > 0){
    var namedata = localStorage.getItem()
     }

 
    var objuser = {

        name: inputmob,
        password: inputpass,
    }
    user.push(objuser);
  
    localStorage.setItem("user", JSON.stringify(user));


 }
 