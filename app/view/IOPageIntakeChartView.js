Ext.define("MVF.view.IOPageIntakeChartView", {
    extend: "Ext.chart.PolarChart",
    requires:[
        "Ext.chart.PolarChart",
        "Ext.chart.AbstractChart",
        "Ext.chart.series.Pie"
    ],
    alias:"widget.IOPageIntakeChartView",
    config:{
        layout:'fit',
          flex: 1,
        xtype:'polar',
        store:'IOPageIntakeChartStore',
        animate:'true',
        
        innerpadding:'30',
        colors: ["#F0523F","#FFD779","#BBAF82","#72DAF1","#87B675","#FF5472"],
        legend:{
            position:'right',
            width:'120px'
        },
        //interactions: ['rotate', 'itemhighlight'],
        insetPadding:42,
        series: [
                     {
                        type: 'pie',
                        labelField: 'intakename',
                        xField: 'result',
                        donut: 50
                     }
                    ]
                    
        
    }
    
});

