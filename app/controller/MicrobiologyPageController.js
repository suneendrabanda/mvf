Ext.define("MVF.controller.MicrobiologyPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=MicroBiologyviewbuttonid]',
            microbilogyviewpanel:'[itemid=mbviewingitem]',
            microbiologychartview:'[itemid=mbchartviewingid]',
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
        }
    },
    OnViewClickFunction:function(){
        var MBvalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=mbstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=mbenddate]')[0].getFormattedValue();
        console.log(MBvalue);console.log(StartDate);console.log(EndDate);
        var store=Ext.getStore('chemistrychartstore');
        store.load({
                params:{ MBvalue: MBvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                         scope:this,
                         callback:function(records){
                             var values= records;
                               var result=values[0].data.microbiologyname;
                                var time=values[0].data.time;
                                var min=values[0].data.minimunvalue;
                                var max=values[0].data.maximumvalue;
                                var date=values[0].data.date;
                                console.log(result);
                                console.log(time);
                                console.log(min); console.log(max);console.log(date);
                         }
                     });
        var microbilogyvaluevalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var viewingitem=this.getMicrobilogyviewpanel();
        var chartviewingpanel=this.getMicrobiologychartview();
        viewingitem.setHtml(microbilogyvaluevalue);
        chartviewingpanel.setHtml(microbilogyvaluevalue);             
    }
    });