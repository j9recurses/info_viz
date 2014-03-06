$(document).ready(function()
{

//console.log("ready!");
// set up the initial options for each chart
var chart1 = {
  chart: {
    renderTo: "chart1",
    defaultSeriesType: "line"
  },
  title: {
    text: 'Technology',
    align: "left"
  },
  subtitle: {
  	text: "Departments: Information Technology and Technical Support",
  	align: "left"
  },
  xAxis: {
    categories: [],
    plotBands: [{ //to show incomplete data
    	from: 9.5,
    	to: 11.5,
    	color: 'rgba(68, 170, 213, 0.1)',
    	label: {
    		text: "Estimated"
    	}
    }]
  },
  yAxis: {
    title: {
      text: '$ (in thousands)'
    },
    min: 0,
    max: 600    
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0,
    floating: true
  },
  series: []
}

var chart2 = {
  chart: {
    renderTo: "chart2",
    defaultSeriesType: "line"
  },
  title: {
    text: 'Sales and Marketing',
    align: "left"
  },
  subtitle: {
  	text: "Departments: Sales and Marketing",
  	align: "left"
  },
  xAxis: {
    categories: [],
        plotBands: [{ //to show incomplete data
    	from: 9.5,
    	to: 11.5,
    	color: 'rgba(68, 170, 213, 0.1)',
    	label: {
    		text: "Estimated"
    	}
    }]
  },
  yAxis: {
    title: {
      text: '$ (in thousands)'
    },
    min: 0,
    max: 600    
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0,
	floating: true
  },
  series: []
}

var chart3 = {
  chart: {
    renderTo: "chart3",
    defaultSeriesType: "line"
  },
  title: {
    text: 'Administration',
    align: "left"
  },
  subtitle: {
  	text: "Departments: Facilities, Finance, and Human Resources",
  	align: "left"
  },
  xAxis: {
    categories: [],
    plotBands: [{ //to show incomplete data
    	from: 9.5,
    	to: 11.5,
    	color: 'rgba(68, 170, 213, 0.1)',
    	label: {
    		text: "Estimated"
    	}
    }]
  },
  yAxis: {
    title: {
      text: '$ (in thousands)'
    },
    min: 0,
    max: 600,
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0,
    y: -15,
    floating: true
  },
  series: []
}

var chart4 = {
  chart: {
    renderTo: "chart4",
    defaultSeriesType: "line"
  },
  title: {
    text: 'Management',
    align: "left"
  },
  subtitle: {
  	text: "Departments: Executive",
  	align: "left"
  },
  xAxis: {
    categories: [],
    plotBands: [{ //to show incomplete data
    	from: 9.5,
    	to: 11.5,
    	color: 'rgba(68, 170, 213, 0.1)',
    	label: {
    		text: "Estimated"
    	}
    }]
  },
  yAxis: {
    title: {
      text: '$ (in thousands)'
    },
    min: 0,
    max: 600,
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    y: 45,
    borderWidth: 0,
    floating: true
  },
  series: []
}

// ajax call to data from the csv file
$.get('_data/expenditures.csv', function (data) {

  //split the csv by *
  var lines = data.split('*');
  //placeholder to hold budget info; 8 arrays within b/c 8 departments
  var budgetData = [[], [], [], [], [], [], [], []];
  //placeholder to hold actual info; 8 arrays within b/c 8 departments
  var actualData = [[], [], [], [], [], [], [], []];

  // loop through each line using $.each
  $.each(lines, function(lineNo, line) {
        
    //turn each line into an array
    var items = line.split(',');

    // first line is months so put into the categories
    if (lineNo == 0) {
        chart1.xAxis.categories = items;
    	chart2.xAxis.categories = items;
    	chart3.xAxis.categories = items;
    	chart4.xAxis.categories = items;

    //put the lines data where it needs to be
    } else {
        //put the budget data (including dept name) into budgetData
        budgetData[lineNo - 1].push(items[0] + " Bdgt");
        for(var i = 1; i < items.length; i +=2) {
            budgetData[lineNo - 1].push(parseInt(items[i]));
        }
        //put the actual data (incl dept name) into actualData
        actualData[lineNo - 1].push(items[0] + " Act");
        for(var j = 2; j < items.length; j +=2) {
            actualData[lineNo - 1].push(parseInt(items[j]));
        }
        
    }
//       console.log("BUDGET");
//       console.log(budgetData);
//       console.log("ACTUALS");
//       console.log(actualData);
        
  }); //completes each function
  for(var i = 0; i < budgetData.length; i++) {
    // create a placeholder object & pull in the name and data
    var seriesDataBudget = {
    	name: "",
    	data: [],
    };
	// populate seriesDataBudget with the right things from departments and amounts
    seriesDataBudget.name = budgetData[i][0];
    seriesDataBudget.data = budgetData[i].slice(1);
    //console.log("testing seriesData");
    //console.log(seriesDataBudget);
    
    //push into series of the right chart
    if (i < 2) {
        chart1.series.push(seriesDataBudget);
    } else if (i <4) {
        chart2.series.push(seriesDataBudget);
    } else if (i<7) {
        chart3.series.push(seriesDataBudget);
    } else if (i === 7) {
        chart4.series.push(seriesDataBudget);
    }
    //do same for actualData
    var seriesDataActual = {
    	name: "",
    	data: [],
    };
    seriesDataActual.name = actualData[i][0];
    seriesDataActual.data = actualData[i].slice(1);
//     console.log("testing seriesDataActual");
//     console.log(seriesDataActual);
    
    //push into series of the right chart
    if (i < 2) {
        chart1.series.push(seriesDataActual);
    } else if (i <4) {
        chart2.series.push(seriesDataActual);
    } else if (i<7) {
        chart3.series.push(seriesDataActual);
    } else if (i === 7) {
        chart4.series.push(seriesDataActual);
    }
    }
        
// 	console.log("chart1");
//     console.log(chart1.series);
//     console.log("chart2");
//     console.log(chart2.series);
//     console.log("chart3");
//     console.log(chart3.series);
//     console.log("chart4");
//     console.log(chart4.series);
// 
//     
// 	console.log("chart1 categories");
//     console.log(chart1.xAxis.categories);
//     console.log("chart2 categories");
//     console.log(chart2.xAxis.categories);
//     console.log("chart3 categories");
//     console.log(chart3.xAxis.categories);
//     console.log("chart4 categories");
//     console.log(chart4.xAxis.categories);

//draw the charts
  var chart = new Highcharts.Chart(chart1);
  var chart = new Highcharts.Chart(chart2);
  var chart = new Highcharts.Chart(chart3);
  var chart = new Highcharts.Chart(chart4);


 
}); //completes data get function

}); //completes document ready function
