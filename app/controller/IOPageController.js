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
            IntakeSelectFieldChange:'[itemid=IntakeSelectID]'
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
                         OutputValue:OutputSelectValue},
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
                        IntakeValue:IntakeSelectValue
                     }
        });
        // load Intake table             
        var IntakeTableStore=Ext.getStore('IntakeTableStore');
        IntakeTableStore.load({
            params:{
                startdate:StartDate,
                enddate:EndDate,
                shift: shiftvalue,
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
                                                   {text: '0100',  value: '0100'},
                                                   {text: '0200',  value: '0200'},
                                                   {text: '0300',  value: '0300'},
                                                   {text: '0400',  value: '0400'},
                                                   {text: '0500',  value: '0500'},
                                                   {text: '0600',  value: '0600'},
                                                   {text: '0700',  value: '0700'},
                                                   {text: '0800',  value: '0800'},
                                                   {text: '0900',  value: '0900'},
                                                   {text: '1000',  value: '1000'},
                                                   {text: '1100',  value: '1100'},
                                                   {text: '1200',  value: '1200'},
                                                   {text: '1300',  value: '1300'},
                                                   {text: '1400',  value: '1400'},
                                                   {text: '1500',  value: '1500'},
                                                   {text: '1600',  value: '1600'},
                                                   {text: '1700',  value: '1700'},
                                                   {text: '1800',  value: '1800'},
                                                   {text: '1900',  value: '1900'},
                                                   {text: '2000',  value: '2000'},
                                                   {text: '2100',  value: '2100'},
                                                   {text: '2200',  value: '2200'},
                                                   {text: '2300',  value: '2300'},
                                                   {text: '2400',  value: '2400'}
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
                                                   {text: '0100',  value: '0100'},
                                                   {text: '0200',  value: '0200'},
                                                   {text: '0300',  value: '0300'},
                                                   {text: '0400',  value: '0400'},
                                                   {text: '0500',  value: '0500'},
                                                   {text: '0600',  value: '0600'},
                                                   {text: '0700',  value: '0700'},
                                                   {text: '0800',  value: '0800'},
                                                   {text: '0900',  value: '0900'},
                                                   {text: '1000',  value: '1000'},
                                                   {text: '1100',  value: '1100'},
                                                   {text: '1200',  value: '1200'},
                                                   {text: '1300',  value: '1300'},
                                                   {text: '1400',  value: '1400'},
                                                   {text: '1500',  value: '1500'},
                                                   {text: '1600',  value: '1600'},
                                                   {text: '1700',  value: '1700'},
                                                   {text: '1800',  value: '1800'},
                                                   {text: '1900',  value: '1900'},
                                                   {text: '2000',  value: '2000'},
                                                   {text: '2100',  value: '2100'},
                                                   {text: '2200',  value: '2200'},
                                                   {text: '2300',  value: '2300'},
                                                   {text: '2400',  value: '2400'}
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
                     itkresult:intakeresult
                      },
                       scope:this,
             
             callback:function(records,operation,success){
                 if(success){
                     Ext.getStore('intakepiechartstore').load({});
                     alert('records was successfully updated');
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
                     outputresult:outputresult
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
            var time= ['0700','0800','0900','1000','1100','1200','1300','1400'];
        }
        else if(shift==='evening'){
            var time= ['1500','1600','1700','1800','1900','2000','2100','2200'];
        }
        else{
            var time= ['0100','0200','0300','0400','0500','0600','2300','2400'];
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
        //console.log(' result date ='+values[value].data.date);
            for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<8){// while loop to loop 24 hrs per day
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
                                               // console.log(' - inserted time and date are equal');
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
            var time= ['0700','0800','0900','1000','1100','1200','1300','1400'];
        }
        else if(shift==='evening'){
            var time= ['1500','1600','1700','1800','1900','2000','2100','2200'];
        }
        else{
            var time= ['0100','0200','0300','0400','0500','0600','2300','2400'];
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
                  while(timeindex<8){// while loop to loop 24 hrs per day
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
    }
    });