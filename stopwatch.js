let second=0;
   let minute=0;
   let hour=0;
   let time=document.getElementById("stopwatch");
   let interval=null;

   function stopwatch(){
    second++;
    if(second>59){
        second=0;
        minute++;
   

    if(minute>59){
        minute=0;
        hour++;
    }
    }

    var hr= hour<10 ? "0"+hour : hour;
    var min= minute<10 ? "0"+minute : minute;
    var sec= second<10 ? "0"+second : second;
    time.innerHTML=hr+" : "+min+" : "+sec;
   }

   // Start Button

   function start(){

    if(interval !== null){
        clearInterval(interval);
    }
    interval = setInterval(stopwatch,1000);
    
   }

   // Stop Button
   function stop(){
    clearInterval(interval);
   }

   // Reset Button

   function reset(){
    clearInterval(interval);
    hour=0;
    minute=0;
    second=0;
    time.innerHTML="00 : 00 : 00";
   }

   setInterval(function (){
   var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
   var mon=["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sept","Oct","Nov","Dec"]
   var dt=new Date();
   var day=dt.getDay();
   var month=dt.getMonth();
   var date=dt.getDate();
   var year=dt.getFullYear();
   document.getElementById("date").innerHTML=days[day]+" "+mon[month]+" "+date+" "+year;

   var hrs=dt.getHours();
   var mins=dt.getMinutes();
   var secd=dt.getSeconds();
   
   var h= hrs<10 ? "0"+hrs : hrs;
   var m= mins<10 ? "0"+mins : mins;
   var s= secd<10 ? "0"+secd : secd;
   document.getElementById("time").innerHTML=h+" : "+m+" : "+s;
},1000);