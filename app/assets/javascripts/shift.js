// JavaScript Document
var imgs=new Array('/assets/realtraffic.jpg','/assets/realtraffic1.jpg', '/assets/traffic4.gif','/assets/traffic2.png','/assets/traffic21.png','/assets/traffic5.gif');
var index=0;
function change(){
      var imgObj =  document.getElementById('imgtraffic');

      if( imgObj ){
      
          imgObj.src=imgs[index%6];
          index++;
      //alert(imgObj.src);
      
      setTimeout("change()", 3000);
       
      }
}

function realcall(){      
 	  var myDate = new Date();
    var hour = myDate.getHours();  
    if(hour >=0 && hour <9)
    {
        //document.getElementById("imgair").src ="img/airquality8.jpg";
		document.getElementById("imgcall").src ="/assets/hotline8.png";

    }else if(hour == 9)
    {
        //document.getElementById("imgair").src ="img/airquality9.jpg";
		document.getElementById("imgcall").src ="/assets/hotline9.png";
		
    }else if(hour == 10)
    {
        //document.getElementById("imgair").src ="img/airquality10.jpg";
		document.getElementById("imgcall").src ="/assets/hotline10.png";

    }else if(hour == 11)
    {
         //document.getElementById("imgair").src ="img/airquality11.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline11.png";

    }else if(hour == 12)
    {
         //document.getElementById("imgair").src ="img/airquality12.jpg";
  		 document.getElementById("imgcall").src ="/assets/hotline12.png";
 
    }else if(hour == 13)
    {
         //document.getElementById("imgair").src ="img/airquality13.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline13.png";

    }else if(hour == 14)
    {
         //document.getElementById("imgair").src ="img/airquality14.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline14.png";

    }else if(hour == 15)
    {
         //document.getElementById("imgair").src ="img/airquality15.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline15.png";

    }else if(hour == 16)
    {
         //document.getElementById("imgair").src ="img/airquality16.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline16.png";

    }else if(hour == 17)
    {
         //document.getElementById("imgair").src ="img/airquality17.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline17.png";

    }else if(hour == 18)
    {
         //document.getElementById("imgair").src ="img/airquality18.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline18.png";

    }else if(hour == 19)
    {
         //document.getElementById("imgair").src ="img/airquality19.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline19.png";

    }else if(hour == 20)
    {
         //document.getElementById("imgair").src ="img/airquality20.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline20.png";

    }else if(hour>21 && hour <24)
    {
        // document.getElementById("imgair").src ="img/airquality23.jpg";
		 document.getElementById("imgcall").src ="/assets/hotline23.png";

    }
}
	



