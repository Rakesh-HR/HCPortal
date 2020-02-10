
function removeOptions(selectbox)
{
    var select = document.getElementById(selectbox);
    var length = select.options.length;
    for (i = 1; i < length; i++) {
         select.options[i] = null;
    }
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

var list="https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json"
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
    selected.length=1;
    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json';
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
}


function citySel(){
    
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity");
    cityS.length=1;

    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json';
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

function addrValidator(){
    
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("submitAddr");
    var span = document.getElementsByClassName("close")[0];
    var a1=document.getElementById("addr1").value;
    var a2=document.getElementById("addr2").value;
    var a3=document.getElementById("addr3").value;
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity").value;
    var no = document.getElementById("pinNo").value;


    if(a1==""||a1==null||a2==""||a2==null||a3==""||a3==null||countryS=="Select Country"||stateS=="Select State"||cityS=="Select City"||no==""||no==null)
    {
        alert("Enter all required details")
    }
    else
    {        
        btn.onclick = function() {
            modal.style.display = "block";
            document.getElementById("finalText").innerHTML=`Your Address is: ${a1}, ${a2}, ${a3}, ${cityS}, ${no}`
            document.getElementById("nextPage").type="submit"
        }

        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}


function addrCheck(addr)
{
    var name=document.getElementById(addr).value;
    var letters = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if(!name.match(letters))
      {
      alert('Your have entered invalid address');
      document.getElementById(addr).value="";
      }
}

function pinNoCheck(){
    var no = document.getElementById("pinNo").value;
    var letters=/^[0-9]{6}$/;
    if(!no.match(letters))    
    {
        alert("You have entered an incorrect Pincode ( Only 6 digit codes are allowed )")
        document.getElementById("pinNo").value="";
    }

}

