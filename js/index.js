
 var showdate=document.getElementById('showdate');
 var time=null;
 function getTime(){
 	var Mydate=new Date();
 	var year=Mydate.getFullYear();
	var month=Mydate.getMonth()+1; 
	var day=Mydate.getDate(); 
	showdate.innerHTML=year+"年"+month+"月"+day+"日";
 }
time=setInterval(getTime(),2000);