/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.view.HematologyChartView", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.HematologyChartView",
    config: {
        flex: 1,
        xtype: "chart",
        store: "HematologyChartStore",
        cls: "chart",
        innerPadding: 14,
        
        animate: true,
        series: [
            {
                type: "line",
                xField: "date",
                yField: "InRange",
                title: "lab chart",
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
                xField: "date",
                yField: "AboveRange",
                title: "lab chart",
                 style: {
                    stroke: "#FF0000",
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
                xField: "date",
                yField: "BelowRange",
                title: "lab chart",
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
            }
            
            
            
        ], 
        interaction:[{
                type:'panzoom',
                zoomOnPanGesture:true
        }],
        axes: [
            {
                type: "numeric",
                //mininum:'40',
                position: "left",
                title: {
                    fontSize: 15
                   // text: "vital"   Y axis 
                },
                style:{
                    stroke:"#655c59"
                },
                grid: true
            },
            {
                type: "category",
                position: "bottom",
                style:{
                    stroke:"#98918f"
                }
                
            }
        ]
    }
});
