 function data()
    {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;
    var e = document.getElementById("n5").value;


    if(a==""||b==""||c==""||d==""||e=="")
    {
alert("All Fields Are Mandatory");
return false;
    }
   else if(d.length<11||d.length>11)
    {
alert("Please Enter Valid Phone Number!");
return false;
    }
    else if(isNaN(d))
    {
alert("Only Numbers! Please Enter Valid Phone Number.");
return false;
    }
    else if(c.length<8)
    {
alert(" Please Enter 8 Digit Password!");
return false;
    }

    else if(b.indexOf("@") === -1)
    {
alert("Please Enter Valid Email Address.");
return false;
    }


    else
    true;
}   