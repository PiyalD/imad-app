console.log('Loaded!');
alert('Welcome to Piyal\'s IMAD Profile');
//chnge the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML='HI!! This is PIYAL..and this is my first webapp';
//move the image
var img=document.getElementById('madi');


var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}

img.onclick = function(){
    
    var interval = setInterval(moveRight, 50);
};

