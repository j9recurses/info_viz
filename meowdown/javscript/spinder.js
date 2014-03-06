$(function () {

    window.chart = new Highcharts.Chart({
                
        chart: {
            renderTo: 'myspider',
            polar: true,
            type: 'line'
        },
        
        title: {
            text: 'Youtube vs Facebook vs Twitter: Who is the most popular?',
            x: -80
        },
        
        pane: {
            size: '80%'
        },
        
        xAxis: {
            categories: ['YouTube', 'Facebook', 'Twitter'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
            
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        
        tooltip: {
            shared: true,
            valuePrefix: 'Number of Followers, views or likes'
        },
        
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 5,
            layout: 'vertical'
        },
        

        series: [
        {   name: 'Station Master Tama',
            color:"#800080",
            data: [1 , 0  , .1721],
            pointPlacement: 'on'
        }, 

        {
             name: 'Colonel Meow',
             color: "#FF00FF",
            data: [8, 8.455  ,  40.3019],
            pointPlacement: 'on'
        },

         {
             name: 'Lil Bub',
             color:"#0000FF",
            data: [37,34.600 ,  64.7172],
            pointPlacement: 'on'
        },

         {
             name: 'Henri',
             color:"#FF0000",
            data: [82,  26.900 ,  15.2716],
            pointPlacement: 'on'
        },

         {
            name: 'Maru',
            color: '#00F5FF',
            data: [ 119 ,  16.100 ,  9.9062],
            pointPlacement: 'on'
        },

          {
            name: 'Grumpy Cat',
            color: "#FFA500",
            data: [  145  ,  135.000 , 389.0342],
            pointPlacement: 'on'
        },

          {
            name: 'Keyboard Cat',
            color:'#FFFF00',
            data: [  344  ,  15.900  , 2.6216],
            pointPlacement: 'on'
        },

         {
            name: 'Nyan Cat ',
            color:"#00FF00",
            data: [  1066  , 187.000 , 289.1657],
            pointPlacement: 'on'
        },

        ]


    
    });
});