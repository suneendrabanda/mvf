/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.view.bplinechart", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.bplinechart",
    config: {
        flex: 1,
        xtype: "chart",
        store: "bpLineChart",
        cls: "chart",
        innerPadding: 10,
        interaction:[{
                type:'panzoom',
                zoomOnPanGesture:'true'
        }],
        animate: true,
        series: [
            {
                type: "line",
                xField: "time",
                yField: "vitalnum",
                title: "Vital chart",
                style: {
                    stroke: "#DFD9CF",
                    lineWidth: 1.5
                },
               
                marker: {
                    type: "circle",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            },
            {
                type: "line",
                xField: "time",
                yField: "vitaldeno",
                title: "Vital chart",
                style: {
                    stroke: "#ff0000",
                    lineWidth: 1.5
                },
               
                marker: {
                    type: "circle",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            }
            
            
            
        ], 
        axes: [
            {
                type: "numeric",
                //mininum:'40',
                position: "left",
                title: {
                    fontSize: 15
                   // text: "vital"   Y axis 
                },
                grid: true
            },
            {
                type: "category",
                position: "bottom"
            }
        ]
    }
});
