var user = [];


// function tes (){
//     var holder = document.getElementById("nu");
//     holder.style. = '#FFAB91';
// //    holder.style. = '';
// }
// function set (){
//     var holder = document.getElementById("nu");
//     holder.style.background = '#E3F2FD';

// }

//  function hol (){
//     var botn = document.getElementById("btn");
//      botn.style.background = 'red';
// alert("yes")
//  }
var user = [];


if (localStorage.getItem("user") == null) {

    localStorage.setItem("user", JSON.stringify([]));
}
var againget = localStorage.getItem("user");
if (againget !== null) {
    user = JSON.parse(againget);
}
function store() {
    console.log(check());
    var inputmob = document.getElementById("nu").value;
    var inputpass = document.getElementById("pas").value;
    if (inputmob.length == 0 || inputmob.length < 10 || inputmob.length > 10) {

        var msg = document.getElementById("mess");
        msg.innerText = "Please enter vailid Number";
        return;
    }
    else if (inputpass.length < 8) {
        var msg = document.getElementById("mess1");
        msg.innerText = "Please enter min. 8 char";

        return;
    }

    if (localStorage.getItem("user") > 0) {
        var namedata = localStorage.getItem()
    }


    var objuser = {

        name: inputmob,
        password: inputpass,
    }
    user.push(objuser);
    var out = objuser.name;
    localStorage.setItem("user", JSON.stringify(user));
   

}

function check() {
    var inputpass = document.getElementById("pas").value;
    var inputmob = document.getElementById("nu").value;
    var againget = localStorage.getItem("user");
    console.log(user);
    if (againget !== null) {
        var use = JSON.parse(againget);
    }
    var chk= document.getElementById("check");
   for(var i = 0; i < use.length; i++){
       if(use[i].name === inputmob){
           
           var masg = "you are logged in";
           chk.innerText="log"
           return;

       }
   
   if(inputmob.length >  9 && inputpass.length > 7 )
    
    var msg2 ="u singed in success";
  
    return chk.innerText= "ok";
   
   }
}




