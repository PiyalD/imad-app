console.log('Loaded!');
alert('Welcome to Piyal\'s IMAD Profile');
//chnge the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML='HI!! This is PIYAL..and this is my first webapp';
//move the image
var img=document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
}

