/*global Ext:false */
Ext.define('Override.chart.series.sprite.PieSlice', {
    override: 'Ext.chart.series.sprite.PieSlice',
    render: function(ctx, surface, clipRegion) {
        var me = this,
            attr = me.attr,
            itemCfg = {},
            changes;

        if (attr.renderer) {
            itemCfg = {
                type: 'sector',
                text: attr.text,
                centerX: attr.centerX,
                centerY: attr.centerY,
                margin: attr.margin,
                startAngle: Math.min(attr.startAngle, attr.endAngle),
                endAngle: Math.max(attr.startAngle, attr.endAngle),
                startRho: Math.min(attr.startRho, attr.endRho),
                endRho: Math.max(attr.startRho, attr.endRho)
            };
            changes = attr.renderer.call(me, me, itemCfg, me.rendererData, me.rendererIndex);
            Ext.apply(me.attr, changes);
            
            // FIX
            Ext.apply(me.attr.canvasAttributes,changes); //Keep this object accurate            
            Ext.apply(surface, changes); //Apply changes to canvas
            //End of Fix
        }

        // Draw the sector
        me.callSuper(arguments);

        // Draw the labels
        if (attr.label && me.getBoundMarker('labels')) {
            me.placeLabel();
        }
    }
    
});
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
        colors: ["#F0523F","#FFD779","#BBAF82","#72DAF1","#87B675","#cf27c1"],
        insetPadding:22,
        series: [
                     {
                        type: 'pie',
                        labelField: 'intakename',
                        labelOverflowPadding:'1px',
//                        label:{
//                            //'display':'none',
//                            'field ':['intakename']
//                        },
                        xField: 'result',
                        donut: 50,
                        substyle:{
                            visibility:'hidden'
                        },

                     }
                    ],
                    legend:{
                            position:'right',
                            width:'136px',
                            
                        },
                    
        
    }
    
});

