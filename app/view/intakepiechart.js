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
        legend:{
            position:'right',
            width:'10px'
           
        },
      // animate: true,

        insetPadding:50,
       
        highlight: {
                  segment: {
                    margin: 20
                  }
                },
                 label: {
                    field: 'intakename'
                   
                },
        series: [
                     {
                        type: 'pie',
                        labelField: 'intakename',
                        xField: 'result',
                        donut: 50,
                        height:25,
                        width:'100px',
//                        subStyle: {
//                                    strokeStyle: ['black', 'black', 'black', 'black', 'black'],
//                                    lineWidth: [1,1,1,1,1]
//                                }
//                         tips: {
//                                    trackMouse: true,
//                                    width: 140,
//                                    height: 28,
//                                    renderer: function(sprite, config, rendererData, index) {
//                                      //calculate percentage.
//                                      var total = 0;
//                                      var store=Ext.StoreMgr.get('intakepiechartstore');
//                                      store.each(function(rec) {
//                                          total += rec.get('result');
//                                      });
//                                      this.setTitle(storeItem.get('intakename') + ': ' + storeItem.get('result'));
//                                    }
//                                  }
                      
                     }
                      
                 ],
//                      interactions: [{
//                                        type      : 'iteminfo',
//                                        listeners : {
//                                            show : function(me, item, panel) {
//                                                panel.setHtml('Name: ' + item.record.get('intakename')+'<br>'+'data:'+item.record.get('result'));
//                                            }
//                                        }
//                                    }]
                
        
    }
    
});

