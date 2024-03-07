
var num = -1;
let img = document.getElementById("img");   
img.src = "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\).png";

function back(){
    let arr = ["img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (1).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (2).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (3).png"];
    let img = document.getElementById("img"); 
    num--
    if (num < 0) {
        num = 0;
    }
    console.log(num);   
    img.src = arr[num]
}

function next(){
    let arr = ["img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (1).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (2).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (3).png"];
    let img = document.getElementById("img"); 
    if(num > 2){
        num = 2;
    }
    console.log(num);   
    num++ 
    img.src = arr[num]   
}