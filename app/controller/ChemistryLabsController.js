Ext.define("MVF.controller.ChemistryLabsController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            chemistrylabs:'chemistrylabs',
            OnViewClick:'[itemid=chemistryviewbuttonid]',
            chemistrychartviewpanel:'[itemid=chartviewingid]',
            chemistrylabsPageId:'[itemid=chemistrypageid]',
            ChemistryUpdateButton:'[itemid=ChemistryUpdateButton]',
            ChemistryTable:'[itemid=ChemistryResultsTable]',
            ChemistryStartDate:'[itemid=chemistrystartdate]',
            Chemisrtydropdownvalueid:'[itemid=chemisrtydropdownvalueid]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            chemistrylabsPageId:{
                change:'OnPageIdSelect'
            },
            ChemistryUpdateButton:{
                tap:'OnChemistryUpdateButtonTap'
            }
        }
    },
    init:function(){
        this.EditChemistryValuesPopUp();
        console.log('in chemistry init function');
    },
    OnPageIdSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=chemistrypageid]')[0].getValue();
        console.log(pagename);
         this.getChemistrylabs().push({
          xtype:pagename
      });
      if(pagename==='hematology'){
		this.getApplication().getController('hematologyController').OnHematologyPageLoad();
        }
      else if(pagename==='microbiologyview'){
           this.getApplication().getController('MicrobiologyPageController').OnMicrobiologyPageLoad();
      } 
      else if(pagename==='absview'){
          this.getApplication().getController('MicrobiologyPageController').OnABGPageLoad();
      }
    },
    OnViewClickFunction:function(){
        //alert('controller working');
            var chemistryvalue=Ext.ComponentQuery.query('[itemid=chemisrtydropdownvalueid]')[0].getValue();
            var chartviewingpanel=this.getChemistrychartviewpanel();
            //console.log(chemistryvalue);
            chartviewingpanel.setHtml(chemistryvalue);
            var store=Ext.getStore('chemistrychartstore');
            var startdatevalue=Ext.ComponentQuery.query('[itemid=chemistrystartdate]')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('[itemid=chemistryenddate]')[0].getFormattedValue();
            //console.log(startdatevalue);
            //console.log(enddatevalue);
            store.load({
                        params:{ chemistryvalue: chemistryvalue,
                                 startdate: startdatevalue,
                                 enddate: enddatevalue,
                                 patient_id:MVF.app.patient_id
                                },
                                 scope:this,
                                 callback:function(records,success){
                                    if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                                        alert('No records found');
                                    }
                                }
                        
                   });
                   var TableStore=  Ext.getStore('ChemistryTableStore');
                    TableStore.load({
                        params:{ 
                                startdate: startdatevalue,
                                enddate: enddatevalue,
                                patient_id:MVF.app.patient_id   
                               },
                               scope:this,
                                callback:function(records){
                                    var values=records;
                                    this.DisplayChemistryResults(values,startdatevalue,enddatevalue);
                                }
                    });
    },
    EditChemistryValuesPopUp:function(){
        //console.log('in EditChemistryValuesPopUp function');
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditChemistryvaluesOverlay',
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
                                        store: 'chemistrydropdownstore',
                                        itemid:'ChemistryEditValueId',
                                        name:'ChemistryEditValueId',
                                        valueField:'value',
                                        displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Chemistrydateedit',
                                         width:'100%',
                                         name:'Chemistrydateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Chemistryedittimevalue',
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
                                         name:'Chemistryresultedit',
                                         itemid:'Chemistryresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'ChemistryUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
        });
	
	Ext.Viewport.on({
            delegate: '#chemistryedittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OnChemistryUpdateButtonTap:function(){
        var ChemistryEditValue=Ext.ComponentQuery.query('[itemid=ChemistryEditValueId]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=Chemistrydateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=Chemistryedittimevalue]')[0].getValue();
        var Result=Ext.ComponentQuery.query('[itemid=Chemistryresultedit]')[0].getValue();
        //console.log(ChemistryEditValue); console.log(EditDate); console.log(EditTime);
        //console.log(Result);
        var store=Ext.getStore('ChemistryResultsUpdateStore');
        store.load({
            params:{
                chemistryname:ChemistryEditValue,
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
    DisplayChemistryResults:function(records,startdate,enddate){
        var TableStore=Ext.getStore('ChemistryTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var tablepanel=this.getChemistryTable();
        var TableValues='<table><thead><tr><th style="padding: 0 82px 0 0">Date</th><th style="padding: 0 66px 0 0">Time</th><th style="padding: 0 110px 0 0">Name</th><th style="padding: 0 80px 0 0">Result</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        var i=0;
                    for(var i=0;i<No_of_Results_Fetch;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                               TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                //red
                                TableValues+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            if(records[i].data.min==='null'){
                                if(parseInt(records[i].data.result)<=parseInt(records[i].data.max)){
                                    TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    TableValues+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                            }
                         else if(records[i].data.max==='null'){
                             if(parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                    TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    TableValues+='<tr style="color:#ff0000;padding: 10px 0 0 0><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td><td>'+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                         }   
                        }
                    }
              tablepanel.setHtml(TableValues);
             // HematologyTableAlerts.setHtml('Alerts ('+Alert_count_between_dates+')');
    },
    OnChemistryPageLoad:function(){
       /* var chemistryvalue=Ext.ComponentQuery.query('[itemid=chemisrtydropdownvalueid]')[0].getValue();
            var chartviewingpanel=this.getChemistrychartviewpanel();
            //console.log(chemistryvalue);
            chartviewingpanel.setHtml(chemistryvalue);
            var store=Ext.getStore('chemistrychartstore');
            var startdatevalue=Ext.ComponentQuery.query('[itemid=chemistrystartdate]')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('[itemid=chemistryenddate]')[0].getFormattedValue();
            //console.log(startdatevalue);
            //console.log(enddatevalue);
            store.load({
                        params:{ chemistryvalue: chemistryvalue,
                                 startdate: startdatevalue,
                                 enddate: enddatevalue,
                                 patient_id:MVF.app.patient_id
                                },
                                 scope:this,
                                 callback:function(records,success){
                                    if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                                        //alert('No records found');
                                    }
                                }
                                //startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                        
                   });*/
        //load table on page load
        var ChemistryStore=Ext.getStore('LabsMainChemistryResultsStore');
        var ChemistryResultsPanel=this.getChemistryTable();
        var date=Ext.ComponentQuery.query('[itemid=chemistrystartdate]')[0].getFormattedValue();
        var ChemistryResults='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        ChemistryStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_ResultsFetch=ChemistryStore.getCount();
                var LabViewingName=this.getChemistrychartviewpanel();
                console.log('no of che fetch'+No_Of_ResultsFetch);
                if(success){
                    var i=0;
                    var date=this.getChemistryStartDate().setValueField(records[0].data.date);
                    console.log('date'+records[0].data.date);
                    console.log('working'+date);
                    for(var i=0;i<No_Of_ResultsFetch;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                               ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                //red
                                ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            if(records[i].data.min==='null'){
                                if(parseInt(records[i].data.result)<=parseInt(records[i].data.max)){
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                            }
                         else if(records[i].data.max==='null'){
                             if(parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                         }   
                        }
                    }
                    ChemistryResults+='</tbody></table>';
                    ChemistryResultsPanel.setHtml(ChemistryResults);
                    //console.log(ChemistryResults);
                }
                // display chart
                var store=Ext.getStore('chemistrychartstore');
                var enddatevalue=Ext.Date.format(Ext.Date.add(new Date(records[0].data.date),Ext.Date.DAY,7),'m/d/Y');
                LabViewingName.setHtml(records[0].data.name);
                var selectLab=this.getChemisrtydropdownvalueid().setName(records[0].data.name);
                store.load({
                        params:{ chemistryvalue: records[0].data.name,
                                 startdate: records[0].data.date,
                                 enddate: enddatevalue,
                                 patient_id:MVF.app.patient_id
                                },
                                 scope:this,
                                 callback:function(records,success){
                                     
                                    if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                                        //alert('No records found');
                                    }
                                }
                        
                   });
            }
        });
    }
    });