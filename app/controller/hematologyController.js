Ext.define("MVF.controller.hematologyController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            //LabsMain:'LabsMainView',
            hematology:'hematology',
            OnViewClick:'[itemid=hematologyviewbuttonid]',
            HematologyTable:'[itemid=HematologyResultsTable]',
            HematologyUpdateButton:'[itemid=HematologyUpdateButton]',
            HematologyChartViewingPanel:'[itemid=hematologychartviewingid]',
            HematologyAlertPanel:'[itemid=HematologyAlertsCount]',
            HematologyTableAlerts:'[itemid=TablealertPanel]',
            HematologyChartAlertCount:'[itemid=hematologyChartAlertsCount]',
            HematologyGoToPageDropDownSelect:'[itemid=hematologypageid]',
            
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            HematologyUpdateButton:{
                tap:'OnHematologyUpdateButtonTap'
            },
            HematologyGoToPageDropDownSelect:{
                change:'HematologyGoToPageDropDownSelect'
            },
            
        }
    },
    init:function(){
        this.editHematologyValuesfunction();
        this.HematologyViewDefinition();
        //this.CountNO_OFAlerts();
    },
    HematologyGoToPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=hematologypageid]')[0].getValue();
        console.log(pagename);
         //this.getHematology().pop(pagename);
//        if(Ext.getCmp(pagename)){
//              
//               this.getApplication().getController('MainController').getLabsMain().pop();
//            }
         
                    this.getHematology().push({
                     xtype:pagename
                 });
         
    },
    OnViewClickFunction:function(){
            var hematologyvalue=Ext.ComponentQuery.query('[itemid=hematologydropdownvalueid]')[0].getValue();
            var StartDate=Ext.ComponentQuery.query('[itemid=hematologystartdate]')[0].getFormattedValue();
            var EndDate=Ext.ComponentQuery.query('[itemid=hematologyenddate]')[0].getFormattedValue();
            var store=Ext.getStore('HematologyChartStore');
            var HematologyChartViewingPanel=this.getHematologyChartViewingPanel();
            HematologyChartViewingPanel.setHtml(hematologyvalue);
            this.CountNO_OFAlerts();
            store.load({
                params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                        patient_id:MVF.app.patient_id
                        },
                     scope:this,
                     callback:function(records,success){
                         if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                             alert('No records found');
                         }
                        }
                         
                     });
                     
             var TableStore=  Ext.getStore('HematologyTableStore');
             TableStore.load({
                 params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         patient_id:MVF.app.patient_id
                       },
                        scope:this,
                         callback:function(records){
                             var values=records;
                             this.DisplayHematologyResults(values,StartDate,EndDate);
                         }
             });
    },
    editHematologyValuesfunction:function(){
      console.log('in editHematologyValuesfunction function');
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditHematologyvaluesOverlay',
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
                                       store: 'hematologyDropDownStore',
                                       itemid:'hematologyEditdropdownvalueid',
                                       name:'hematologyEditdropdownvalueid',
                                       valueField:'value',
                                       displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Hematologydateedit',
                                         width:'100%',
                                         name:'Hematologydateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Hematologytimeedit',
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
                                         name:'Hematologyresultedit',
                                         itemid:'Hematologyresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'HematologyUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#hematologyedittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                //overlay.showBy(button);
                overlay.show();
		//console.log('yes button editHematologyValuesfunction');
            }
        });
   },
    DisplayHematologyResults:function(records,startdate,enddate){
        var TableStore=Ext.getStore('HematologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        //console.log('No_of_Results_Fetch = '+No_of_Results_Fetch);
        var TableValues='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        var tablepanel=this.getHematologyTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
       
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
              tablepanel.setHtml(TableValues);
              
    },
    OnHematologyUpdateButtonTap:function(){
        var hematologyEditValue=Ext.ComponentQuery.query('[itemid=hematologyEditdropdownvalueid]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=Hematologydateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=Hematologytimeedit]')[0].getValue();
        var Result=Ext.ComponentQuery.query('[itemid=Hematologyresultedit]')[0].getValue();
        console.log(hematologyEditValue); console.log(EditDate); console.log(EditTime);
        console.log(Result);
        var store=Ext.getStore('HematologyResultUpdateStore');
        store.load({
            params:{
                hematologyname:hematologyEditValue,
                date:EditDate,
                time:EditTime,
                result:Result,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records){
                
                alert(records[0].data.information);
                
            }
        });
    },
    CountNO_OFAlerts:function(){
       // console.log(' IN Hematology alert count function');
        var AlertStore=Ext.getStore('HematologyAlertStore');
        var AlertPanel=this.getHematologyAlertPanel();
         AlertStore.load({
            callback:function(){
                No_OF_Alerts=AlertStore.getCount();
              // console.log('no of alert '+No_OF_Alerts);
               AlertPanel.setHtml('('+No_OF_Alerts+')');
            }
        });
        
        
    },
    HematologyViewDefinition:function(){
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'Displaydefinition',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  '560px',//Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: '400px',//Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                        {
                            xtype:'container',
                            layout:'hbox',
                            width: '100%',
                            height: '368px',
                            items:[
                                {
                                    xtype: 'toolbar',
                                    docked: 'top',
                                    width: '100%',
                                    height: '60px',
                                    style: {
                                        background: '#4D3462'
                                    },
                                    html: '<h1 style="color: white; font-size: 25px; padding: 7px 0 0 190px;">Definition</h1>',
                                },
                                {
                                    xtype:'panel',
                                    itemid:'definitionid',
                                    html:''
                                }
                            ]
                        }
                   ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#HematologyViewDefinition',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                //overlay.showBy(button);
                overlay.show();
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OnHematologyPageLoad:function(){
            var hematologyvalue=Ext.ComponentQuery.query('[itemid=hematologydropdownvalueid]')[0].getValue();
            var StartDate=Ext.ComponentQuery.query('[itemid=hematologystartdate]')[0].getFormattedValue();
            var EndDate=Ext.ComponentQuery.query('[itemid=hematologyenddate]')[0].getFormattedValue();
            var store=Ext.getStore('HematologyChartStore');
            var HematologyChartViewingPanel=this.getHematologyChartViewingPanel();
            HematologyChartViewingPanel.setHtml(hematologyvalue);
            this.CountNO_OFAlerts();
            store.load({
                params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                        patient_id:MVF.app.patient_id
                        },
                     scope:this,
                     callback:function(records,success){
                         if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                             //alert('No records found');
                         }
                        }
                         
                     });
        var HematologyStore=Ext.getStore('LabsMainHematologyResultsStore');
        var HematologyesultsPanel=this.getHematologyTable();
        var HematologyResults='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        HematologyStore.load({
            params:{
                date:StartDate,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=HematologyStore.getCount();
                console.log('no of Hematology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
                                HematologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                HematologyResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            HematologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    HematologyResults+='</tbody></table>';
                    HematologyesultsPanel.setHtml(HematologyResults);
                    //console.log(HematologyResults);
                }
            }
        });            
             
    }
    });