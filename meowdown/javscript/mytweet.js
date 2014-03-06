$(function () {
        $('#bar-chart2').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
          			text: 'Total Number of Twitter Followers By Cat'
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
            text: 'Number of Twitter Followers'
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
        series: [ {name: 'Number of Twitter Followers',  data: [ {color:'#800080', y:0} , {color: "#FF00FF", y:8455 }, {color:"#0000FF", y: 34600}, {color:"#FF0000", y: 26900} , {color: '#00F5FF', y: 16100} ,{ color: "#FFA500", y:135000}, {color:'#FFFF00', y: 15900}, {color:"#00FF00", y: 187000}] }]

     // Initial data variable to store aggregate value read from the input file.



     
  });
  });

    