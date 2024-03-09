
var num = -1;
function start() {
    
    // let img1 = document.getElementById("img");  
    // photo = "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\).png";
    // img1.src = "photo";
    // console.log(img1); 
    let img = document.getElementById("img");
    console.log(img);
}

function back(){
    let arr = ["img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (1).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (2).png",
                "img/Place\ Your\ Image\ Here\ \(Double\ Click\ To\ Edit\)\ (3).png"];
    let img = document.getElementById("img");
    console.log(img); 
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

start();