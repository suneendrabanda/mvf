Ext.define("MVF.controller.ChemistryLabsController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=chemistryviewbuttonid]',
            chemistrychartviewpanel:'[itemid=chartviewingid]',
            viewingpanel:'[itemid=viewingitem]',
            chemistryalertdatepanel:'[itemid=chealertdate]',
            chemistryalertinfo:'[itemid=chealertinfo]',
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            }
        }
    },
    OnViewClickFunction:function(){
        //alert('controller working');
            var chemistryvalue=Ext.ComponentQuery.query('[itemid=chemisrtydropdownvalueid]')[0].getValue();
            var viewingitem=this.getViewingpanel();
            var chartviewingpanel=this.getChemistrychartviewpanel();
            var chemistryalertdatepanel=this.getChemistryalertdatepanel();
            var chemistryalertinfo=this.getChemistryalertinfo();
            console.log(chemistryvalue);
            viewingitem.setHtml(chemistryvalue);
            chartviewingpanel.setHtml(chemistryvalue);
            var store=Ext.getStore('chemistrychartstore');
            var startdatevalue=Ext.ComponentQuery.query('[itemid=chemistrystartdate]')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('[itemid=chemistryenddate]')[0].getFormattedValue();
            console.log(startdatevalue);
            console.log(enddatevalue);
            
            store.load({
                params:{ chemistryvalue: chemistryvalue,
                         startdate: startdatevalue,
                         enddate: enddatevalue},
                         scope:this,
                callback:function(records,success){
                    if(success){
                    var values=records;
                    var result=values[0].data.chemistryname;
                    var time=values[0].data.time;
                    var min=values[0].data.minimunvalue;
                    var max=values[0].data.maximumvalue;
                    var date=values[0].data.date;
                    console.log(result);
                    console.log(time);
                    console.log(min); console.log(max);console.log(date);
                    if(result>max){
                        chemistryalertinfo.setHtml('High '+chemistryvalue+' count');
                        chemistryalertdatepanel.setHtml(date);
                    }
                    //Ext.Msg.alert(vitalvalues);
                }
                }
                   });
    }
    });