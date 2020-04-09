

 /*=================graphs===============*/
 var myConfig1 = {
      "type": "mixed",
	  
      "title": {
        "text": "Total Monthly Production Data"
      },
	  
      "scale-x": {
		"line-gap-size":1,
        "values":["Jan","Feb","Mar","Apr","May",  
        "Jun","Jul","Aug","Sep",  
        "Oct","Nov","Dec"],  
        "label": {
          "text": "Months"
        }
      },
      "scale-y": {
        "values": "0:200:30",
        "label": {
          "text": "Quantity in Kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:200:30",
        "label": {
          "text": "Quantity in Kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		  "background-color":'#6D79AD'  ,
          "scales": "scale-x,scale-y",
          "values": [
            137.86,142.79,150.08,116.36,147.87,131,147.18,144.89
			
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#FA9076',
          "scales": "scale-x,scale-y",
          "values": [
           30,30,30,30,30,30,30,30
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
            137.86,142.79,150.08,116.36,147.87,131,147.18,144.89,131.01,147.65,133.67,138.48

          ],
          "marker": {
            "size": 4
          }
        }
		
      ]
    };
 
  
	
 var myConfig2 = {
      "type": "mixed",
      "title": {
        "text": "Ironore Monthly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "label": {
          "text": "Months"
        }
      },
      "scale-y": {
        "values": "0:300:50",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:300:50",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#00264d'  ,
          "scales": "scale-x,scale-y",
          "values": [
           224.38,233.88,244.4,190.24,241.68,213.84,240.75,211.57
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#f4af1b',
          "scales": "scale-x,scale-y",
          "values": [
            30, 34, 15, 29, 31, 20, 25, 39
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
         220,230.48,226.2,180.24,251.68,210.84,251.82,210.17,211.15,240.4,219.86,223.34

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
 
   
var myConfig3 = {
      "type": "mixed",
      "title": {
        "text": "Limestone Monthly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "label": {
          "text": "Months"
        }
      },
      "scale-y": {
        "values": "0:60:20",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:60:20",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#8A8266'  ,
          "scales": "scale-x,scale-y",
          "values": [
            40,41.33,43.58,33.72,42.85,37.99,42.69,37.57
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#ffae42',
          "scales": "scale-x,scale-y",
          "values": [
            8,6.20,8.10,9.4,3.2,5.6,7.5,10.2
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
            41,40.93,45.58,30.72,44.85,37,40.69,35.57,39.92,43.70,33.65,43.85

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
 
 var myConfig4 = {
      "type": "mixed",
      "title": {
        "text": "Coal Monthly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "label": {
          "text": "Months"
        }
      },
      "scale-y": {
        "values": "0:150:30",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:150:30",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#544c4a'  ,
          "scales": "scale-x,scale-y",
          "values": [
            88.44,92.09,96.33,74.94,95.38,84.3,94.52,83.35
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#e4cd05',
          "scales": "scale-x,scale-y",
          "values": [
            30, 34, 15, 29, 31, 20, 25, 39
     
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           86.04,92.19,92.30,73.34,91.35,87.3,92.50,81.35,89.23,92.33,83.76,84.19
          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig5 = {
      "type": "mixed",
      "title": {
        "text": "Total Weekly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10","week11","week12"],
        "label": {
          "text": "Weeks"
        }
      },
      "scale-y": {
        "values": "0:60:20",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:60:20",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#6D79AD'  ,
          "scales": "scale-x,scale-y",
          "values": [
           33.49,30.5,30.15,31.45,33.33,37.97,31.39,36.18
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#FA9076',
          "scales": "scale-x,scale-y",
          "values": [
            10,10,10,10,10,10,10,10
     
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           33.49,30.5,30.15,31.45,33.33,37.97,31.39,36.18,26.93,36.51,38.35,31.82

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig6 = {
      "type": "mixed",
      "title": {
        "text": "Ironore Weekly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10","week11","week12"],
        "label": {
          "text": "Weeks"
        }
      },
      "scale-y": {
        "values": "0:100:30",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:100:30",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#00264d'  ,
          "scales": "scale-x,scale-y",
          "values": [
             53.95,50.26,49.46,50.92,54.54,62.32,50.5,59.54
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#f4af1b',
          "scales": "scale-x,scale-y",
          "values": [
            30, 34, 15, 29, 31, 20, 25, 39
  
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           54.55,53.46,47.96,54.72,50.54,62.22,51.54,51.24,40.3,52.82,64.23,51.3

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig7 = {
      "type": "mixed",
      "title": {
        "text": "Limestone Weekly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10","week11","week12"],
        "label": {
          "text": "Weeks"
        }
      },
      "scale-y": {
        "values": "0:20:3",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:20:3",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#8A8266'  ,
          "scales": "scale-x,scale-y",
          "values": [
            9.75,8.79,8.73,9.15,9.63,11,9.15,10.43
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#ffae42',
          "scales": "scale-x,scale-y",
          "values": [
            3.2,2.4,3.4,4.1,2.19,2.3,1.32,3.2  
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           9.15,8.29,7.73,8.95,9.09,10,9.95,11.43,7.31,10.64,11.07,9.23
          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig8 = {
      "type": "mixed",
      "title": {
        "text": "Coal Weekly Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["week1","week2","week3","week4","week5","week6","week7","week8","week9","week10","week11","week12"],
        "label": {
          "text": "Weeks"
        }
      },
      "scale-y": {
        "values": "0:40:10",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:40:20",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#544c4a'  ,
          "scales": "scale-x,scale-y",
          "values": [
             21.3,19.94,19.3,20.09,21.7,24.29,19.96,23.64
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#e4cd05',
          "scales": "scale-x,scale-y",
          "values": [
            6.3,7.32,2.30,8.4,3.9,4,5,3.67
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
            20.3,19.04,18.10,21.19,20.7,23.26,18.97,22.24,16.21,22.20,24.03,21.28

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig9 = {
      "type": "mixed",
      "title": {
        "text": "Total Daily Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed"],
        "label": {
          "text": "Days"
        }
      },
      "scale-y": {
        "values": "0:10:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:10:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#e34234'  ,
          "scales": "scale-x,scale-y",
          "values": [
            4.98,4.43,5.26,4.24,3.63,3.91,4.93
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#FA9076',
          "scales": "scale-x,scale-y",
          "values": [
            1.23,1.96,1,0.2,1.76,0.87,2
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           4.98,4.43,5.26,4.24,3.63,3.91,4.93,5.26,4.24,3.63
          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig10 = {
      "type": "mixed",
      "title": {
        "text": "Ironore Daily Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed"],
        "label": {
          "text": "Days"
        }
      },
      "scale-y": {
        "values": "0:10:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:10:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#00264d'  ,
          "scales": "scale-x,scale-y",
          "values": [
              7.47,8.46,8.46,6.64,7.52,7.88,8.93

          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#f4af1b',
          "scales": "scale-x,scale-y",
          "values": [
			0.23,0.99,1.4,2,3.29,5.34,0.34
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           7,8.90,8.56,6.34,7.42,7.38,8.93,6.36,7.21,5.45

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig11 = {
      "type": "mixed",
      "title": {
        "text": "Limestone Daily Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed"],
        "label": {
          "text": "Days"
        }
      },
      "scale-y": {
        "values": "0:2:.50",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:2:.50",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#8A8266'  ,
          "scales": "scale-x,scale-y",
          "values": [
            1.49,1.39,1.44,1.33,1.24,1.28,1.58
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#ffae42',
          "scales": "scale-x,scale-y",
          "values": [
           0.23,0.42,0.22,0.46,0.15,0.1,0.5
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
            1.39,1.29,1.64,1.30,1.14,1.20,1.58,1.47,1.52,1.27
          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   var myConfig12 = {
      "type": "mixed",
      "title": {
        "text": "Coal Daily Production Data"
      },
      "scale-x": {
		"line-gap-size":1,
        "labels": ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu"],
        "label": {
          "text": "Days"
        }
      },
      "scale-y": {
        "values": "0:4:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "scale-y-2": {
        "values": "0:4:2",
        "label": {
          "text": "Quantity in kilo tonnes"
        }
      },
      "series": [{
          "type": "bar",
		   "background-color":'#544c4a'  ,
          "scales": "scale-x,scale-y",
          "values": [
            2.99,3.53,3.09,2.66,3.14,2.74,3.15
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "bar",
		  "background-color":'#e4cd05',
          "scales": "scale-x,scale-y",
          "values": [
           0.2,0.1,0.23,0.43,0.33,0.19,0.3
          ],
          "stacked": true,
          "stack": 1,
          "bar-width": "80%"
        },
        {
          "type": "line",
          "scales": "scale-x,scale-y-2",
          "values": [
           2.89,3.43,3.09,2.56,3.04,2.74,3.15,3.73,3.26,2.55

          ],
          "marker": {
            "size": 4
          }
        }
      ]
    };
   
  
function default1()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig1,
      height: "80%",
      width: "100%"
    });
}	
function default2()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig2,
      height: "80%",
      width: "100%"
    });
}	
function default3()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig3,
      height: "80%",
      width: "100%"
    });
}
function default4()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig4,
      height: "80%",
      width: "100%"
    });
}	
function totalmonth()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig1,
      height: "80%",
      width: "100%",
	  
    });
}	
function 
month()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig2,
      height: "80%",
      width: "100%"
    });
}	
function limestonemonth()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig3,
      height: "80%",
      width: "100%"
    });
}
function coalmonth()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig4,
      height: "80%",
      width: "100%"
    });
}	




function totalweek()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig5,
      height: "80%",
      width: "100%"
    });
}	
function ironoreweek()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig6,
      height: "80%",
      width: "100%"
    });
}	
function limestoneweek()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig7,
      height: "80%",
      width: "100%"
    });
}
function coalweek()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig8,
      height: "80%",
      width: "100%"
    });
}	
function totalday()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig9,
      height: "80%",
      width: "100%"
    });
}	
function ironoreday()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig10,
      height: "80%",
      width: "100%"
    });
}	
function limestoneday()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig11,
      height: "80%",
      width: "100%"
    });
}
function coalday()
{
	 zingchart.render({
      id: 'myChart1',
      data: myConfig12,
      height: "80%",
      width: "100%"
    });
}	

function datetime()
{
startTime();
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("curdate").innerHTML = date;
document.getElementById("dronedate").innerHTML = date;
document.getElementById("dronetime").innerHTML = time;
document.getElementById("dronedate1").innerHTML = date;
document.getElementById("dronetime1").innerHTML = time;
document.getElementById("dronedate2").innerHTML = date;
document.getElementById("dronetime2").innerHTML = time;
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