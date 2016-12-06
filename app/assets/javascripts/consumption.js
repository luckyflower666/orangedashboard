//document.getElementById("img_consumption").src ="/assets/electricity.jpg";

function shift_conspt(){
	
	var value_con=document.getElementById("consumption3").value;
    if(value_con==1)
    {
        document.getElementById("img_consumption").src ="/assets/electricity.jpg";
    }else if(value_con==2)
    {
        document.getElementById("img_consumption").src ="/assets/gas.jpg";
    }else if(value_con==3)
    {
        document.getElementById("img_consumption").src ="/assets/water.jpg";
    }

}
