
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


let card_data = JSON.parse(localStorage.getItem("card"));
console.log("card_data:", card_data);

var total = 0;
    var totalitem =0;

    card_data.forEach(function (product) {
        var out = product.price;
        var x = out.replace("₹","0")
         total = total + Number(x);
        //  console.log(total);
         totalitem = totalitem+Number(1);
    });
    console.log(total);
    var tot = document.getElementById("abc");

    tot.innerHTML =total;
    // var di = document.getElementById("smallbox");
    // di.append(total_h1);
   

    // var totalitems = document.getElementById("totalitem");

    // totalitems.innerText = `Total Items  - ${(totalitem)}`

   