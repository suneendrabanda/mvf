Ext.define("MVF.controller.SerologyController", {
    extend: "Ext.app.Controller",
    
    config:{
        refs:{
            OnViewButtonTap:'[itemid=Serologyviewbuttonid]',
            SerologyChartViewingLab:'[itemid=Serologychartviewingid]',
            SerologyResultsTable:'[itemid=SerologyResultsTable]'
        },
        control:{
            OnViewButtonTap:{
                tap:'OnViewButtonTap'
            }
        }
    },
    OnViewButtonTap:function(){
        var Labvalue=Ext.ComponentQuery.query('[itemid=SerologyDropdownValueId]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=Serologystartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=Serologyenddate]')[0].getFormattedValue();
        var store=Ext.getStore('SerologyChartStore');
        var SerologyChartViewingLabPanel=this.getSerologyChartViewingLab();
        SerologyChartViewingLabPanel.setHtml(Labvalue);
        store.load({
            params:{
                Labvalue:Labvalue,
                StartDate:StartDate,
                EndDate:EndDate,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                if(records[0].data.result==='null'&&records[0].data.exact==='null'&&records[0].data.min==='null'&&records[0].data.max==='null'&&records[0].data.date==='null'){
                             alert('No records found');
                         }
            }
        });
        var TableStore=Ext.getStore('SerologyTableStore');
         TableStore.load({
                 params:{ Labvalue: Labvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         patient_id:MVF.app.patient_id
                       },
                        scope:this,
                         callback:function(records){
                             var values=records;
                             this.DisplaySerologyResults(values,StartDate,EndDate);
                         }
             });
    },
    DisplaySerologyResults:function(records,startdate,enddate){
        var TableStore=Ext.getStore('SerologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var TableValues='<table><thead><tr><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 80px 8px 0">Name</th><th style="padding: 0 80px 8px 0">Result</th><th style="padding: 0 10px 8px 0">Normal Range</th></tr></thead><tbody>';
        var tablepanel=this.getSerologyResultsTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var i=0;
                    for(i=0;i<No_of_Results_Fetch;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
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
    SerologyViewDefinition:function(){
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  '717px',//Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: '328px',//Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                        {
                            xtype:'container',
                            layout:'vbox',
                            width: '100%',
                            height: '288px',
                            scrollable: {
                                        direction: 'vertical',
                                        directionLock: true
                                    },
                            items:[
                                {
                                   html: '<h1 style="color: #4D3462; font-size: 25px; padding: 10px 0 0 0;">Definition</h1>',
                                   style:{
                                        'fontFamily':'openSansBold',
                                        
                                    }
                                },
                                {
                                    xtype:'panel',
                                    itemid:'MBDefinitionid',
                                    html:'',
                                    style:{
                                        'fontFamily':'openSansRegular',
                                        'font-size':'18px',
                                        'text-align': 'justify'
                                    }
                                }
                            ]
                        }
                   ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '[itemid=MicrobiologyViewDefinition]',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                //overlay.showBy(button);
                overlay.show();
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    SetDefinition:function(){
        var labvalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var def=this.getLabDefinition();
        var Store=Ext.getStore('microbiologydropdownstore');
        var No_of_Results_Fetch=Store.getCount();
        var definition='';
        for(var i=0;i<No_of_Results_Fetch;i++){
         // console.log("Store = "+Store.getAt(i).get('value')+" hematologyvalue = "+labvalue);
            if(Store.getAt(i).get('value')===labvalue){
                //console.log('in if');
                if(Store.getAt(i).get('definition')===''){
                    definition='No definition found';
                }
                else{
                  definition=Store.getAt(i).get('definition');
               }
                break;
            }
            else{
                //console.log('in else');
                definition='No definition found';
            }
        }
        def.setHtml(definition);
    },
});