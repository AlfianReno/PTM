kali.onclick = function () {
    let a = Number(document.querySelector("#bil1").value);
    let b = Number(document.querySelector("#bil2").value);
    let c = a * b;
    document.querySelector("#hasil").innerHTML = c;
}

bagi.onclick = function () {
    let a = Number(document.querySelector("#bil1").value);
    let b = Number(document.querySelector("#bil2").value);
    let c = a / b;
    document.querySelector("#hasil").innerHTML = c;
}

tambah.onclick = function () {
    let a = Number(document.querySelector("#bil1").value);
    let b = Number(document.querySelector("#bil2").value);
    let c = a + b;
    document.querySelector("#hasil").innerHTML = c;
}

kurang.onclick = function () {
    let a = Number(document.querySelector("#bil1").value);
    let b = Number(document.querySelector("#bil2").value);
    let c = a - b;
    document.querySelector("#hasil").innerHTML = c;
}



// let bil1 = document.querySelector("#bil1");
// let bil2 = document.querySelector("#bil2");
// let hasil = document.querySelector("#hasil");
// kali.onclick = function () {
//     let a = Number(bil1.value);
//     let b = Number(bil2.value);
//     let c = a * b;
//     hasil.innerHTML = c;
    
// }
// bagi.onclick = function () {
//     let a = Number(bil1.value);
//     let b = Number(bil2.value);
//     let c = a / b;
//     hasil.innerHTML = c;
    
// }
// tambah.onclick = function () {
//     let a = Number(bil1.value);
//     let b = Number(bil2.value);
//     hasil.innerHTML = c;
    
// }
// kurang.onclick = function () {
//     let a = Number(bil1.value);
//     let b = Number(bil2.value);
//     let c = a - b;
//     hasil.innerHTML = c;
    
// }

function halo () {
    alert("tes");
}



