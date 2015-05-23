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
        store:'IOPageOutputChartStore',
        animate:'true',
        
        innerpadding:'10',
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
        insetPadding:72,
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

