

var a: any[];
a = [];
function inputval() {
    const inputq = document.getElementById("in1") as HTMLInputElement | null;
    var finput: any = inputq?.value;

    // a.push(finput);
    // console.log(a[0]);



    var b: number = 0;
    for (let j = 0; j < finput; j++) {
        b++;

        a.push(b);




    }
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);


    }

}

function popval() {
    a.pop();

    let w = a[a.length - 1];
    console.log(w);
    if (w < 5) {
        alert("Reorder Request Send Successful  ")
    }
    else {
        console.log("you can continue");

    }

    const dis1 = document.getElementById("p1");
    let dispro = document.createElement("p");
    dispro.innerHTML = "the remaining product are :- " + " " + w;
    dis1?.append(dispro);

}
