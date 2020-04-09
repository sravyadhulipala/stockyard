var Config3 = {
      "type": "line",
	  "title": {
        "text": "Temperature"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [20, 40, 25, 50,74,78]
      }]
    };
function irontemp()
{
    zingchart.render({
      id: 'tempchart',
      data: Config3,
      height: "80%",
      width: "100%"
    });
}	
var Config4 = {
      "type": "line",
	  "title": {
        "text": "Moisture"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [10, 34, 35, 40,53,67]
      }]
    };
 function ironmoist()
 {
    zingchart.render({
      id: 'moistchart',
      data: Config4,
      height: "80%",
      width: "100%"
    });
 }	
 var Config5 = {
      "type": "line",
	  "title": {
        "text": "Temperature"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [10, 22, 38, 46,54,68]
      }]
    };
function coaltemp()
{
    zingchart.render({
      id: 'tempchart',
      data: Config5,
      height: "80%",
      width: "100%"
    });
}	
var Config6 = {
      "type": "line",
	  "title": {
        "text": "Moisture"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [5, 24, 35, 50,63,77]
      }]
    };
 function coalmoist()
 {
    zingchart.render({
      id: 'moistchart',
      data: Config6,
      height: "80%",
      width: "100%"
    });
 }	
 var Config7 = {
      "type": "line",
	  "title": {
        "text": "Temperature"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [25, 37, 45, 62,64,79]
      }]
    };
function limetemp()
{
    zingchart.render({
      id: 'tempchart',
      data: Config7,
      height: "80%",
      width: "100%"
    });
}	
var Config8 = {
      "type": "line",
	  "title": {
        "text": "Moisture"
      },
	   "scale-x": {
		"line-gap-size":1,
        "labels": [" ", "10", "11", "12","13","14"],
        "label": {
          "text": ""
        }
      },
      "scale-y": {
        "values": "0:80:20",
        "label": {
          "text": ""
        }
      },
      "series": [{
        "values": [14, 34, 55, 70,73,80]
      }]
    };
 function limemoist()
 {
    zingchart.render({
      id: 'moistchart',
      data: Config8 ,
      height: "80%",
      width: "100%"
    });
 }	