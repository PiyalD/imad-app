//counter code
var counter=0;
var button= document.getElementById('counter');
button.onclick=function(){
    //create a request to the counter end point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                //render the variable in the correct span
                span.innerHTML=counter.toString();
            }
        }
    };    
    //make the request
    request.open('GET', 'http://piyalde2009.imad.hasura-app.io/counter', true);
    request.send(null);
};


var nameInp = document.getElementById('name');
var name = nameInp.value;

var submit = document.getElementById('submit_bttn');
submit.onclick = function()
{
  //send a request to the server with a name as parameter
  
  
  //render the response of list of names into the html code
  var names=['name1', 'name2', 'name3'];
  var list='';
  for(var i=0; i<names.length; i++){
     list+= '<li>' + name[i] + '</li><br>';
  }
   var ls=document.getElementById('lst');
   ls.innerHTML=list;
};
