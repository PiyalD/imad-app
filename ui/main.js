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

//SUBMIT NAME
var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //send a request to the server with a name as parameter
  var request = new XMLHttpRequest(); //create a request 
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //render the response of list of names into the html code
                  var names=['name1', 'name2', 'name3'];
                 var list=''                                          //empty list
                  for(var i=0; i< names.length; i++){
                     list += '<li>' + names[i] + '</li>';
                  }
                   var ul=document.getElementById('namelist');
                   ul.innerHTML = list;
            }
        }
    };    
    //make the request
    request.open('GET', 'http://piyalde2009.imad.hasura-app.io/submit-name?=', true);
    request.send(null);
  
  
};
