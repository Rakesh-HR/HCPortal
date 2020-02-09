
function removeOptions(selectbox)
{
    selectbox.options.length=1;
}
/* 
function countrySel(){
    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onreadystatechange = function() {

        var text = request.response;
        var select = document.getElementById("selectCountry");
        for(var i=0;i<text.length;i++){
            var opt=text[i].name;
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el); 
        }
    }
    removeOptions(document.getElementById("selectCity")); 
    removeOptions(document.getElementById("selectState")); 
         
}
 */

var list="https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
window.onload=function(){   
    var countryS=document.getElementById("selectCountry");
    let req=new XMLHttpRequest();
    req.open('GET',list);
    req.responseType='json';
    req.send();   
    req.onreadystatechange=function(){
        var add=req.response;
        for(var i=0;i<add.length;i++){
            var c=add[i].name;
            var op=document.createElement('option');
            op.textContent=c;      
            countryS.appendChild(op);
        }
    }
}


function stateSel(){
    var selected = document.getElementById("selectState");
    var country=document.getElementById("selectCountry").value
    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var text = request.response;
        for(var i=0;i<text.length;i++){
            var opt=text[i].name;
            if(opt==country){
                for(var j in text[i].states){
                    var opt1=j;
                    var el = document.createElement("option");
                    el.textContent = opt1;
                    selected.appendChild(el);
                }
            }
        }
    }
    removeOptions(document.getElementById("selectCity")); 
}


function citySel(){
    
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity");

    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';
    let req=new XMLHttpRequest();
    req.open('GET',requestURL);
    req.responseType='json';
    req.send();
    req.onload=function(){
        var add=req.response;
        for(var i=0;i<add.length;i++){
            if(countryS==add[i].name){
                var ct=add[i].states;
                for(var s in ct){
                    if(s==stateS){
                        var k=add[i].states[s];
                        for(var j=0;j<k.length;j++){
                            var op=document.createElement("option");
                            op.textContent=k[j];
                            cityS.appendChild(op);
                        }
                    }
                }
            }
        }
    }

}



/*
function stateSel(){
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState");
    var cityS=document.getElementById("selectCity");
    stateS.length=1;
    cityS.length=1;

    let req=new XMLHttpRequest();
    req.open('GET',list);
    req.responseType='json';
    req.send();

        req.onreadystatechange=function(){
            var add=req.response;
            for(var i=0;i<add.length;i++){
                if(countryS==add[i].name){
                    for(var s in add[i].states){
                        var op=document.createElement('option');
                        op.textContent=s;
                        
                        stateS.appendChild(op);
                    }
                }
            }
        }
}
function citySel(){
    
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity");

//    cityS.length=1;
    let req=new XMLHttpRequest();
    req.open('GET',list);
    req.responseType='json';
    req.send();
    req.onreadystatechange=function(){
        var add=req.response;
        for(var i=0;i<add.length;i++){
            if(countryS==add[i].name){
                var ct=add[i].states;
                for(var s in ct){
                    if(s==stateS){
                        var k=add[i].states[s];
                        
                    for(var j=0;j<k.length;j++){
                        
                        var op=document.createElement('option');
                        op.textContent=k[j];
                        cityS.appendChild(op);
                }
            }

                }
            }
        }
    }

}
 */

//function modalCall(){
    
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("submitAddr");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
         modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
//}