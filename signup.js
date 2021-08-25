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

 function store (){

     var inputmob = document.getElementById("nu");
     var inputpass = document.getElementById("pas");
     localStorage.setItem("username", JSON.stringify(inputmob.value));
     localStorage.setItem("password",JSON.stringify(inputpass.value));

 }
 if(localStorage.getItem("username && password")==null){
    localStorage.setItem("username",JSON.stringify([]));
    localStorage.setItem("password",JSON.stringify([]));
}