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

 
var user = [];


if (localStorage.getItem("user") == null) {

    localStorage.setItem("user", JSON.stringify([]));
}
var againget = localStorage.getItem("user");
if (againget !== null) {
    user = JSON.parse(againget);
}

function store() {
    check();
    var inputmob = document.getElementById("nu").value;
    var inputpass = document.getElementById("pas").value;
    if (inputmob.length == 0 || inputmob.length < 10 || inputmob.length > 10) {

        var msg = document.getElementById("mess");
        
        msg.innerText = "Please enter vailid Number";
        
        return ;
      
    }
   
    else if (inputpass.length < 8) {
        var msg = document.getElementById("mess1");
        msg.innerText = "Please enter min. 8 char";
        var msg1 = document.getElementById("mess");
        msg1.innerText = "";
        return;
     
    }
    var msg1 = document.getElementById("mess");
    var msg2 = document.getElementById("mess1");
    msg1.innerText = "";
    msg2.innerText = "";
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
   document.getElementById("nu").value = "";
   document.getElementById("pas").value = "";
   
   
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
         if(use[i].password === inputpass){  
           var masg = "you are logged in";
           chk.innerText="log"
           return;
         }else {
             chk.innerText="wrong password"
             return;
         }
       }
   
  else if(inputmob.length === 10 && inputpass.length > 7 )
    
    {var msg2 ="u singed in success";
  
    return chk.innerText= "signup";}
   
   }
//    msg.value = "";
}

// document.getElementById("mess").value= "";

// document.getElementById("mess1").value = "";

function hol (){
    var botn = document.getElementById("btn");
     botn.style.background = 'red';
     botn.style.color = 'white';

 }
function fun(){
    var bt = document.getElementById("btn");
    bt.style.background = 'white';
   bt.style.color = 'red';
}
// function bottom(){
//     var btm = document.getElementById("nu");
//     btm.style.border-bottom: 'red';
// }