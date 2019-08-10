let color = {
    "r": 128,
    "g": 128,
    "b": 128,
}

function changeColor(event) {

    let value = event.value;
    let idx = event.id;
    let hexColor = fullColorToHex(color["r"], color["g"], color["b"]);
    
    color[idx] = value;
    document.querySelector("#b" + idx).innerHTML = value;
    document.querySelector(".color").style.backgroundColor = hexColor;
    document.querySelector(".value").innerHTML = hexColor;

    AutoChangeColorValue();

}

function AutoChangeColorValue() {
    var o = Math.round(((parseInt(color["r"]) * 299) +
        (parseInt(color["g"]) * 587) +
        (parseInt(color["b"]) * 114)) / 1000);
    var fore = (o > 125) ? 'black' : 'white';
    document.querySelector(".value").style.color = fore;
}

function rgbToHex(value) {
    let hex = Number(value).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function fullColorToHex(r, g, b) {
    let rv = rgbToHex(r);
    let gv = rgbToHex(g);
    let bv = rgbToHex(b);
    return "#" + rv + gv + bv;
}

const modal = document.querySelector(".modal");
function openModal() {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

window.addEventListener('resize', function(event){
    var width = getWidth();
    this.console.log(width);
    if(width<=400){
        changeSizeColorPicker(100);
    }
    else if(width<=800){
        changeSizeColorPicker(85);
    }
    else if(width<=1000){
        changeSizeColorPicker(55);
    }
    else if(width<=1200){
        changeSizeColorPicker(45);
    }
    else{
        changeSizeColorPicker(35);
    }
    
});

function changeSizeColorPicker(percent){
    var style = document.getElementsByClassName("layout")[0].style;
    style.width = percent+"%";
}