Ext.define("MVF.controller.ABSLabController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            absview:'absview',
            OnViewClick:'[itemid=absviewbuttonid]',
            ABSUpdateButton:'[itemid=AbsUpdateButton]',
            ABSTablePanel:'[itemid=ABSTablePanel]',
            ABGGoToPageSelect:'[itemid=Abgpageid]',
            ABSGraphViewId:'[itemid=ABSGraphViewId]',
            Absdropdownvalueid:'[itemid=absdropdownvalueid]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            ABSUpdateButton:{
                tap:'OnABSUpdateButton'
            },
            ABGGoToPageSelect:{
                change:'ABGGoToPageSelect'
            }
        }
    },
    init:function(){
        this.EditABSValuesPopUp();
        
    },
    ABGGoToPageSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=Abgpageid]')[0].getValue();
        console.log(pagename);
        
         this.getabsview().push({
          xtype:pagename
      });
    },
    OnViewClickFunction:function(){
        //alert('abs viewl click working');
        var absSelectedValue=Ext.ComponentQuery.query('[itemid=absdropdownvalueid]')[0].getValue();
        var AbsStartDate=Ext.ComponentQuery.query('[itemid=absstartdate]')[0].getFormattedValue();
        var AbsEndDate=Ext.ComponentQuery.query('[itemid=absenddate]')[0].getFormattedValue();
        var ShiftValue=Ext.ComponentQuery.query('[itemid=absshift]')[0].getValue();
//        console.log(absSelectedValue);console.log(AbsStartDate);console.log(AbsEndDate);
//        console.log(ShiftValue);
        var store=Ext.getStore('ABSChartStore');
        store.load({
            params:{
                absSelectedValue:absSelectedValue,
                StartDate:AbsStartDate,
                EndDate:AbsEndDate,
                shiftvalue:ShiftValue,
                patient_id:MVF.app.patient_id
                },
                scope:this,
                callback:function(records,success){
                    if(records[0].data.result==='null'&&records[0].data.time==='null'&&records[0].data.exact==='null'&&records[0].data.minimunvalue==='null'&&records[0].data.maximumvalue==='null'&&records[0].data.date==='null'){
                            alert('No records found');
                        }
                    
                   
            }
        });
        var tableStore=Ext.getStore('ABSTableStore');
        tableStore.load({
            
            params:{
                startdate:AbsStartDate,
                enddate:AbsEndDate,
                shift:ShiftValue,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                if(success){
                     this.DisplayTable(records,AbsStartDate,AbsEndDate,ShiftValue);
                }
            }
        });
    },
    EditABSValuesPopUp:function(){
        console.log('in EditABSValuesPopUp function');
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditABSvaluesOverlay',
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
                                        store: 'ABSDropDownStore',
                                        itemid:'AbsEditValueId',
                                        name:'AbsEditValueId',
                                        valueField:'value',
                                        displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Absdateedit',
                                         width:'100%',
                                         name:'Abddateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Absedittimevalue',
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
                                         name:'Absresultedit',
                                         itemid:'Absresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'AbsUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
        });
	
	Ext.Viewport.on({
            delegate: '#absedittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OnABSUpdateButton:function(){
        var ABSEditValue=Ext.ComponentQuery.query('[itemid=AbsEditValueId]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=Absdateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=Absedittimevalue]')[0].getValue();
        var Result=Ext.ComponentQuery.query('[itemid=Absresultedit]')[0].getValue();
        var store=Ext.getStore('ABSResultUpdateStore');
        store.load({
            params:{
                ABSEditValue:ABSEditValue,
                date:EditDate,
                time:EditTime,
                result:Result,
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
    DisplayTable:function(records,startdate,enddate,shift){
       
        var TableStore=Ext.getStore('ABSTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var TablePanel=this.getABSTablePanel();
        var TableValues='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        var i=0;
                    for(i=0;i<No_of_Results_Fetch;i++){
                        if(records[i].data.exact==='null'){
                            if(parseFloat(records[i].data.result)<=parseFloat(records[i].data.max) && parseFloat(records[i].data.result)>=parseFloat(records[i].data.min)){
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
       TablePanel.setHtml(TableValues);
                
                
    },
    OnABGPageLoad:function(){
//        var absSelectedValue=Ext.ComponentQuery.query('[itemid=absdropdownvalueid]')[0].getValue();
//        var AbsStartDate=Ext.ComponentQuery.query('[itemid=absstartdate]')[0].getFormattedValue();
//        var AbsEndDate=Ext.ComponentQuery.query('[itemid=absenddate]')[0].getFormattedValue();
//        var ShiftValue=Ext.ComponentQuery.query('[itemid=absshift]')[0].getValue();
////        console.log(absSelectedValue);console.log(AbsStartDate);console.log(AbsEndDate);
////        console.log(ShiftValue);
//        var store=Ext.getStore('ABSChartStore');
//        store.load({
//            params:{
//                absSelectedValue:absSelectedValue,
//                StartDate:AbsStartDate,
//                EndDate:AbsEndDate,
//                shiftvalue:ShiftValue,
//                patient_id:MVF.app.patient_id
//                },
//                scope:this,
//                callback:function(records,success){
//                    if(records[0].data.result==='null'&&records[0].data.time==='null'&&records[0].data.exact==='null'&&records[0].data.minimunvalue==='null'&&records[0].data.maximumvalue==='null'&&records[0].data.date==='null'){
//                            //alert('No records found');
//                        }
//                    
//                   
//            }
//        });
        var ABGStore=Ext.getStore('LabsMainABGResultsStore');
        var ABGresultsPanel=this.getABSTablePanel();
        var AbsStartDate=Ext.ComponentQuery.query('[itemid=absstartdate]')[0].getFormattedValue();
        var ABGResults='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        ABGStore.load({
            params:{
                date:AbsStartDate,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=ABGStore.getCount();
                console.log('no of ABG results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
                                ABGResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                ABGResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            ABGResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    ABGResults+='</tbody></table>';
                    ABGresultsPanel.setHtml(ABGResults);
                    
                    //console.log(ABGResults);
                }
                //testing
                var time=records[0].data.time.replace(":","");
                if(parseInt(time)>700&& parseInt(time)<1500){
                    var shift='day';
                }
                else if(parseInt(time)>=1500&& parseInt(time)<2300){
                    var shift='evening';
                }
                else if(parseInt(time)>=2300 || parseInt(time)<700){
                    var shift='night';
                }
                //console.log('shift = '+shift);
                var store=Ext.getStore('ABSChartStore');
                var AbsEndDate=Ext.Date.format(Ext.Date.add(new Date(records[0].data.date),Ext.Date.DAY,7),'m/d/Y');
                var LabViewing=this.getABSGraphViewId();
                var SeletedLab=this.getAbsdropdownvalueid();
                console.log(SeletedLab);
                SeletedLab.setName(records[0].data.name);
                LabViewing.setHtml(records[0].data.name);
                store.load({
                params:{
                    absSelectedValue:records[0].data.name,
                    StartDate:records[0].data.date,
                    EndDate:AbsEndDate,
                    shiftvalue:shift,
                    patient_id:MVF.app.patient_id
                    },
                    scope:this,
                    callback:function(records,success){
                        if(records[0].data.result==='null'&&records[0].data.time==='null'&&records[0].data.exact==='null'&&records[0].data.minimunvalue==='null'&&records[0].data.maximumvalue==='null'&&records[0].data.date==='null'){
                                //alert('No records found');
                            }
                        }
            });
            }
        });
         var ChemistryStore=Ext.getStore('ABGNotesStore');
            ChemistryStore.load({
                params:{
                    patient_id:MVF.app.patient_id,
                    Nurse_id:'S1019'
                }
            });
    }
});