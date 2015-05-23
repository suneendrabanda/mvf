Ext.define("MVF.controller.IOPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=IOviewbuttonid]',
            OutputSelectChange:'[itemid=OutputSelectID]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            OutputSelectChange:{
                change:'OnViewClickFunction' //Also calls OnViewClickFunction function even is selectfield changes
            }
            
        }
    },
    init:function(){
        console.log(' In IO init function');
         var store=Ext.getStore('IOPageOutputChartStore');
         var v1='load';
         var v2='2013-01-12';
        store.load({
                params:{ shiftvalue: v1,
                         startdate: v2,
                         enddate: v2,
                         OutputValue:v1},
                         
                     });
    },
    OnViewClickFunction:function(){
        //alert('IO contrller working');
        var shiftvalue=Ext.ComponentQuery.query('[itemid=IOshift]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=IOstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=IOenddate]')[0].getFormattedValue();
        var OutputSelectValue=Ext.ComponentQuery.query('[itemid=OutputSelectID]')[0].getValue();
        var IntakeSelectValue=Ext.ComponentQuery.query('[itemid=IntakeSelectID]')[0].getValue();
        console.log(shiftvalue);console.log(StartDate);console.log(EndDate);console.log(OutputSelectValue);
        var store=Ext.getStore('IOPageOutputChartStore');
        store.load({
                params:{ shiftvalue: shiftvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         OutputValue:OutputSelectValue},
                         scope:this
                     });
        var IntakeStore=Ext.getStore('IOPageIntakeChartStore');
        IntakeStore.load({
                params:{ shiftvalue: shiftvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         IntakeValue:IntakeSelectValue},
                         scope:this
                     });             
    }
    
    });