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
