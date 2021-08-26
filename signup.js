var user = [];


if (localStorage.getItem("user") == null) {

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
}