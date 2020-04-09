/*======================fluctuation==========================*/
function ironore(n) {
  var t1=100;
  if(n-t1>0)
  {
	   document.getElementById("demo1").innerHTML = n-t1;
	   document.getElementById("img1").src ="C:/Users/akhila.atmakuri/Desktop/SMT/img/up.ico";
  }
  else
  {
	  document.getElementById("demo1").innerHTML = n-t1;
	  document.getElementById("img1").src = "C:/Users/akhila.atmakuri/Desktop/SMT/img/down.ico";
  }	  
}


function limestone(n) {
  var t2=50;
   if(n-t2>0)
  {
	   document.getElementById("demo2").innerHTML = n-t2;
	   document.getElementById("img2").src ="C:/Users/akhila.atmakuri/Desktop/SMT/img/up.ico";
  }
  else
  {
	  document.getElementById("demo2").innerHTML = n-t2;
	  document.getElementById("img2").src = "C:/Users/akhila.atmakuri/Desktop/SMT/img/down.ico";
  }	  
}
function coal(n) {
  var t3=60;
  if(n-t3>0)
  {
	   document.getElementById("demo3").innerHTML = n-t3;
	   document.getElementById("img3").src ="C:/Users/akhila.atmakuri/Desktop/SMT/img/up.1co";
  }
  else
  {
	  document.getElementById("demo3").innerHTML = n-t3;
	  document.getElementById("img3").src = "C:/Users/akhila.atmakuri/Desktop/SMT/img/down.ico";
  }	  
}


function start(n1,n2,n3){
 ironore(n1);
 limestone(n2);
 coal(n3);
 trend();
}

/*===============bar and line graph======================*/
function trend() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Production Data"
	},
	axisX: {
		valueFormatString: "MMM",
		interval:1,
		intervalType:"month"
	},
	axisY: {
		
		labelFormatter: addSymbols
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [
	{
		type: "column",
		name: "Actual Production",
		showInLegend: true,
		xValueFormatString: "MMMM YYYY",
		yValueFormatString: "#,##0",
		dataPoints: [
			{ x: new Date(2020, 0), y: 20000 },
			{ x: new Date(2020, 1), y: 30000 },
			{ x: new Date(2020, 2), y: 25000 },
			{ x: new Date(2020, 3), y: 70000 },
			{ x: new Date(2020, 4), y: 50000 },
			{ x: new Date(2020, 5), y: 35000 },
			{ x: new Date(2020, 6), y: 30000 },
			{ x: new Date(2020, 7), y: 43000 },
			{ x: new Date(2020, 8), y: 35000 },
			{ x: new Date(2020, 9), y: 30000 },
			{ x: new Date(2020, 10), y: 40000 },
			{ x: new Date(2020, 11), y: 50000 }
		]
	}, 
	{
		type: "line",
		name: "Expected Production",
		showInLegend: true,
		yValueFormatString: "#,##0",
		dataPoints: [
			{ x: new Date(2020, 0), y: 40000 },
			{ x: new Date(2020, 1), y: 42000 },
			{ x: new Date(2020, 2), y: 45000 },
			{ x: new Date(2020, 3), y: 45000 },
			{ x: new Date(2020, 4), y: 47000 },
			{ x: new Date(2020, 5), y: 43000 },
			{ x: new Date(2020, 6), y: 42000 },
			{ x: new Date(2020, 7), y: 43000 },
			{ x: new Date(2020, 8), y: 41000 },
			{ x: new Date(2020, 9), y: 45000 },
			{ x: new Date(2020, 10), y: 42000 },
			{ x: new Date(2020, 11), y: 50000 }
		]
	}]
});
chart.render();

function addSymbols(e) {
	var suffixes = ["", "K", "M", "B"];
	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

	if(order > suffixes.length - 1)                	
		order = suffixes.length - 1;

	var suffix = suffixes[order];      
	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}

