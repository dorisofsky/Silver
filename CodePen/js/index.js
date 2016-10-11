function myTimmer(){
  var mydate = new Date();
  year = mydate.getFullYear();
  month = mydate.getMonth();
  date = mydate.getDate();
  h = mydate.getHours();
  m = mydate.getMinutes();
  s = mydate.getSeconds();
  var ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  m = m < 10 ? '0'+m : m;
  tt = year+"/"+month+"/"+date+" "+h+":"+m+ampm;
 document.getElementById("timmer").innerHTML = tt ;
 setTimeout("myTimmer()", 100);
 }
myTimmer();