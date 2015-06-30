Ext.define("MVF.controller.ABSLabController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            absview:'absview',
            OnViewClick:'[itemid=absviewbuttonid]',
            ABSUpdateButton:'[itemid=AbsUpdateButton]',
            ABSTablePanel:'[itemid=ABSTablePanel]',
            ABGGoToPageSelect:'[itemid=Abgpageid]'
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
    DisplayTable:function(values,startdate,enddate,shift){
        var ItemStore = Ext.getStore('ABSDropDownStore');
        var NO_of_AbsCount = ItemStore.getCount();
        if(shift==='day'){
            var time= ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30'];
        }
        else if(shift==='evening'){
            var time= ['15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
        }
        else{
            var time= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','23:00','23:30','24:00','24:30'];
        }
        var TableStore=Ext.getStore('ABSTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var TablePanel=this.getABSTablePanel();
        var TableValues='<table><thead>';
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<NO_of_AbsCount;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('text')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<16){// while loop to loop 24 hrs per day
                      for(var k=0;k<NO_of_AbsCount+2;k++){// for loop for each row in the table, +2 to add date and time  
                          if(k===0){
				TableValues+='<tr><td style="padding:0 10px 0 0">'+startdate+'</td>';
                          }
                          else if(k===1){
				TableValues+='<td style="padding:0 10px 0 15px;border-right:1px solid #a5a399">'+time[timeindex]+'</td>';
                          }
                          else{
                               //console.log('values[r].data.date = '+values[r].data.date+' start date = '+startdate +'values[r].data.time =  '+values[r].data.time+' time = '+time[timeindex]);
                              if(r< No_of_Results_Fetch && values[r].data.date===startdate && values[r].data.time===time[timeindex]){
					if(values[r].data.Name===ItemStore.getAt(k-2).get('text')){
                                            if(values[r].data.exact==='null'){
                                                if(values[r].data.result>=values[r].data.max||values[r].data.result<=values[r].data.min){
                                                    TableValues+='<td style="padding:0 10px 0 15px;color:#ff0000">'+values[r].data.result+'</td>';
                                                }
                                                else{
                                                    TableValues+='<td style="padding:0 10px 0 15px">'+values[r].data.result+'</td>';
                                                }
                                            }
                                            else{
                                                if(values[r].data.result!==values[r].data.exact){
                                                    TableValues+='<td style="padding:0 10px 0 15px;color:#ff0000">'+values[r].data.result+'</td>';
                                                }
                                                else{
                                                   TableValues+='<td style="padding:0 10px 0 15px">'+values[r].data.result+'</td>'; 
                                                }
                                                
                                            }
					r++;
                                                //console.log('hematology value inserted');
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
       TablePanel.setHtml(TableValues);
                
                
    }
});