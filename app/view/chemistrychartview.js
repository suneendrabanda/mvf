/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.view.chemistrychartview", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.chemistrychartview",
    config: {
        flex: 1,
        xtype: "chart",
        store: "chemistrychartstore",
        cls: "chart",
        innerPadding: 14,
        
        animate: true,
        series: [
            {
                type: "line",
                xField: "date",
                yField: "result",
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
                yField: "min",
                title: "lab chart",
                 style: {
                    stroke: "#59A3DB",
                    lineWidth: 1.5
                },
               marker: {
                    type: "",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            },
            {
                type: "line",
                xField: "date",
                yField: "max",
                title: "lab chart",
                 style: {
                    stroke: "#59A3DB",
                    lineWidth: 1.5
                },
               marker: {
                    type: "",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            },
            {
                type: "line",
                xField: "date",
                yField: "exact",
                title: "lab chart",
                 style: {
                    stroke: "#59A3DB",
                    lineWidth: 1.5
                },
               marker: {
                    type: "",
                    stroke: "#AC9C65",
                    radius: 3,
                    lineWidth: 2
                }
            }
          ], 
      axes: [
            {
                type: "numeric",
                position: "left",
                title: {
                    fontSize: 15
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
