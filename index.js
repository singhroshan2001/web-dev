const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var currentdate = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var min=currentdate.getMinutes();
if(min<10)
min="0"+min;
var sec=currentdate.getSeconds();
if(sec<10)
sec="0"+sec;
var datetime =  days[currentdate.getDay()]+" "+currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "."
                + currentdate.getFullYear()+"  "+ currentdate.getHours() + ":"
                + min + ":"
                + sec;
document.querySelector("#demo").textContent=datetime;
display_c();
 }
