$(function () {
        $('#bar-chart').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
          			text: 'Total Number of Youtube Views By Cat'
           },
        xAxis: {
          categories: ['Station Master Tama' , 'Colonel Meow', 'Lil Bub', 'Henri', 'Maru', 'Grumpy Cat', 'Keyboard cat', 'Nyan Cat' ],
           title: {
            text: "Cat Name"
              }
        },
        yAxis: {
                min: 0,
                title: {
            text: 'Number of Views in Millions'
           },
                labels: {
                    overflow: 'justify'
                }
            },
           
        plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
        legend: {
            enabled: true
        },

        series: [ {name: 'Number of of Youtube Views',  data: [ 
        		{color:'#800080', y:148728} , 
        		{color: "#FF00FF", y:890091 }, 
        		{color:"#0000FF", y:    3710744	}, 
        		{color:"#FF0000", y:  8280649	} , 
        		{color: '#00F5FF', y: 11910297} 
        		,{ color: "#FFA500", y:14566003},
        		 {color:'#FFFF00', y: 34455121},
        		  {color:"#00FF00", y: 106681028}] }]


     // Initial data variable to store aggregate value read from the input file.
     
  });
  });

    


 