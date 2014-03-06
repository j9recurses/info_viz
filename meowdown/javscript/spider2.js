$(function () {

    window.chart = new Highcharts.Chart({
                
        chart: {
            renderTo: 'myspider',
            polar: true,
            type: 'line'
        },
        
        title: {
            text: 'Budget vs spending',
            x: -80
        },
        
        pane: {
            size: '80%'
        },
        
        xAxis: {
            categories: ['Station Master Tama' , 'Colonel Meow', 'Lil Bub', 'Henri', 'Maru', 'Grumpy Cat', 'Keyboard cat', 'Nyan Cat' ],
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
            valuePrefix: '$'
        },
        
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },
        
        series: [{
            name: 'YouTube',
            data: [ 148728  ,890091 ,3710744,   8280649 ,11910297   ,14566003   ,34455121   ,106681028],
            pointPlacement: 'on'
        }, {
            name: 'Facebook',
            data: [ 1721,  403019 , 647172 , 152716 , 99062, 3890342, 26216 ,2891657] ,
            pointPlacement: 'on'
        },

         {
            name: 'Twitter',
            data:  [ 0 , 8455 , 34600, 26900 ,16100 ,135000,  15900, 187000] ,
            pointPlacement: 'on'
        }
        ]
    
    });
});