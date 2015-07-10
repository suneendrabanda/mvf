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
        
        innerpadding:'30',
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
        legend:{
            position:'right',
            width:'142px',
            style:{
                'margin-left':'0px'
            }
        },
        insetPadding:22,
        series: [
                     {
                        type: 'pie',
                        labelField: 'outputname',
                        xField: 'result',
                        donut: 50,
                        
                     }
                    ]
                    
        
    }
    
});

