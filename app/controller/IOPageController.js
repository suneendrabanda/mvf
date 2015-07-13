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
            IOIntakeListToEdit:'[itemid=IOIntakeValues]',
            IOIntakeCheck:'[itemid=IOIntakeSelectAll]',
            IOOutputListToEdit:'[itemid=IOOutputValues]',
            IOOutputCheck:'[itemid=IOOutputSelectAll]',
            OnIOIntakeSaveButtonTap:'[itemid=IOsaveIntakebutton]',
            OnIOOutputSaveButtonTap:'[itemid=IOsaveOutputbutton]'
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
            IOIntakeCheck:{
                   check: 'IOselectAllinList',
		   uncheck: 'IOselectAllinList'
               },
            IOOutputCheck:{
                   check: 'IOselectAllinList',
		   uncheck: 'IOselectAllinList'
            },
            OnIOIntakeSaveButtonTap:{
                tap:'OnIOIntakeSaveButtonTap'
            },
            OnIOOutputSaveButtonTap:{
                tap:'OnIOOutputSaveButtonTap'
            }
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
				    xtype: 'IOPageIntakeEditView',
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
                        xtype: 'IOPageOutputEditView',
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
    IOselectAllinList:function(checkbox, e, eOpts){
        console.log(checkbox.getName());
       if (checkbox.isChecked()) {
           console.log('checked  '+checkbox.isChecked());
           if (checkbox.getName() === 'VitalsCheck') {
		this.getVitalSignsToEdit().selectAll(true);
	    }
           else if(checkbox.getName() === 'IOIntakeCheck'){
               console.log('test1234');
               console.log(this.getIOIntakeListToEdit());
               this.getIOIntakeListToEdit().selectAll(true);
           }
           else if(checkbox.getName() === 'IOOutputCheck'){
               this.getIOOutputListToEdit().selectAll(true);
           }
           
       }
       else{
           console.log('Unchecked  '+checkbox.isChecked());
           if (checkbox.getName() === 'VitalsCheck') {
		this.getVitalSignsToEdit().deselectAll(true);
	    }
           else if(checkbox.getName() === 'IOIntakeCheck'){
               this.getIOIntakeListToEdit().deselectAll(true);
           }
           else if(checkbox.getName() === 'IOOutputCheck'){
               this.getIOOutputListToEdit().deselectAll(true);
           }
       }
    },
    OnIOIntakeSaveButtonTap:function(){
        var intakedate=Ext.ComponentQuery.query('[itemid=IOIntakeeditDate]')[0].getFormattedValue();
       var intaketime=Ext.ComponentQuery.query('[itemid=IOIntaketime]')[0].getValue();
       var IntakeArray=this.getIOIntakeListToEdit().getSelection();
       var IntakeArrayCount=this.getIOIntakeListToEdit().getSelectionCount();
       for(var i=0;i<IntakeArrayCount;i++){
           var IntakeName= IntakeArray[i].data.name;
            if(IntakeName==='Blood'){
              var IntakeValue=IntakeArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditBlood]')[0].getValue();
            }
            else if(IntakeName==='Breast Feed'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditBreastFeed]')[0].getValue();
            }
            else if(IntakeName==='IV'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditIV]')[0].getValue();
            }
            else if(IntakeName==='IVPB'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditIVPB]')[0].getValue();
            }
            else if(IntakeName==='Lipids'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditLipids]')[0].getValue();
            }
            else if(IntakeName==='Other'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditOther]')[0].getValue();
            }
            else if(IntakeName==='PO'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditPO]')[0].getValue();
            }
            else if(IntakeName==='TPN'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditTPN]')[0].getValue();
            }
            else if(IntakeName==='Tube Fdg'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOIntakeEditTubeFDG]')[0].getValue();
            }
            Ext.getStore('intakedataupdatestore').load({
            params:{ intakenm: IntakeValue,
                     itkdate: intakedate,
                     itktime:intaketime,
                     itkresult:result,
                     patient_id:MVF.app.patient_id
                   },
                    scope:this,
                    callback:function(records,operation,success){
                        if(success){
                            Ext.getCmp('intakepiechartNOrecords').hide();
                            Ext.getStore('intakepiechartstore').load({
                            params:{
                                  patient_id:MVF.app.patient_id
                             }
                        });
                     }
                 }
            });
       }
    },
    OnIOOutputSaveButtonTap:function(){
        var outputdate=Ext.ComponentQuery.query('[itemid=IOOutputeditDate]')[0].getFormattedValue();
       var outputtime=Ext.ComponentQuery.query('[itemid=IOOutputtime]')[0].getValue();
       var OutputArray=this.getIOOutputListToEdit().getSelection();
       var OutputArrayCount=this.getIOOutputListToEdit().getSelectionCount();
       for(var i=0;i<OutputArrayCount;i++){
           var OutputName= OutputArray[i].data.name;
           if(OutputName==='Blood'){
              var OutputValue=OutputArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=IOOutputEditBlood]')[0].getValue();
            }
           else if(OutputName==='CRRT'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditCRRT]')[0].getValue();
            }
           else if(OutputName==='Drains'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditDrains]')[0].getValue();
            }
            else if(OutputName==='Emesis'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditEmesis]')[0].getValue();
            }
            else if(OutputName==='Incontinent'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditIncontinent]')[0].getValue();
            }
            else if(OutputName==='Ostomy'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditOstomy]')[0].getValue();
            }
            else if(OutputName==='Other'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditOther]')[0].getValue();
            }
            else if(OutputName==='Stool'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditStool]')[0].getValue();
            }
            else if(OutputName==='Unmeasured'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditUnmeasured]')[0].getValue();
            }
            else if(OutputName==='Urine'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IOOutputEditUrine]')[0].getValue();
            }
            Ext.getStore('outputUpdateStore').load({
            params:{ outputnm: OutputValue,
                     outputdate: outputdate,
                     outputtime:outputtime,
                     outputresult:result,
                     patient_id:MVF.app.patient_id
                   },
                   scope:this,
                   callback:function(records,operation,success){
                        if(success){
                            console.log('result updated');
                            Ext.getCmp('outputpiechartNOrecords').hide();
                            Ext.getStore('outputpiechartstore').load({
                                params:{
                                     patient_id:MVF.app.patient_id
                                }
                            });
                            
                        }
                    }
             });
       }
    }
    });