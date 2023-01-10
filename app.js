const bt = document.querySelector("#bt");
const dev = document.querySelector("#con")
const txt = document.querySelector("h3");

function ran(){
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    let txt = `RGB(${r},${g},${b})`;
    return txt;
}

bt.addEventListener('click' , () => {
    document.querySelector("#d1").style.backgroundColor = ran();
    document.querySelector("#d2").style.backgroundColor = ran();
    document.querySelector("#d3").style.backgroundColor = ran();
    document.querySelector("#d4").style.backgroundColor = ran();
    document.querySelector("#d5").style.backgroundColor = ran();
    document.querySelector("#d6").style.backgroundColor = ran();
})