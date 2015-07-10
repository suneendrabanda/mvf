Ext.define("MVF.controller.MicrobiologyPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            microbiologyview:'microbiologyview',
            OnViewClick:'[itemid=MicroBiologyviewbuttonid]',
            microbiologychartview:'[itemid=mbchartviewingid]',
            MicrobiologyUpdateButton:'[itemid=MicrobiologyUpdateButton]',
            MicrobiologyTable:'[itemid=MBResultsTable]',
            GoToPageDropDownSelect:'[itemid=MBlabsPageId]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            MicrobiologyUpdateButton:{
                tap:'MicrobiologyUpdateButtonFunction'
            },
            GoToPageDropDownSelect:{
                change:'GoToPageDropDownSelect'
            }
        }
    },
    init:function(){
        this.MicroBiologyEditFunction();
    },
    GoToPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=MBlabsPageId]')[0].getValue();
        console.log(pagename);
         this.getMicrobiologyview().push({
          xtype:pagename
      });
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
                         enddate: EndDate,
                         patient_id:MVF.app.patient_id},
                         scope:this,
                         callback:function(records,success){
                                    if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                                        alert('No records found');
                                    }
                            }
                     });
        var microbilogyvaluevalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var chartviewingpanel=this.getMicrobiologychartview();
        chartviewingpanel.setHtml(microbilogyvaluevalue);        
        var MBTableStore= Ext.getStore('MicrobiologyTableStore');
        MBTableStore.load({
                 params:{ MBvalue: MBvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         patient_id:MVF.app.patient_id},
                        scope:this,
                         callback:function(records){
                             var values=records;
                             this.DisplayMicrobiologyResults(values,StartDate,EndDate);
                         }
             });
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
                                         xtype:'selectfield',
                                         itemid:'MBtimeedit',
                                          options: [
                                                   {text: '01:00',  value: '01:00'},
                                                   {text: '01:30',  value: '01:30'},
                                                   {text: '02:00',  value: '02:00'},
                                                   {text: '02:30',  value: '02:30'},
                                                   {text: '03:00',  value: '03:00'},
                                                   {text: '03:30',  value: '03:30'},
                                                   {text: '04:00',  value: '04:00'},
                                                   {text: '04:30',  value: '04:30'},
                                                   {text: '05:00',  value: '05:00'},
                                                   {text: '05:30',  value: '05:30'},
                                                   {text: '06:00',  value: '06:00'},
                                                   {text: '06:30',  value: '06:30'},
                                                   {text: '07:00',  value: '07:00'},
                                                   {text: '07:30',  value: '07:30'},
                                                   {text: '08:00',  value: '08:00'},
                                                   {text: '08:30',  value: '08:30'},
                                                   {text: '09:00',  value: '09:00'},
                                                   {text: '09:30',  value: '09:30'},
                                                   {text: '10:00',  value: '10:00'},
                                                   {text: '10:30',  value: '10:30'},
                                                   {text: '11:00',  value: '11:00'},
                                                   {text: '11:30',  value: '11:30'},
                                                   {text: '12:00',  value: '12:00'},
                                                   {text: '12:30',  value: '12:30'},
                                                   {text: '13:00',  value: '13:00'},
                                                   {text: '13:30',  value: '13:30'},
                                                   {text: '14:00',  value: '14:00'},
                                                   {text: '14:30',  value: '14:30'},
                                                   {text: '15:00',  value: '15:00'},
                                                   {text: '15:30',  value: '15:30'},
                                                   {text: '16:00',  value: '16:00'},
                                                   {text: '16:30',  value: '16:30'},
                                                   {text: '17:00',  value: '17:00'},
                                                   {text: '17:30',  value: '17:30'},
                                                   {text: '18:00',  value: '18:00'},
                                                   {text: '18:30',  value: '18:30'},
                                                   {text: '19:00',  value: '19:00'},
                                                   {text: '19:30',  value: '19:30'},
                                                   {text: '20:00',  value: '20:00'},
                                                   {text: '20:30',  value: '20:30'},
                                                   {text: '21:00',  value: '21:00'},
                                                   {text: '21:30',  value: '21:30'},
                                                   {text: '22:00',  value: '22:00'},
                                                   {text: '22:30',  value: '22:30'},
                                                   {text: '23:00',  value: '23:00'},
                                                   {text: '23:30',  value: '23:30'},
                                                   {text: '24:00',  value: '24:00'},
                                                   {text: '24:30',  value: '24:30'}
                                               ],
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
                result:EditResult,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                if(success){
                    alert(records[0].data.information);
                }
            }
        });
    },
    DisplayMicrobiologyResults:function(records,startdate,enddate){
        var TableStore=Ext.getStore('MicrobiologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var TableValues='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        var tablepanel=this.getMicrobiologyTable();
        var i=0;
                  for(i=0;i<No_of_Results_Fetch;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
                                TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                TableValues+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    TableValues+='</tbody></table>';
        
              TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
                      
    },
    OnMicrobiologyPageLoad:function(){
         var MBvalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=mbstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=mbenddate]')[0].getFormattedValue();
        console.log(MBvalue);console.log(StartDate);console.log(EndDate);
        var store=Ext.getStore('MicrobiologyChartStore');
        store.load({
                params:{ MBvalue: MBvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         patient_id:MVF.app.patient_id},
                         scope:this,
                         callback:function(records,success){
                                    if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                                        //alert('No records found');
                                    }
                            }
                     });
        var MicrobiologyStore=Ext.getStore('LabsMainMicrobiologyResultsStore');
        var MicrobiologyresultsPanel=this.getMicrobiologyTable();
        var MicrobiologyResults='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        MicrobiologyStore.load({
            params:{
                date:StartDate,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=MicrobiologyStore.getCount();
               // console.log('no of Microbiology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
                                MicrobiologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                MicrobiologyResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            MicrobiologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    MicrobiologyResults+='</tbody></table>';
                    MicrobiologyresultsPanel.setHtml(MicrobiologyResults);
                   // console.log(MicrobiologyResults);
                }
            }
        });
        
    }
    });