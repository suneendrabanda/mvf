Ext.define("MVF.controller.ABSLabController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=absviewbuttonid]',
           
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            }
        }
    },
    OnViewClickFunction:function(){
        //alert('abs viewl click working');
        var absSelectedValue=Ext.ComponentQuery.query('[itemid=absdropdownvalueid]')[0].getValue();
        var AbsStartDate=Ext.ComponentQuery.query('[itemid=absstartdate]')[0].getFormattedValue();
        var AbsEndDate=Ext.ComponentQuery.query('[itemid=absenddate]')[0].getFormattedValue();
        var ShiftValue=Ext.ComponentQuery.query('[itemid=absshift]')[0].getValue();
        console.log(absSelectedValue);console.log(AbsStartDate);console.log(AbsEndDate);
        console.log(ShiftValue);
        var store=Ext.getStore('ABSChartStore');
        store.load({
            params:{
                absSelectedValue:absSelectedValue,
                StartDate:AbsStartDate,
                EndDate:AbsEndDate,
                shiftvalue:ShiftValue
                },
                scope:this,
                callback:function(records,success){
                    if(success){
                    var values=records;
                    var result=values[0].data.absvalue;
                    var time=values[0].data.time;
                    var min=values[0].data.minimunvalue;
                    var max=values[0].data.maximumvalue;
                    var date=values[0].data.date;
                    console.log(result);
                    console.log(time);
                    console.log(min); console.log(max);console.log(date);
                    
                }
            }
        });
    }
});