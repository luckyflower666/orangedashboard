// JavaScript Document
function distribute1()
{
	var getNum = parseInt(document.getElementById('a_govern').innerHTML);
	var getCredit1 = parseInt(document.getElementById('credit1').innerHTML);
	var getCredit2 = parseInt(document.getElementById('credit2').innerHTML);
	var getCredit3 = parseInt(document.getElementById('credit3').innerHTML);

	var price1 = getCredit1 / 100;
	var price2 = getCredit2 / 100;
	var price3 = getCredit3 / 100;
	
	if(getNum > price1+price2+price3){
			alert("finished")
			document.getElementById("pending1").innerHTML = price1;
			document.getElementById("pending2").innerHTML = price2;
			document.getElementById("pending3").innerHTML = price3;
			document.getElementById("a_govern").innerHTML = getNum-price1-price2-price3;
			document.getElementById("p_govern").innerHTML = (price1+price2+price3)/getNum*100 +"%";
			
		}else{
		alert("no funding avaliable");
		 
		}
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
}

function distribute2()
{
	var getNum = parseInt(document.getElementById('a_charity').innerHTML);
	var getCredit1 = parseInt(document.getElementById('credit1').innerHTML);
	var getCredit2 = parseInt(document.getElementById('credit2').innerHTML);
	var getCredit3 = parseInt(document.getElementById('credit3').innerHTML);

	var price1 = getCredit1 / 100;
	var price2 = getCredit2 / 100;
	var price3 = getCredit3 / 100;
	
	if(getNum > price1+price2+price3){
			alert("finished")
			document.getElementById("pending1").innerHTML = price1;
			document.getElementById("pending2").innerHTML = price2;
			document.getElementById("pending3").innerHTML = price3;
			document.getElementById("a_charity").innerHTML = getNum-price1-price2-price3;
			document.getElementById("p_charity").innerHTML = (price1+price2+price3)/getNum*100 +"%";			
		}else{
		alert("no funding avaliable");
		 
		}
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
}


function distribute3()
{
	var getNum = parseInt(document.getElementById('a_egas').innerHTML);
	var getCredit1 = parseInt(document.getElementById('credit1').innerHTML);
	var getCredit2 = parseInt(document.getElementById('credit2').innerHTML);
	var getCredit3 = parseInt(document.getElementById('credit3').innerHTML);

	var price1 = getCredit1 / 100;
	var price2 = getCredit2 / 100;
	var price3 = getCredit3 / 100;
	
	if(getNum > price1+price2+price3){
			alert("finished")
			document.getElementById("pending1").innerHTML = price1;
			document.getElementById("pending2").innerHTML = price2;
			document.getElementById("pending3").innerHTML = price3;
			document.getElementById("a_egas").innerHTML = getNum-price1-price2-price3;
			document.getElementById("p_egas").innerHTML = (price1+price2+price3)/getNum*100 +"%";		
		}else{
		alert("no funding avaliable");
		 
		}
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
}


function distribute4()
{
	var getNum = parseInt(document.getElementById('a_water').innerHTML);
	var getCredit1 = parseInt(document.getElementById('credit1').innerHTML);
	var getCredit2 = parseInt(document.getElementById('credit2').innerHTML);
	var getCredit3 = parseInt(document.getElementById('credit3').innerHTML);

	var price1 = getCredit1 / 100;
	var price2 = getCredit2 / 100;
	var price3 = getCredit3 / 100;
	
	if(getNum > price1+price2+price3){
			alert("finished")
			document.getElementById("pending1").innerHTML = price1;
			document.getElementById("pending2").innerHTML = price2;
			document.getElementById("pending3").innerHTML = price3;
			document.getElementById("a_water").innerHTML = getNum-price1-price2-price3;
			document.getElementById("p_water").innerHTML = (price1+price2+price3)/getNum*100 +"%";		
		}else{
		alert("no funding avaliable");
		 
		}
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
}

