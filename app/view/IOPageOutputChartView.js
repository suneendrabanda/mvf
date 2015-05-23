Ext.define("MVF.view.IOPageOutputChartView", {
    extend: "Ext.chart.PolarChart",
    requires:[
        "Ext.chart.PolarChart",
        "Ext.chart.AbstractChart",
        "Ext.chart.series.Pie"
        
        
        
    ],
    alias:"widget.IOPageOutputChartView",
    config:{
        layout:'fit',
          flex: 1,
        xtype:'polar',
        store:'IOPageOutputChartStore',
        animate:'true',
        
        innerpadding:'10',
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
//        legend:{
//            position:'right'
//        },
        insetPadding:72,
        highlight: {
                  segment: {
                    //margin: 20
                  }
                },
                 label: {
                    //field: 'outputname',
//                    display: 'rotate',
//                    contrast: true,
//                    font: '0px Arial'
                },
                style:{
                    
                },
        series: [
                     {
                        type: 'pie',
                        labelField: 'outputname',
                        xField: 'result',
                        donut: 50
                     }
                    ]
                    
        
    }
    
});

