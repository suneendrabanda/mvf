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
            GoTOPage:'[itemid=IOpageid]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            OutputSelectChange:{
                change:'OnViewClickFunction' //Also calls OnViewClickFunction function even is selectfield changes
            },
            OnIntakeUpdateButtonTap:{
                tap:'OnIntakeUpdateButtonTap'
            },
            OnOutputUpdateButtonTap:{
                tap:'OnOutputUpdateButtonTap'
            },
            IntakeSelectFieldChange:{
                change:'OnViewClickFunction'
            },
            GoTOPage:{
                change:'GoTOPage'
            }
            
        }
    },
    init:function(){
        this.IntakeEditOverlay();
        this.OutputEditOverlay();
        console.log(' In IO init function');
//         var store=Ext.getStore('IOPageOutputChartStore');
//         var v1='load';
//         var v2='2013-01-12';
//        store.load({
//                params:{ shiftvalue: v1,
//                         startdate: v2,
//                         enddate: v2,
//                         OutputValue:v1},
//                         
//                     });
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
                             console.log(values[0].data.outputname);
                             console.log(values[0].data.result);
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
              console.log('in Intake edit overlay function');
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditIntakeValuesOverlay',
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
                                       store: 'IOPageIntakeStore',
                                       itemid:'IntakeEditdropdownvalueid',
                                       name:'IntakeEditdropdownvalueid',
                                       valueField:'value',
                                       displayField:'name',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Intakedateedit',
                                         width:'100%',
                                         name:'Intakedateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Intaketimeedit',
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
                                         name:'Intakeresultedit',
                                         itemid:'Intakeresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'IntakeUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#IOPageIntakeEditID',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OutputEditOverlay:function(){
         console.log('in Output edit overlay function');
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditOutputValuesOverlay',
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
                                       store: 'IOPageOutputStore',
                                       itemid:'OutputEditdropdownvalueid',
                                       name:'OutputEditdropdownvalueid',
                                       valueField:'value',
                                       displayField:'name',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Outputdateedit',
                                         width:'100%',
                                         name:'Outputdateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Outputtimeedit',
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
                                         name:'Outputresultedit',
                                         itemid:'Outputresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'OutputUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#IOPageOutputEditID',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
    },
    OnIntakeUpdateButtonTap:function(){
        var intakename=Ext.ComponentQuery.query('[itemid=IntakeEditdropdownvalueid]')[0].getValue();
        var intakedate=Ext.ComponentQuery.query('[itemid=Intakedateedit]')[0].getFormattedValue();
        var intaketime=Ext.ComponentQuery.query('[itemid=Intaketimeedit]')[0].getValue();
        var intakeresult=Ext.ComponentQuery.query('[itemid=Intakeresultedit]')[0].getValue();
        console.log(intakename);
        console.log(intakedate);
        console.log(intaketime);
        console.log(intakeresult);
        var intakestore = Ext.StoreMgr.get('IOPageIntakeStore');
        Ext.getStore('intakedataupdatestore').load({
            params:{ intakenm: intakename,
                     itkdate: intakedate,
                     itktime:intaketime,
                     itkresult:intakeresult,
                     patient_id:MVF.app.patient_id
                      },
                       scope:this,
             
             callback:function(records,operation,success){
                 if(success){
                     Ext.getStore('intakepiechartstore').load({});
                     alert(records[0].data.information);
                 }
                 //alert('Record for '+intakename+' was Updated');
             }
        });
    },
    OnOutputUpdateButtonTap:function(){
        console.log('in output function');
        var outputname=Ext.ComponentQuery.query('[itemid=OutputEditdropdownvalueid]')[0].getValue();
        var outputdate=Ext.ComponentQuery.query('[itemid=Outputdateedit]')[0].getFormattedValue();
        var outputtime=Ext.ComponentQuery.query('[itemid=Outputtimeedit]')[0].getValue();
        var outputresult=Ext.ComponentQuery.query('[itemid=Outputresultedit]')[0].getValue();
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
             
             callback:function(records,success){
                 if(success){
                     Ext.getStore('outputpiechartstore').load({});
                     alert(records[0].data.information);
                 }
             }
             
                  });
    },
    DisplayIntakeResult:function(values,startdate,enddate,shift){
        var ItemStore=Ext.getStore('IOPageIntakeStore');
        var No_Of_Intake_Items=ItemStore.getCount();
        var TableStore=Ext.getStore('IntakeTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        //console.log('table Store = '+No_of_Results_Fetch+' intake count = '+No_Of_Intake_Items);
        if(shift==='day'){
            var time= ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30'];
        }
        else if(shift==='evening'){
            var time= ['15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
        }
        else{
            var time= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30'];
        }
        
        var TableValues='<table><thead>';
        var tablepanel=this.getIntakeResultsPanel();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_Of_Intake_Items;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('name')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        
       // console.log(' for_date ='+ for_date);
       // console.log(' result date ='+values[value].data.date);
            for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                console.log('In days for loop');
                  while(timeindex<16){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_Of_Intake_Items+2;k++){// for loop for each row in the table, +2 to add date and time  
                          if(k===0){
				TableValues+='<tr><td style="padding:0 10px 0 0">'+startdate+'</td>';
                          }
                          else if(k===1){
				TableValues+='<td style="padding:0 10px 0 15px;border-right:1px solid #a5a399">'+time[timeindex]+'</td>';
                          }
                          else{
                             // console.log('values[r].data.date = '+values[r].data.date+' start date = '+startdate +'values[r].data.time =  '+values[r].data.time+' time = '+time[timeindex]);
                              if(r< No_of_Results_Fetch && values[r].data.date===startdate && values[r].data.time===time[timeindex]){
					if(values[r].data.Name===ItemStore.getAt(k-2).get('name')){
                                            TableValues+='<td style="padding:0 10px 0 15px">'+values[r].data.result+'</td>';
					    r++;
                                             //console.log('IO value inserted');
                                        }      
					else{
						TableValues+='<td style="padding:0 10px 0 15px">'+'-'+'</td>';
                                              //console.log(' - inserted time and date are equal');
					}
				}
				else{
					TableValues+='<td style="padding:0 10px 0 15px">'+'-'+'</td>';
                                        //console.log(' - inserted time and date not equal');
				}
                          }
                      }
                      TableValues+='</tr>';
                      timeindex++;
                  }
                  startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                  timeindex=0;
              }
              TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
    },
    DisplayOutputResult:function(values,startdate,enddate,shift){
        var ItemStore=Ext.getStore('IOPageOutputStore');
        var No_Of_Intake_Items=ItemStore.getCount();
        var TableStore=Ext.getStore('OutputTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        //console.log('table Store = '+No_of_Results_Fetch+' intake count = '+No_Of_Intake_Items);
        if(shift==='day'){
            var time= ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30'];
        }
        else if(shift==='evening'){
            var time= ['15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
        }
        else{
            var time= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30'];
        }
        
        var TableValues='<table><thead>';
        var tablepanel=this.getOutputResultsPanel();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_Of_Intake_Items;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('name')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        
       // console.log(' for_date ='+ for_date);
        //console.log(' result date ='+values[value].data.date);
            for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<16){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_Of_Intake_Items+2;k++){// for loop for each row in the table, +2 to add date and time  
                          if(k===0){
				TableValues+='<tr><td style="padding:0 10px 0 0">'+startdate+'</td>';
                          }
                          else if(k===1){
				TableValues+='<td style="padding:0 10px 0 15px;border-right:1px solid #a5a399">'+time[timeindex]+'</td>';
                          }
                          else{
                             // console.log('values[r].data.date = '+values[r].data.date+' start date = '+startdate +'values[r].data.time =  '+values[r].data.time+' time = '+time[timeindex]);
                              if(r< No_of_Results_Fetch && values[r].data.date===startdate && values[r].data.time===time[timeindex]){
					if(values[r].data.Name===ItemStore.getAt(k-2).get('name')){
                                            TableValues+='<td style="padding:0 10px 0 15px">'+values[r].data.result+'</td>';
					    r++;
                                            // console.log('IO value inserted');
                                        }      
					else{
						TableValues+='<td style="padding:0 10px 0 15px">'+'-'+'</td>';
                                                //console.log(' - inserted time and date are equal');
					}
				}
				else{
					TableValues+='<td style="padding:0 10px 0 15px">'+'-'+'</td>';
                                       // console.log(' - inserted time and date not equal');
				}
                          }
                      }
                      TableValues+='</tr>';
                      timeindex++;
                  }
                  startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                  timeindex=0;
              }
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
                             var values=records;
                             console.log(values[0].data.outputname);
                             console.log(values[0].data.result);
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
    }
    });