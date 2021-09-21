
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

if((code.length ==6) && (stre.length > 0) && (name.length > 0) && (cit.length > 0) && (st.length > 0) && (cit.length > 0) && (mob.length == 10)){
    console.log("yes");

} else{
    console.log("no");
}

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


let card_data = JSON.parse(localStorage.getItem("card"));
console.log("card_data:", card_data);

var total = 0;
    var totalitem =0;

    card_data.forEach(function (product) {
        var out = product.price;
        var x = out.replace("₹","0")
         total = total + Number(x);
         totalitem = totalitem+Number(1);
    });
    var total_h1 = document.getElementById("mrp");
    if(total_h1){
    total_h1.innerHTML = "cart value -"+total;}
    
   