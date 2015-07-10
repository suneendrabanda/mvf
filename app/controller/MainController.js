
Ext.define("MVF.controller.MainController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            main:'main',
            chemistry:'chemistrylabs',
            vital:'[itemid=vitalname]',
            onupdatevital:'[itemid=updatebutton]',
            shiftselect:'[itemid=shiftname]',
            edittable:'[itemid=edittableicon]',
            vitaltable:'[itemid=tablevitalname]',
            vitaltablepanel:'[itemid=vitaltablepanel]',
            patientsummarybutton:'[itemid=patientsummarybutton]',
            returntovspage:'[itemid=cancelbutton]',
            backtovsiopage:'[itemid=back]',
            gotopage:'[itemid=pageid]',
            editintake:'[itemid=editintakeicon]',
            editoutput:'[itemid=editoutputicon]',
            onoutputupdatebuttonclick:'[itemid=outputupdatebutton]',
            viewingpanel:'[itemid=viewingitem]',
            chemistrychartviewpanel:'[itemid=chartviewingid]',
            chemistryalertdatepanel:'[itemid=chealertdate]',
            chemistryalertinfo:'[itemid=chealertinfo]',
            gotoIntakeAndOutputpage:'[itemid=intakeExpand]',
            gotoIntakeAndOutputpageOnOutput:'[itemid=outputExpand]',
            VitalChartdateChange:'[itemid=startdate]',
            VitalSignsToEdit:'[itemid=vitalSigns]',
            OnVitalsUpdateButton:'[itemid=saveVitalsbutton]',
            OnIntakeSaveButtonTap:'[itemid=saveIntakebutton]',
            IntakeListToEdit:'[itemid=IntakeValues]',
            OnOutputSaveButtonTap:'[itemid=saveOutputbutton]',
            OutputListToEdit:'[itemid=OutputValues]',
            VitalsCheck:'[itemid=VitalsSelectAll]',
            IntakeCheck:'[itemid=IntakeSelectAll]',
            OutputCheck:'[itemid=OutputSelectAll]'
        },
        control: {

                vital:{
                    change:'OnVitalnameSelect'
                },
                gotoIntakeAndOutputpage:{
                    tap:'gotoIntakeAndOutputpagefunction'
                },
                gotoIntakeAndOutputpageOnOutput:{
                    tap:'gotoIntakeAndOutputpagefunction'
                },               
                onoutputupdatebuttonclick:{
                    tap:'outputupdatebuttontap'
                },
                gotopage:{
                    change:'gotopagefunction'
                },
                onupdatevital:{
                tap:'editvitalvaluefunction'
            },    
                shiftselect:{
                    change:'OnVitalnameSelect'
                    
                },
                vitaltable:{
                    change:'loadtabledata'
            },
               patientsummarybutton:{
                tap:'OnVSAndIOpageLoad'
            },
               returntovspage:{
                tap:'returntovspage'
            },
               backtovsiopage:{
                tap:'returntovsiopage'
            },
               OnVitalsUpdateButton:{
                   tap:'OnVitalsUpdateButtonTap'
               },
               OnIntakeSaveButtonTap:{
                   tap:'OnIntakeSaveButtonTap'
               },
               OnOutputSaveButtonTap:{
                   tap:'OnOutputSaveButtonTap'
               },
               VitalsCheck:{
                   check: 'selectAllinList',
		   uncheck: 'selectAllinList'
               },
               IntakeCheck:{
                   check: 'selectAllinList',
		   uncheck: 'selectAllinList'
               },
               OutputCheck:{
                   check: 'selectAllinList',
		   uncheck: 'selectAllinList'
               }
        }
    },
    init: function(){
        this.edittable();
        this.editintakefunction();
        this.editoutputfunction();
    },
    gotoIntakeAndOutputpagefunction:function(){
        console.log('in function');
        this.getMain().push({
          xtype:'IntakeAndOutputView'
          
      });
      this.getApplication().getController('IOPageController').OnIOPageload();
      
    },
    OnVitalnameSelect: function(){
            var store=Ext.getStore('LineChart');
            var storebp=Ext.getStore('bpLineChart');
            var vitalvalue=Ext.ComponentQuery.query('#vitalname')[0].getValue();
            var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();
            var startdatevalue=Ext.ComponentQuery.query('#startdate')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('#enddate')[0].getFormattedValue();
            console.log(startdatevalue);
            console.log(enddatevalue);
            //Ext.Msg.alert(startdatevalue);
            this.loadtabledata();
           if(vitalvalue==='bp'){
               storebp.load({
                   params:{ vitalvalue: vitalvalue,
                            shiftvalue: shiftvalue,
                            startdate: startdatevalue,
                            enddate: enddatevalue,
                            patient_id:MVF.app.patient_id},
                   scope:this,
                   callback:function(records){
                    
                }
               });
               Ext.ComponentQuery.query('#linechartid')[0].hide();
               Ext.ComponentQuery.query('#bplinechartid')[0].show();
               
           } 
           else{
           console.log(vitalvalue);
            store.load({
                params:{ vitalvalue: vitalvalue,
                         shiftvalue: shiftvalue,
                         startdate: startdatevalue,
                         enddate: enddatevalue,
                         patient_id:MVF.app.patient_id},
                scope:this,
                callback:function(records){
                    
                }
            });
            Ext.ComponentQuery.query('#bplinechartid')[0].hide();
            Ext.ComponentQuery.query('#linechartid')[0].show();
        }
//            store.on('load',function(){
//                // Ext.Msg.alert('store is loaded');
//            })
            //Ext.ComponentQuery.query('#linechartid')[0].show();
            //Ext.Msg.alert('vitalval');
    },
    loadtabledata:function(){
        var vitalvalue=Ext.ComponentQuery.query('#tablevitalname')[0].getValue();
        var tablestartdate=Ext.ComponentQuery.query('#tablestartdate')[0].getFormattedValue();
        var tableenddate=Ext.ComponentQuery.query('#tableenddate')[0].getFormattedValue();
        var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();

        //Ext.Msg.alert(vitalvalue);
        // Ext.Msg.alert(selecteddate);
        var vitaltablepanel= this.getVitaltablepanel();
        var store = Ext.StoreMgr.get('vitaltablestore');
        Ext.getStore('vitaltablestore').load({
            params:{ vitalvalue: vitalvalue,
                     shiftvalue: shiftvalue,
                     startdate:tablestartdate,
                     enddate:tableenddate,
                     patient_id:MVF.app.patient_id
                   },
             scope:this,
             callback:function(records,operation,success){
                 var no_of_records=store.getCount();
                 var vitaltable='<table><thead>';
                 
                    if(vitalvalue==='all'){
                        vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                          '<td style=" padding:0 0px 0 0px">'+'Date'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'BP'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Height'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Pain'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Pulse'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Resp'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'SaO2'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Temperature'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Weight'+'</td>'+'</tr>';
                    for(var i=0;i<no_of_records;i++){
                               vitaltable += '<tr>'+
                                          '<td style=" padding:0 0px 0 0px">'+records[i].data.date+'</td>'+
                                          '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.BP+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Height+'</td>'+//records[i].data.Height
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Pain+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Pulse+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Resp+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.SaO2+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Temp+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Weight+'</td>'+'</tr>';//records[i].data.Weight
                    }
                }
                else{
                    vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                          '<td style=" padding:0 30px 0 18px">'+'Date'+'</td>'+
                                          '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                          '<td style=" padding:0 30px 0 18px">'+vitalvalue+'</td>'+'</tr>';
                     for(var i=0;i<no_of_records;i++){
                         vitaltable += '<tr>'+
                                          '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                          '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                          '<td style=" padding:0 30px 0 18px">'+store.getAt(i).get(vitalvalue)+'</td>'+'</tr>';
                         }
                }
                     vitaltablepanel.setHtml(vitaltable);
                }
             });
       
        
    },
    edittable:function(){
      
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
				    xtype: 'EditTable',
				    width: '98%',
				    height: '98%',
                            },
			   
	    ],
	    
        });
	
	Ext.Viewport.on({
            delegate: '#edittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
                
		//console.log('yes button');
            }
        });
        

        
       
    },
   gotopagefunction:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=pageid]')[0].getValue();
        console.log(pagename);
         this.getMain().push({
          xtype:pagename
          });
          if(pagename==='IntakeAndOutputView'){
               this.getApplication().getController('IOPageController').OnIOPageload();
          }
          
          
    },
   editintakefunction:function(){
      // console.log('in function');
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
                        xtype: 'IntakeEditView',
                        width: '98%',
                        height: '98%',
                    }
                   ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#editintakeicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
		//console.log('yes button');
            }
        });
   },
   editoutputfunction:function(){
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
            delegate: '#editoutputicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
		//console.log('yes button');
            }
        });
   },
   outputupdatebuttontap:function(){
       console.log('in output function');
        var outputname=Ext.ComponentQuery.query('[itemid=outputname]')[0].getValue();
        var outputdate=Ext.ComponentQuery.query('[itemid=outputdate]')[0].getFormattedValue();
        var outputtime=Ext.ComponentQuery.query('[itemid=outputtime]')[0].getValue();
        var outputresult=Ext.ComponentQuery.query('[itemid=outputresult]')[0].getValue();
        console.log(outputname);
        console.log(outputdate);
        console.log(outputtime);
        console.log(outputresult);
        Ext.getStore('outputUpdateStore').load({
            params:{ outputnm: outputname,
                     outputdate: outputdate,
                     outputtime:outputtime,
                     outputresult:outputresult,
                     patient_id:MVF.app.patient_id
                      },
                       scope:this,
             
             callback:function(records,operation,success){
                 if(success){
                     Ext.getCmp('outputpiechartNOrecords').hide();
                     Ext.getStore('outputpiechartstore').load({
                         params:{
                              patient_id:MVF.app.patient_id
                         }
                     });
                     alert(records[0].data.information);
                 }
             }
             
                  });
   },
   OnVSAndIOpageLoad:function(){
       var vitalvalue=Ext.ComponentQuery.query('#tablevitalname')[0].getValue();
       var tablestartdate=Ext.ComponentQuery.query('#tablestartdate')[0].getFormattedValue();
       var tableenddate=Ext.ComponentQuery.query('#tableenddate')[0].getFormattedValue();
       var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();
       var vitaltablepanel= this.getVitaltablepanel();
       var store = Ext.StoreMgr.get('vitaltablestore');
       Ext.getStore('vitaltablestore').load({
            params:{ vitalvalue: vitalvalue,
                     shiftvalue: shiftvalue,
                     startdate:tablestartdate,
                     enddate:tableenddate,
                     patient_id:MVF.app.patient_id
                   },
             scope:this,
             callback:function(records,operation,success){
                 var no_of_records=store.getCount();
                 var vitaltable='<table><thead>';
                 
                 if(vitalvalue==='all'){
                     vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 0px 0 0px">'+'Date'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'BP'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Height'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Pain'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Pulse'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Resp'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'SaO2'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Temperature'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Weight'+'</td>'+'</tr>';
                 for(var i=0;i<no_of_records;i++){
                            vitaltable += '<tr>'+
                                       '<td style=" padding:0 0px 0 0px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.BP+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Height+'</td>'+//records[i].data.Height
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Pain+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Pulse+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Resp+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.SaO2+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Temp+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Weight+'</td>'+'</tr>';//records[i].data.Weight
                 }
             }
             else{
                 vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 30px 0 18px">'+'Date'+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+vitalvalue+'</td>'+'</tr>';
                  for(var i=0;i<no_of_records;i++){
                      vitaltable += '<tr>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+store.getAt(i).get(vitalvalue)+'</td>'+'</tr>';
                      }
             }
                  vitaltablepanel.setHtml(vitaltable);
             }
         });
       var intakeStore=Ext.StoreMgr.get('intakepiechartstore'); 
       intakeStore.load({
           params:{ 
                    patient_id:MVF.app.patient_id
                  },
                  callback:function(records,success){
                      var no_of_records=intakeStore.getCount();
                      if(no_of_records<=0){
                          //console.log('in the loop');
                          Ext.getCmp('intakepiechartNOrecords').show();
                      }
                  }
       });
       var outputStore=Ext.StoreMgr.get('outputpiechartstore');
       outputStore.load({
           params:{
               patient_id:MVF.app.patient_id
           },
           callback:function(){
               var no_of_records=outputStore.getCount();
               if(no_of_records<=0){
                   console.log('in the loop');
                   
                    Ext.getCmp('outputpiechartNOrecords').show();
               }
           }
       });
   },
   OnVitalsUpdateButtonTap:function(){
       console.log('On save button tp function');
       var VitalsArray=this.getVitalSignsToEdit().getSelection();
       var VitalsArrayCount=this.getVitalSignsToEdit().getSelectionCount();
       var Date=Ext.ComponentQuery.query('[itemid=vitalseditDate]')[0].getFormattedValue();
       var time=Ext.ComponentQuery.query('[itemid=Vitalstime]')[0].getValue();
       //var vitalItem=VitalsArray.pop();
       for(var i=0;i<VitalsArrayCount;i++){
         var vitalName= VitalsArray[i].data.text;
         if(vitalName==='BP'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditBP]')[0].getValue();
         }
         else if(vitalName==='Height'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditHeight]')[0].getValue();
         }
         else if(vitalName==='Pain'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditPain]')[0].getValue();
         }
         else if(vitalName==='Pulse'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditPulse]')[0].getValue();
         }
         else if(vitalName==='Resp'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditResp]')[0].getValue();
         }
         else if(vitalName==='SaO2'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditSaO2]')[0].getValue();
         }
         else if(vitalName==='Temp'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditTemp]')[0].getValue();
         }
         else if(vitalName==='Weight'){
              var vitalvalue=VitalsArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=VitalsEditWeight]')[0].getValue();
         }
           Ext.getStore('vitalsignupdatestore').load({
                   params:{ vitalvalue: vitalvalue,
                            datevalue: Date,
                            timevalue: time,
                            vitalresult: result,
                            patient_id:MVF.app.patient_id
                        },
                   });
       }
       
   },
   OnIntakeSaveButtonTap:function(){
       var intakedate=Ext.ComponentQuery.query('[itemid=IntakeeditDate]')[0].getFormattedValue();
       var intaketime=Ext.ComponentQuery.query('[itemid=Intaketime]')[0].getValue();
       var IntakeArray=this.getIntakeListToEdit().getSelection();
       var IntakeArrayCount=this.getIntakeListToEdit().getSelectionCount();
       for(var i=0;i<IntakeArrayCount;i++){
           var IntakeName= IntakeArray[i].data.name;
            if(IntakeName==='Blood'){
              var IntakeValue=IntakeArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=IntakeEditBlood]')[0].getValue();
            }
            else if(IntakeName==='Breast Feed'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditBreastFeed]')[0].getValue();
            }
            else if(IntakeName==='IV'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditIV]')[0].getValue();
            }
            else if(IntakeName==='IVPB'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditIVPB]')[0].getValue();
            }
            else if(IntakeName==='Lipids'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditLipids]')[0].getValue();
            }
            else if(IntakeName==='Other'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditOther]')[0].getValue();
            }
            else if(IntakeName==='PO'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditPO]')[0].getValue();
            }
            else if(IntakeName==='TPN'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditTPN]')[0].getValue();
            }
            else if(IntakeName==='Tube Fdg'){
                 var IntakeValue=IntakeArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=IntakeEditTubeFDG]')[0].getValue();
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
   OnOutputSaveButtonTap:function(){
       var outputdate=Ext.ComponentQuery.query('[itemid=OutputeditDate]')[0].getFormattedValue();
       var outputtime=Ext.ComponentQuery.query('[itemid=Outputtime]')[0].getValue();
       var OutputArray=this.getOutputListToEdit().getSelection();
       var OutputArrayCount=this.getOutputListToEdit().getSelectionCount();
       for(var i=0;i<OutputArrayCount;i++){
           var OutputName= OutputArray[i].data.name;
           if(OutputName==='Blood'){
              var OutputValue=OutputArray[i].data.value;
              var result=Ext.ComponentQuery.query('[itemid=OutputEditBlood]')[0].getValue();
            }
           else if(OutputName==='CRRT'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditCRRT]')[0].getValue();
            }
           else if(OutputName==='Drains'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditDrains]')[0].getValue();
            }
            else if(OutputName==='Emesis'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditEmesis]')[0].getValue();
            }
            else if(OutputName==='Incontinent'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditIncontinent]')[0].getValue();
            }
            else if(OutputName==='Ostomy'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditOstomy]')[0].getValue();
            }
            else if(OutputName==='Other'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditOther]')[0].getValue();
            }
            else if(OutputName==='Stool'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditStool]')[0].getValue();
            }
            else if(OutputName==='Unmeasured'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditUnmeasured]')[0].getValue();
            }
            else if(OutputName==='Urine'){
                 var OutputValue=OutputArray[i].data.value;
                 var result=Ext.ComponentQuery.query('[itemid=OutputEditUrine]')[0].getValue();
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
   },
   selectAllinList:function(checkbox, e, eOpts){
       console.log(checkbox.getName());
       if (checkbox.isChecked()) {
           console.log('checked  '+checkbox.isChecked());
           if (checkbox.getName() === 'VitalsCheck') {
		this.getVitalSignsToEdit().selectAll(true);
	    }
           else if(checkbox.getName() === 'IntakeCheck'){
               this.getIntakeListToEdit().selectAll(true);
           }
           else if(checkbox.getName() === 'OutputCheck'){
               this.getOutputListToEdit().selectAll(true);
           }
           
       }
       else{
           console.log('Unchecked  '+checkbox.isChecked());
           if (checkbox.getName() === 'VitalsCheck') {
		this.getVitalSignsToEdit().deselectAll(true);
	    }
           else if(checkbox.getName() === 'IntakeCheck'){
               this.getIntakeListToEdit().deselectAll(true);
           }
           else if(checkbox.getName() === 'OutputCheck'){
               this.getOutputListToEdit().deselectAll(true);
           }
       }
   }
});