/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("MVF.view.abschartview", {
    extend: "Ext.chart.CartesianChart",
    requires: [
        "Ext.TitleBar",
        "Ext.chart.CartesianChart",
        "Ext.chart.series.Line",
        "Ext.chart.axis.Numeric",
        "Ext.chart.axis.Category",
        "Ext.draw.sprite.Circle"
    ],
    alias: "widget.abschartview",
    config: {
        flex: 1,
        xtype: "chart",
        store: "ABSChartStore",
        cls: "chart",
        innerPadding: 14,
        
        animate: true,
        series: [
            {
                type: "line",
                xField: "time",
                yField: "absvalue",
                title: "lab chart",
                tips:{
                    trackmouse:true,
                    width:40,
                    height:30,
                    renderer: function(storeItem,item){
                        this.setTitle(storeItem.get('time')+'<br>'+storeItem.get('vital'));
                    }
                },
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
