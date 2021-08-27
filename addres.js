
var address = [];
var localstorageitem = localStorage.getItem("address");
if (localstorageitem !== null) {
    address = JSON.parse(localstorageitem);
}
function addAddress(){
    var nam = document.getElementById("nam").value;
    var code = document.getElementById("pin").value;
    var stre = document.getElementById("division").value;
    var cit = document.getElementById("cit").value;
    var st = document.getElementById("sta").value;
    var mobi = document.getElementById("phone").value;
    var objpro = {
        name: nam,
        street: stre,
        city: cit,
        state: st,
        pincode: code,
        mobile: mobi,

    } 
    address.push(objpro);
    localStorage.setItem("address",JSON.stringify(address));
};
