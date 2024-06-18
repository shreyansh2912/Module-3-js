let tag = document.getElementById("panel");
let audio = document.getElementById("audio");
let details = document.getElementById("details")
let input =  document.getElementById("input")
let dec = document.getElementById("decre");
let inc = document.getElementById("incre");
let datalen 
let decre = 1;
let incre = 10;
let pagi = document.getElementById("count")
let pagiCover = document.getElementById("pagiCover");

function calc(ele) {
    if(ele == "decre"){
        decre = decre-10;
        incre = incre-10;
        inc.disabled = false
        if(decre == 1) dec.disabled = true;
        if(incre%10 != 0) {
            let mod = incre%10;
            incre = incre+10-mod;
        }
    }
    else if(ele == "incre"){
        decre = decre + 10;
        incre = incre + 10;
        dec.disabled = false;
        if(incre > datalen){
            inc.disabled = true;
            incre = datalen;
        }  
    }
    pagiCover.style.display = "block";
    fetch("data.json")
    .then((res)=>{ return res.json()})
    .then((data)=>{
    let song = ""; 
    datalen = data.length;
    d = decre-1; l = incre-1; 
            for (let i = d; i <= l; i++) {   
                song +=`<div class="song panel">
                    Song : ${data[i].title}
                    <button onclick="handle(this,'${data[i].src}','${data[i].title}')">Play</button> 
                </div>`
            }
        pagi.innerHTML=`${decre} To ${incre}`
        tag.innerHTML = song;
    })
};

let handle = (e,src,title)=>{
    audio.src = "Audio/"+src+".mp3";
    details.innerHTML = "Song : "+title;
};

let handleSearch = ()=>{
    pagiCover.style.display = "none";
    let count = 0;
    let val = input.value.replaceAll(" ","")
    fetch("data.json")
    .then((res)=>{ return res.json()})
    .then((data)=>{
        let song = "";
        for (let i = 0; i < data.length; i++) {
            let newData = data[i].title.replaceAll(" ","")
            newData = newData.toLocaleLowerCase()
            val = val.toLocaleLowerCase();
            if(newData.search(val) != -1){
                song +=`
                <div class="song panel">
                    Song : ${data[i].title}
                    <button onclick="handle(this,'${data[i].src}','${data[i].title}')">Play</button> 
                </div>`
                count++;    
            }                
        }
        if(count == 0){
            song = `
            <div class="song panel" style="text-align:center; font-size:25px; padding:10px"> Song not found 🙁</div>`
        } 
        tag.innerHTML = song;
    })
};

let home = ()=>{
    calc("home");
}
home();