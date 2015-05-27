Ext.define("MVF.controller.MicrobiologyPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=MicroBiologyviewbuttonid]',
            microbilogyviewpanel:'[itemid=mbviewingitem]',
            microbiologychartview:'[itemid=mbchartviewingid]',
            MicrobiologyUpdateButton:'[itemid=MicrobiologyUpdateButton]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            MicrobiologyUpdateButton:{
                tap:'MicrobiologyUpdateButtonFunction'
            }
        }
    },
    init:function(){
        this.MicroBiologyEditFunction();
    },
    OnViewClickFunction:function(){
        var MBvalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=mbstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=mbenddate]')[0].getFormattedValue();
        console.log(MBvalue);console.log(StartDate);console.log(EndDate);
        var store=Ext.getStore('MicrobiologyChartStore');
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
    },
    MicroBiologyEditFunction:function(){
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditMicroBiologyvaluesOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  '460px',//Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: '400px',//Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                                    {
                                       xtype: 'selectfield',
                                       width:'100%',
                                       store: 'microbiologydropdownstore',
                                       itemid:'mbEditvalueid',
                                       name:'mbEditvalueid',
                                       valueField:'value',
                                       displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'MBdateedit',
                                         width:'100%',
                                         name:'MBdateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'MBtimeedit',
                                         itemid:'MBtimeedit',
                                         placeHolder:'Enter Time',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'MBresultedit',
                                         itemid:'MBresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'MicrobiologyUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#MBEditValuesicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
               }
        });
    },
    MicrobiologyUpdateButtonFunction:function(){
        var MBEditValue=Ext.ComponentQuery.query('[itemid=mbEditvalueid]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=MBdateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=MBtimeedit]')[0].getValue();
        var EditResult=Ext.ComponentQuery.query('[itemid=MBresultedit]')[0].getValue();
        var store=Ext.getStore('MicrobiologyResultUpdateStore');
        store.load({
            params:{
                MBEditValue:MBEditValue,
                date:EditDate,
                time:EditTime,
                result:EditResult
            },
            scope:this,
            callback:function(records,success){
                if(success){
                    alert(records[0].data.information);
                }
            }
        });
    }
    });