function submitForm(){
    var no = document.getElementById("phno").value;
    var age = document.getElementById("age").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    password1 = document.getElementById("psswrd1").value;
    password2 = document.getElementById("psswrd2").value;

    if(no == "" || no== null || age == "" || age== null || name == "" || name== null || email == "" || email== null ||password1==""||password1==null ||password2==""||password2==null){
        /* alert("Enter all nesessary details")
        (no == "" || no== null) ? document.getElementById("phno").style.borderColor="red": document.getElementById("phno").style.borderColor="red";
        (age == "" || age== null) ? document.getElementById("age").style.borderColor="red": document.getElementById("age").style.borderColor="red";
        (name == "" || name== null) ? document.getElementById("name").style.borderColor="red": document.getElementById("name").style.borderColor="red";
        (email == "" || email== null) ? document.getElementById("email").style.borderColor="red": document.getElementById("email").style.borderColor="red"; */
        psswrd1Check();
        psswrd2Check();
        ageCheck();
        nameCheck();
        mailCheck();
        phNoCheck();
    }
    else
    {   
        alert("\n Name : "+name+"\n Ph. No : "+no+"\n Age : "+age+"\n Email Id : "+email)
    }
}
var password1=""
var password2=""
function psswrd1Check(){
    password1 = document.getElementById("psswrd1").value;
    var letters =/^[A-Za-z]\w{7,14}$/;
    if(!password1.match(letters))
      {
        document.getElementById("p1Alert").innerText='Use a stronger password \n Password length must be between 7 to 16 characters\nand contain only characters, numeric digits,\nunderscore and first character must be a letter'
      //alert('Use a stronger password \n Password length must be between 7 to 16 characters and contain only characters, numeric digits, underscore and first character must be a letter');
      document.getElementById("psswrd1").value="";
      document.getElementById("psswrd1").style.borderColor="red";
      document.getElementById("p1A").style.color="red";
      }
      else{
        document.getElementById("psswrd1").style.borderColor="green";
        document.getElementById("p1Alert").innerText=''
        document.getElementById("p1A").style.color="black";

      }
}
function psswrd2Check(){
    password2 = document.getElementById("psswrd2").value;
    if(password2=="")
    {
        document.getElementById("p2Alert").innerText='Enter Password'
        document.getElementById("psswrd1").value="";
        document.getElementById("psswrd1").style.borderColor="red";
        document.getElementById("psswrd2").value="";
        document.getElementById("psswrd2").style.borderColor="red";
        document.getElementById("p2A").style.color="red";
    }
    else if(password1!=password2)
      {
      //alert('Passwords dont match');
      document.getElementById("p2Alert").innerText='Passwords dont match'
      document.getElementById("psswrd1").value="";
      document.getElementById("psswrd1").style.borderColor="red";
      document.getElementById("psswrd2").value="";
      document.getElementById("psswrd2").style.borderColor="red";
      document.getElementById("p2A").style.color="red";
      }
      else{
        document.getElementById("psswrd2").style.borderColor="green";
        document.getElementById("p2Alert").innerText=''
        document.getElementById("p2A").style.color="black";
      }

}


function ageCheck(){
    var age = document.getElementById("age").value;
    if(age<18)
    {
        //alert("You are too young to register")
        document.getElementById("ageAlert").innerText='You are too young to register'
        document.getElementById("age").value="";
        document.getElementById("age").style.borderColor="red";
        document.getElementById("ageA").style.color="red";
    }    
    else if(age>100)
    {
        //alert("Check Again")
        document.getElementById("ageAlert").innerText='Check Again'
        document.getElementById("age").value="";
        document.getElementById("age").style.borderColor="red";
        document.getElementById("ageA").style.color="red";
    }
    else{
      document.getElementById("age").style.borderColor="green";
      document.getElementById("ageAlert").innerText=''
      document.getElementById("ageA").style.color="black";

    }
}
function phNoCheck(){
    var no = document.getElementById("phno").value;
    if(no<999999999 || no>10000000000)
    {
        //alert("You have entered an incorrect number ( Only 10 digit numbers are allowed )")
        document.getElementById("numberAlert").innerText='You have entered invalid number'
        document.getElementById("phno").value="";
        document.getElementById("phno").style.borderColor="red";
        document.getElementById("numberA").style.color="red";

    }
    else{
      document.getElementById("phno").style.borderColor="green";
      document.getElementById("numberAlert").innerText=''
      document.getElementById("numberA").style.color="black";

    }

}
function nameCheck(){
    var name=document.getElementById("name").value;
    var letters = /^[A-Z a-z]+$/;
    if(!name.match(letters))
      {
      //alert('Your have entered invalid name');
      document.getElementById("nameAlert").innerText='You have entered invalid name'
      document.getElementById("name").value="";
      document.getElementById("name").style.borderColor="red";
      document.getElementById("nameA").style.color="red";

      }
      else{
        document.getElementById("nameAlert").innerText=''
        document.getElementById("name").style.borderColor="green";      
        document.getElementById("nameA").style.color="black";

      }

}

function mailCheck(){
    var email=document.getElementById("email").value;
    var letters = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!email.match(letters))
      {
      //alert('Your have entered invalid email id');
      document.getElementById("emailAlert").innerText='You have entered invalid email id'
      document.getElementById("email").value="";
      document.getElementById("email").style.borderColor="red";
      document.getElementById("emailA").style.color="red";

      }
      else{
        document.getElementById("email").style.borderColor="green";
        document.getElementById("emailAlert").innerText=''
        document.getElementById("emailA").style.color="black";

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