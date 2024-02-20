// let a = document.querySelector("text");
// let a = document.getElementById("text");
// console.log(a);

function data() {
    let a = document.getElementById('text').value;
    
    let words = a.split(" ").length
    document.getElementById("words").innerHTML = words

    let length = a.length;
    document.getElementById("char").innerHTML = length

    let char_space = a.split(" ").join("").length;
    document.getElementById("char_space").innerHTML = char_space;

    let sentences = a.split(". ").length;
    document.getElementById("sentence").innerHTML = sentences

    let reading = words/3
    let min = (words/4)/59;
    reading = reading%60
    if(parseInt(reading) == 59){
        reading = 0; 
    }
    // console.log(`${parseInt(min)} : ${parseInt(reading)}`);
    let Reading_time = `${parseInt(min)} : ${parseInt(reading)}`;
    document.getElementById("read").innerHTML = Reading_time;


    let speaking = words/4;
    let min2 = (words/4)/59;
    if (parseInt(speaking )==59) {
        speaking = 0;
    }
    // console.log(speaking);
    let speaking_time = `${parseInt(min2)}`
}