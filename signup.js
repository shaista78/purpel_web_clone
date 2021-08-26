var user = [];


<<<<<<< HEAD
if (localStorage.getItem("user") == null) {

=======
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

>>>>>>> 2cea9d83acb3d488e618801e84c7ab29ccf43094
    localStorage.setItem("user", JSON.stringify([]));
}
var againget = localStorage.getItem("user");
if (againget !== null) {
    user = JSON.parse(againget);
}
function store() {

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
    check(out);

}

function check(out) {
    var againget = localStorage.getItem("user");
    console.log(user);
    if (againget !== null) {
        user = JSON.parse(againget);
    }
    if (user.some(function (el) {
        if ((el.name === out)) {
            alert("congrats")
        }
    }));
<<<<<<< HEAD
}
=======
}




>>>>>>> 2cea9d83acb3d488e618801e84c7ab29ccf43094
