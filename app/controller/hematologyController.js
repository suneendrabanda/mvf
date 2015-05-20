Ext.define("MVF.controller.hematologyController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=hematologyviewbuttonid]',
            
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            }
        }
    },
    OnViewClickFunction:function(){
            var hematologyvalue=Ext.ComponentQuery.query('[itemid=hematologydropdownvalueid]')[0].getValue();
            var StartDate=Ext.ComponentQuery.query('[itemid=hematologystartdate]')[0].getFormattedValue();
            var EndDate=Ext.ComponentQuery.query('[itemid=hematologyenddate]')[0].getFormattedValue();
            var store=Ext.getStore('HematologyChartStore');
           // console.log(hematologyvalue);console.log(StartDate);
            store.load({
                params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                         scope:this,
                     });
    }
    });