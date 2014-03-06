// function to return color (gold/silver/bronze)
function colors(i) {
  switch(i) {
    case 0:
      return "#800080";
      break;
    case 1:
      return "#FF00FF";
      break;
    case 2:
      return "#0000FF";
      break;
    case 3:
      return "#FF0000";
      break;
    case 4:
      return "#00F5FF";
      break;
    case 5:
      return "#FFA500";
      break;
    case 6:
      return "#FFFF00";
      break;
    case 7:
      return "#00FF00"; 
      break;
  };
}  



$('#list-usePref_youtube li').click(function(){
  // Calling reset method to remove active class
  resetClass($(this), 'active');

  // Add active class to the selected list item
  $(this).addClass('active');

  //Store selected list item value in a variable
  var filtervalue = $(this).text();
 
 var option_barchart = {
        chart: {
          renderTo: "bar-chart",
          type: 'column'
        },
        title: {
          text: 'Total Number of Youtube Views'
        },
        xAxis: {
          categories: [ 'Station Master Tama' , 'Colonel Meow', 'Lil Bub', 'Henri', 'Maru', 'Grumpy Cat', 'Keyboard cat', 'Nyan Cat']
]
          labels: {
                enabled: i === 0
            }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Number of Views'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: false,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: []
      }

     // Initial data variable to store aggregate value read from the input file.
     
     var youtube_likes = {};
     var catnames = {};

// ajax call to data from the csv file
   $.get('www2/i247/hw2/data/alldata.csv', function (data) {

    // 1. split the csv by line ('#')
    var lines = data.split(',');


    // 2. loop through each line using $.each
    $.each(lines, function(lineNo, line) {
          
      // 3. turn each line into an array that contains 4 items: name, grade #1, grade #2, grade #3; use the .split() method
      var items = line.split(',');


      // 4. skip the first line (since it's the header)
      if (!(lineNo == 0) && (items[1]== filtervalue || filtervalue == "All")) {

       // 4a .Check if month is available in object 'months'
       //if yes, then add sales to existing value
       //else insert new data for the month encountered
         if ( items[0] in catnames )
         {
          catnames[items[0]] = catnames(months[items[0]]) + parseInt(items[1]);
         }
         else
         {
            youtube_likes[items[0]] = parseInt(items[1]);
         }

         console.log(catnames);
         // 4b .Check if month is available in object 'months'
       //if yes, then add sales to existing value
       //else insert new data for the month encountered
         if ( items[1] in regions )
         {
          regions[items[1]] = parseInt(regions[items[1]]) + parseInt(items[3]);
         }
         else
         {
            regions[items[1]] = parseInt(items[3]);
         }

         // 4c .Check if month is available in object 'months'
       //if yes, then add sales to existing value
       //else insert new data for the month encountered
         if ( items[2] in type )
         {
          type[items[2]] = parseInt(type[items[2]]) + parseInt(items[3]);
         }
         else
         {
            type[items[2]] = parseInt(items[3]);
         }
      };
    });

 var seriesBarChart = {
            name:'mycat',
            data: []
          };

        // 7a. Navigate through type object and insert data into categories and series
        for (item in regions)
        {
          option_barchart.xAxis.categories.push(item);
          seriesBarChart.data.push(parseFloat(regions[item]));
        }
        option_barchart.series.push(seriesBarChart);

    // 8. Finally draw the chart by creating a new "Highcharts" object, which has settings that are defined in "options"
    var chart = new Highcharts.Chart(option_barchart);
  });

});






 