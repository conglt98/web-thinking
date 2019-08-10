function display(input) {
    for (let file of input.files){
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("photos").innerHTML += `<img src="`+e.target.result+`"/>`;
        };
        reader.readAsDataURL(file);
    }
    
}

function removeAll(){
    let file = document.getElementById("f")
    let myDiv = document.getElementById("photos")
    while (myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
    file.value = ""
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

    if(width<=400){
        changeColumnCount(1);
    }
    else if(width<=800){
        changeColumnCount(2);
    }
    else if(width<=1000){
        changeColumnCount(3);
    }
    else if(width<=1200){
        changeColumnCount(4);
    }
    else{
        changeColumnCount(5);
    }
    
});

function changeColumnCount(size){
    var style = document.getElementById('photos').style;
    style.webkitColumnCount = size;
    style.columnCount = size;
}