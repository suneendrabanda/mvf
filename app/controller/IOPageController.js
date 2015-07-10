Ext.define("MVF.controller.IOPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=IOviewbuttonid]',
            OutputSelectChange:'[itemid=OutputSelectID]',
            OnIntakeUpdateButtonTap:'[itemid=IntakeUpdateButton]',
            OnOutputUpdateButtonTap:'[itemid=OutputUpdateButton]',
            IntakeResultsPanel:'[itemid=IntakeTablePanel]',
            OutputResultsPanel:'[itemid=OutputTablePanel]',
            IntakeSelectFieldChange:'[itemid=IntakeSelectID]',
            GoTOPage:'[itemid=IOpageid]',
            IntakeListToEdit:'[itemid=IntakeValues]',
            
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            OutputSelectChange:{
                change:'OnViewClickFunction' //Also calls OnViewClickFunction function even is selectfield changes
            },
//            OnIntakeUpdateButtonTap:{
//                tap:'OnIntakeUpdateButtonTap'
//            },
//            OnOutputUpdateButtonTap:{
//                tap:'OnOutputUpdateButtonTap'
//            },
            IntakeSelectFieldChange:{
                change:'OnViewClickFunction'
            },
            GoTOPage:{
                change:'GoTOPage'
            },
            
            
        }
    },
    init:function(){
        this.IntakeEditOverlay();
        this.OutputEditOverlay();
      },
    GoTOPage:function(){
        this.getApplication().getController('MainController').getMain().pop();
    },
    OnViewClickFunction:function(){
        //alert('IO contrller working');
        var shiftvalue=Ext.ComponentQuery.query('[itemid=IOshift]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=IOstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=IOenddate]')[0].getFormattedValue();
        var OutputSelectValue=Ext.ComponentQuery.query('[itemid=OutputSelectID]')[0].getValue();
        var IntakeSelectValue=Ext.ComponentQuery.query('[itemid=IntakeSelectID]')[0].getValue();
        console.log(shiftvalue);console.log(StartDate);console.log(EndDate);console.log(OutputSelectValue);
        //load output chart store
        Ext.getCmp('IOPageIntakechartNOrecords').hide();
        Ext.getCmp('IOPageOutputchartNOrecords').hide();
        var store=Ext.getStore('IOPageOutputChartStore');
        store.load({
                params:{ shiftvalue: shiftvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         OutputValue:OutputSelectValue,
                         patient_id:MVF.app.patient_id
                      },
                         scope:this,
                         callback:function(records){
                             var values=records;
                            
                         }
                     });
        //load Intake chart store
        var IntakeChartStore=Ext.getStore('IOPageIntakeChartStore');
        IntakeChartStore.load({
            params:{
                        shiftvalue: shiftvalue,
                        startdate: StartDate,
                        enddate: EndDate,
                        IntakeValue:IntakeSelectValue,
                        patient_id:MVF.app.patient_id
                     }
        });
        // load Intake table             
        var IntakeTableStore=Ext.getStore('IntakeTableStore');
        IntakeTableStore.load({
            params:{
                startdate:StartDate,
                enddate:EndDate,
                shift: shiftvalue,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records){
                this.DisplayIntakeResult(records,StartDate,EndDate,shiftvalue);
            }
        });
        // load Output Table
        var OutputTableStore=Ext.getStore('OutputTableStore');
        OutputTableStore.load({
            params:{
                startdate:StartDate,
                enddate:EndDate,
                shift: shiftvalue,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records){
                this.DisplayOutputResult(records,StartDate,EndDate,shiftvalue);
            }
        });
    },
    IntakeEditOverlay:function(){
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    //id: 'EditPersonalInfoOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,           
	    width:  Ext.os.deviceType =='Phone' ? 850 : 850,//'500px',
	    height: Ext.os.deviceType =='Phone' ? 545 : 545,
            zIndex:5,
            styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                            {
				    xtype: 'IntakeEditView',
				    width: '98%',
				    height: '98%',
                            },
			   
	    ],
	    
        });
        Ext.Viewport.on({
            delegate: '[itemid=IOPageIntakeEditID]',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OutputEditOverlay:function(){
         var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditoutputvaluesOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  '850px',//Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: '545px',//Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                    {
                        xtype: 'OutputEditView',
                        width: '98%',
                        height: '98%',
                    }
            ],
	    
        });
	
	Ext.Viewport.on({
            delegate: '#IOPageOutputEditID',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    DisplayIntakeResult:function(records,startdate,enddate,shift){
        var TableStore=Ext.getStore('IntakeTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var Total_intake=0;
        var TableValues='<table><thead><tr style="border-bottom:1px solid #a5a399"><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 110px 8px 0">Intake</th><th style="padding: 0 80px 8px 0">Result</th></tr></thead><tbody>';
        var tablepanel=this.getIntakeResultsPanel();
        for(var i=0;i<No_of_Results_Fetch;i++){
            TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td></tr>';
            Total_intake+=parseInt(records[i].data.result);
        }
        TableValues+='<tr style="padding: 10px 0 0 0;border-top:1px solid #a5a399"><td>'+''+'</td><td>'+''+'</td><td style="padding-top:14px">'+'Total Intake'+'</td><td style="padding-top:14px">'+Total_intake+'</td></tr>';
        TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
    },
    DisplayOutputResult:function(records,startdate,enddate,shift){
        var TableStore=Ext.getStore('OutputTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var Total_Output=0;
        var TableValues='<table><thead><tr style="border-bottom:1px solid #a5a399"><th style="padding: 0 82px 8px 0">Date</th><th style="padding: 0 66px 8px 0">Time</th><th style="padding: 0 110px 8px 0">Output</th><th style="padding: 0 80px 8px 0">Result</th></tr></thead><tbody>';
        var tablepanel=this.getOutputResultsPanel();
        for(var i=0;i<No_of_Results_Fetch;i++){
            TableValues+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.date+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.Name+'</td><td>'+records[i].data.result+'</td></tr>';
            Total_Output+=parseInt(records[i].data.result);
        }
        TableValues+='<tr style="padding: 10px 0 0 0;border-top:1px solid #a5a399"><td>'+''+'</td><td>'+''+'</td><td style="padding-top:14px">'+'Total Output'+'</td><td style="padding-top:14px">'+Total_Output+'</td></tr>';
              TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
    },
    OnIOPageload:function(){
        var shiftvalue=Ext.ComponentQuery.query('[itemid=IOshift]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=IOstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=IOenddate]')[0].getFormattedValue();
        var OutputSelectValue=Ext.ComponentQuery.query('[itemid=OutputSelectID]')[0].getValue();
        var IntakeSelectValue=Ext.ComponentQuery.query('[itemid=IntakeSelectID]')[0].getValue();
        //load output chart store
        var store=Ext.getStore('IOPageOutputChartStore');
        store.load({
                params:{ shiftvalue: shiftvalue,
                         startdate: StartDate,
                         enddate: EndDate,
                         OutputValue:OutputSelectValue,
                         patient_id:MVF.app.patient_id
                      },
                         scope:this,
                         callback:function(records){
                            var no_of_records=store.getCount();
                                if(no_of_records<=0){
                                    //console.log('in the loop');
                                    Ext.getCmp('IOPageOutputchartNOrecords').show();
                                }
                         }
                     });
        //load Intake chart store
        var IntakeChartStore=Ext.getStore('IOPageIntakeChartStore');
        IntakeChartStore.load({
            params:{
                        shiftvalue: shiftvalue,
                        startdate: StartDate,
                        enddate: EndDate,
                        IntakeValue:IntakeSelectValue,
                        patient_id:MVF.app.patient_id
                     },
                     scope:this,
                         callback:function(records){
                            var no_of_records=IntakeChartStore.getCount();
                                if(no_of_records<=0){
                                    //console.log('in the loop');
                                    Ext.getCmp('IOPageIntakechartNOrecords').show();
                                }
                         }
        });
        // load Intake table             
        var IntakeTableStore=Ext.getStore('IntakeTableStore');
        IntakeTableStore.load({
            params:{
                startdate:StartDate,
                enddate:EndDate,
                shift: shiftvalue,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records){
                this.DisplayIntakeResult(records,StartDate,EndDate,shiftvalue);
            }
        });
        // load Output Table
        var OutputTableStore=Ext.getStore('OutputTableStore');
        OutputTableStore.load({
            params:{
                startdate:StartDate,
                enddate:EndDate,
                shift: shiftvalue,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records){
                this.DisplayOutputResult(records,StartDate,EndDate,shiftvalue);
            }
        });
    },
    
    });