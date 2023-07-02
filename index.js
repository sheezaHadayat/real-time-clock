function timer(){
  const currenttime=new Date();
  const hours=currenttime.getHours();
  const minutes=currenttime.getMinutes();
  const seconds=currenttime.getSeconds();
  document.getElementById('timeshow').innerHTML="Current time is:   " + hours+ ":" +minutes+ ":" +seconds;
}
// timer();
setInterval(timer, 1000);