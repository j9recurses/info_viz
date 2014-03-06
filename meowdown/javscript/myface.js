$(function () {
        $('#column-chart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
          			text: 'Total Number of Facebook Likes By Cat'
           },
        xAxis: {
          categories: ['Station Master Tama' , 'Colonel Meow', 'Lil Bub', 'Henri', 'Maru', 'Grumpy Cat', 'Keyboard cat', 'Nyan Cat' ],
        },
            yAxis: {
                min: 0,
                title: {
            text: 'Number of Facebook likes'
              }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                  }
            },


            series: [ {name: 'Number of of Facebook Likes',  data: [ 
            {color:'#800080', y:1721} , 
            {color: "#FF00FF", y: 403019 }, 
            {color:"#0000FF", y:   647172 }, 
            {color:"#FF0000", y:  152716  } , 
            {color: '#00F5FF', y:  99062} 
            ,{ color: "#FFA500", y: 3890342},
             {color:'#FFFF00', y: 26216},
              {color:"#00FF00", y:2891657}] }]


     
     // Initial data variable to store aggregate value read from the input file.
     
  });
  });
