function datetime()
{
startTime();
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("curdate").innerHTML = date;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('curtime').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function coal()
{
	document.getElementById("convid").defaultValue="10";
	document.getElementById("matid").defaultValue="45";
	document.getElementById("mattype").defaultValue="coal";
	document.getElementById("emptyload").defaultValue="43";
	document.getElementById("stockload").defaultValue="76";
	document.getElementById("density").defaultValue="758";
	document.getElementById("temp").defaultValue="35";
	document.getElementById("speed").defaultValue="3";
	document.getElementById("flow").defaultValue="67";
	document.getElementById("moist").defaultValue="56";
	document.getElementById("load").defaultValue="100";


}	
function lime()
{
	document.getElementById("convid").defaultValue="20";
	document.getElementById("matid").defaultValue="42";
	document.getElementById("mattype").defaultValue="limestone";
	document.getElementById("emptyload").defaultValue="32";
	document.getElementById("stockload").defaultValue="53";
	document.getElementById("density").defaultValue="264";
	document.getElementById("temp").defaultValue="37";
	document.getElementById("speed").defaultValue="3";
	document.getElementById("flow").defaultValue="56";
	document.getElementById("moist").defaultValue="50";
	document.getElementById("load").defaultValue="80";
	
}	
function iron()
{
	document.getElementById("convid").defaultValue="12";
	document.getElementById("matid").defaultValue="32";
	document.getElementById("mattype").defaultValue="iron ore";
	document.getElementById("emptyload").defaultValue="56";
	document.getElementById("stockload").defaultValue="43";
	document.getElementById("density").defaultValue="764";
	document.getElementById("temp").defaultValue="28";
	document.getElementById("speed").defaultValue="3";
	document.getElementById("flow").defaultValue="54";
	document.getElementById("moist").defaultValue="43";
	document.getElementById("load").defaultValue="89";
	
}	
function irondetails()
{
	document.getElementById("ph3").innerHTML = "";
	document.getElementById("ph4").innerHTML = "";
	document.getElementById("ph6").innerHTML = "";
	document.getElementById("eh4").innerHTML = "";
	document.getElementById("eh5").innerHTML = "";
	document.getElementById("eh6").innerHTML = "";
	document.getElementById("pi1").innerHTML = "34.3&#8451";
	document.getElementById("pi2").innerHTML = "12%";
	document.getElementById("pi3").innerHTML = "";
	document.getElementById("pi4").innerHTML = "";
	document.getElementById("pi5").innerHTML = "33.0%";
	document.getElementById("pi6").innerHTML = "";
	document.getElementById("ei1").innerHTML = "3.80%";
	document.getElementById("ei2").innerHTML = "0.39%";
	document.getElementById("ei3").innerHTML = "421 Kcal Kg";
	document.getElementById("ei4").innerHTML = "";
	document.getElementById("ei5").innerHTML = "";
	document.getElementById("ei6").innerHTML = "";
	document.getElementById("di1").innerHTML = "450276853";
	document.getElementById("di2").innerHTML = "IMG1908";
	document.getElementById("di3").innerHTML = "S1A1";
	document.getElementById("di4").innerHTML = "Action in Progress";
	document.getElementById("di5").innerHTML = "450276853";
	document.getElementById("di6").innerHTML = "IMG1908";
	document.getElementById("di7").innerHTML = "S1A2";
	document.getElementById("di8").innerHTML = "Action Due";
	document.getElementById("di9").innerHTML = "450276853";
	document.getElementById("di10").innerHTML = "IMG1908";
	document.getElementById("di11").innerHTML = "S1A3";
	document.getElementById("di12").innerHTML = "Action completed";
	
	

}	
function coaldetails()
{
	document.getElementById("ph3").innerHTML = "GCV";
	document.getElementById("ph4").innerHTML = "NCV";
	document.getElementById("ph6").innerHTML = "Ash";
	document.getElementById("eh4").innerHTML = "Heat generation rate";
	document.getElementById("eh5").innerHTML = "Peroxide number";
	document.getElementById("eh6").innerHTML = "Ash";
	document.getElementById("pi1").innerHTML = "54.2&#8451";
	document.getElementById("pi2").innerHTML = "20%";
	document.getElementById("pi3").innerHTML = "671 Kcal Kg ";
	document.getElementById("pi4").innerHTML = "345 Kcal Kg";
	document.getElementById("pi5").innerHTML = "42.0%";
	document.getElementById("pi6").innerHTML = "11.0%";
	document.getElementById("ei1").innerHTML = "2.80%";
	document.getElementById("ei2").innerHTML = "0.29%";
	document.getElementById("ei3").innerHTML = "231 Kcal Kg";
	document.getElementById("ei4").innerHTML = "534 Kcal Kg";
	document.getElementById("ei5").innerHTML = "13%";
	document.getElementById("ei6").innerHTML = "11.0%";
	document.getElementById("di1").innerHTML = "450276853";
	document.getElementById("di2").innerHTML = "IMG1909";
	document.getElementById("di3").innerHTML = "S1B1";
	document.getElementById("di4").innerHTML = "Action in Progress";
	document.getElementById("di5").innerHTML = "450276853";
	document.getElementById("di6").innerHTML = "IMG1909";
	document.getElementById("di7").innerHTML = "S1B2";
	document.getElementById("di8").innerHTML = "Action Due";
	document.getElementById("di9").innerHTML = "450276853";
	document.getElementById("di10").innerHTML = "IMG1909";
	document.getElementById("di11").innerHTML = "S1B3";
	document.getElementById("di12").innerHTML = "Action completed";
}
function limedetails()
{
	document.getElementById("ph3").innerHTML = "";
	document.getElementById("ph4").innerHTML = "";
	document.getElementById("ph6").innerHTML = "";
	document.getElementById("eh4").innerHTML = "";
	document.getElementById("eh5").innerHTML = "";
	document.getElementById("eh6").innerHTML = "";
	document.getElementById("pi1").innerHTML = "24.4&#8451";
	document.getElementById("pi2").innerHTML = "26%";
	document.getElementById("pi3").innerHTML = "601 Kcal Kg ";
	document.getElementById("pi4").innerHTML = "503 Kcal Kg";
	document.getElementById("pi5").innerHTML = "23.0%";
	document.getElementById("pi6").innerHTML = "33.0%";
	document.getElementById("ei1").innerHTML = "2.30%";
	document.getElementById("ei2").innerHTML = "0.25%";
	document.getElementById("ei3").innerHTML = "361 Kcal Kg";
	document.getElementById("ei4").innerHTML = "";
	document.getElementById("ei5").innerHTML = "";
	document.getElementById("ei6").innerHTML = "";
	document.getElementById("di1").innerHTML = "450276853";
	document.getElementById("di2").innerHTML = "IMG1909";
	document.getElementById("di3").innerHTML = "S1C1";
	document.getElementById("di4").innerHTML = "Action in Progress";
	document.getElementById("di5").innerHTML = "450276853";
	document.getElementById("di6").innerHTML = "IMG1909";
	document.getElementById("di7").innerHTML = "S1C2";
	document.getElementById("di8").innerHTML = "Action Due";
	document.getElementById("di9").innerHTML = "450276853";
	document.getElementById("di10").innerHTML = "IMG1909";
	document.getElementById("di11").innerHTML = "S1C3";
	document.getElementById("di12").innerHTML = "Action completed";
}

function adddetails() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var table = document.getElementById("drone");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3); 
  var cell5 = row.insertCell(4);
  cell1.innerHTML = "25658994";
  cell2.innerHTML = date+" "+time;
  cell3.innerHTML = "IMG6759";
  cell4.innerHTML = "SB1";
  cell5.innerHTML = "Action in progress";
}