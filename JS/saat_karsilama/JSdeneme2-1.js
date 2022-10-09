let Days=["Pazartesi","Salı","Carsamba","Persembe","Cuma","Cumartesi","Pazar"];
let Name1=prompt("Adınız:");
let Myname=document.querySelector("#Myname");
let Name2;
if(Name1)
{   
    Name2=Name1[0].toUpperCase() +Name1.slice(1); 
    Myname.innerHTML=`${Name2}`;
}
else
{
    alert("Bir isim giriniz:")
    location.reload();
}
function clockTime()
{
    let date = new Date ();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    let day=Days[date.getDay()];
if(hh == 0)
{
    hh=12;
}
if( hh > 12)
{
    hh=hh-12;
    session="PM";
}
hh = (hh<10) ? "0" + hh : hh;
mm = (mm<10) ? "0" + mm : mm;
ss = (ss<10) ? "0" + ss :ss;
let time =hh + ":" + mm +":" + ss+""+ session + "  " + day ;

document.getElementById("clock").innerHTML = time;
let t = setTimeout(function(){ clockTime() },1000);

}
clockTime();