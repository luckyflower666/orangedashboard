// JavaScript Documentfunction hi(){
function min_call()
{	
	alert("Tracking number:1122334455, Name:Mr. Zhang, Request:Education");
	var con=confirm("Recorded?");
 	if(con== true)
    {
       var getNum = parseInt(document.getElementById('num_call').innerHTML);
		if(getNum >0){
			alert("Finish recording!")
			document.getElementById("num_call").innerHTML = getNum - 1;
		}else{
		alert("no waiting calls");
		}
    }
    else
    {//
        alert("call canceled");
    }
}

function min_order()
{
    alert("Tracking number:1155667788, Name:Mr. Li, Request:Transportation");
	var con=confirm("Recorded?");
 	if(con== true)
    {
       var getNum = parseInt(document.getElementById('num_order').innerHTML);
		if(getNum >0){
			alert("Finish recording!")
			document.getElementById("num_order").innerHTML = getNum - 1;
		}else{
		alert("no waiting calls");
		}
    }
    else
    {//
        alert("order canceled");
    }
}



