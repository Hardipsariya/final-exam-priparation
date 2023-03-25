var a;
a = [];
function inputval() {
    var inputq = document.getElementById("in1");
    var finput = inputq === null || inputq === void 0 ? void 0 : inputq.value;
    // a.push(finput);
    // console.log(a[0]);
    var b = 0;
    for (var j = 0; j < finput; j++) {
        b++;
        a.push(b);
    }
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
function popval() {
    a.pop();
    var w = a[a.length - 1];
    console.log(w);
    if (w < 5) {
        alert("Reorder Request Send Successful  ");
    }
    else {
        console.log("you can continue");
    }
    var dis1 = document.getElementById("p1");
    var dispro = document.createElement("p");
    dispro.innerHTML = "the remaining product are :- " + " " + w;
    dis1 === null || dis1 === void 0 ? void 0 : dis1.append(dispro);
}
