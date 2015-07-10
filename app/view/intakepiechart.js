Ext.define("MVF.view.intakepiechart", {
    extend: "Ext.chart.PolarChart",
    requires:[
        "Ext.chart.PolarChart",
        "Ext.chart.AbstractChart",
        "Ext.chart.series.Pie",
        "Ext.chart.*"
        
        
        
    ],
    alias:"widget.intakepiechart",
    config:{
        layout:'fit',
          flex: 1,
        xtype:'polar',
        store:'intakepiechartstore',
        animate:'true',
        
        innerpadding:'10',
        colors: ["#F0523F","#FFD779","#BBAF82","#72DAF1","#87B675","#FF5472"],
        insetPadding:72,
//        label: {
//                    field: 'intakename'
//                   
//                },
        series: [
                     {
                        type: 'pie',
                        labelField: 'intakename',
                        labelOverflowPadding:'1px',
                        xField: 'result',
                        donut: 50,
                        height:25,
                        width:'100px',
                    }
                ],
            }
    
});

