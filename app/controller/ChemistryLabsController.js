Ext.define("MVF.controller.ChemistryLabsController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            chemistrylabs:'chemistrylabs',
            OnViewClick:'[itemid=chemistryviewbuttonid]',
            chemistrychartviewpanel:'[itemid=chartviewingid]',
            viewingpanel:'[itemid=viewingitem]',
           // chemistryalertdatepanel:'[itemid=chealertdate]',
            chemistryalertinfo:'[itemid=chemistryalertinfo]',
            chemistrylabsPageId:'[itemid=chemistrypageid]',
            ChemistryUpdateButton:'[itemid=ChemistryUpdateButton]',
            ChemistryTable:'[itemid=ChemistryResultsTable]'
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
    },
    OnViewClickFunction:function(){
        //alert('controller working');
            var chemistryvalue=Ext.ComponentQuery.query('[itemid=chemisrtydropdownvalueid]')[0].getValue();
            var viewingitem=this.getViewingpanel();
            var chartviewingpanel=this.getChemistrychartviewpanel();
           // var chemistryalertdatepanel=this.getChemistryalertdatepanel();
            var chemistryalertinfo=this.getChemistryalertinfo();
            console.log(chemistryvalue);
            viewingitem.setHtml(chemistryvalue);
            chartviewingpanel.setHtml(chemistryvalue);
            var store=Ext.getStore('chemistrychartstore');
            var startdatevalue=Ext.ComponentQuery.query('[itemid=chemistrystartdate]')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('[itemid=chemistryenddate]')[0].getFormattedValue();
            console.log(startdatevalue);
            console.log(enddatevalue);
            
            store.load({
                        params:{ chemistryvalue: chemistryvalue,
                                 startdate: startdatevalue,
                                 enddate: enddatevalue,
                                 patient_id:MVF.app.patient_id
                                },
                                 scope:this,
                        
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
        console.log('in EditChemistryValuesPopUp function');
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
        console.log(ChemistryEditValue); console.log(EditDate); console.log(EditTime);
        console.log(Result);
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
    DisplayChemistryResults:function(values,startdate,enddate){
        console.log('In chemistry results display table');
        var ItemStore=Ext.getStore('chemistrydropdownstore');
        var TableStore=Ext.getStore('ChemistryTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        //console.log('No_of_Results_Fetch = '+No_of_Results_Fetch);
        var No_of_ChemistryItems=ItemStore.getCount();
        var time= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
                   '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00','24:30'];
        //console.log(No_of_ChemistryItems);       
        var TableValues='<table><thead>';
        var tablepanel=this.getChemistryTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
      //console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_of_ChemistryItems;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('text')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
      //var Alert_count_between_dates=0;
        //var HematologyTableAlerts=this.getHematologyTableAlerts();
       // console.log(' for_date ='+ for_date);
        //console.log(' result date ='+values[value].data.date);
            for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<48){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_of_ChemistryItems+2;k++){// for loop for each row in the table, +2 to add date and time  
                          if(k===0){
				TableValues+='<tr><td style="padding:0 10px 0 0">'+startdate+'</td>';
                          }
                          else if(k===1){
				TableValues+='<td style="padding:0 10px 0 15px;border-right:1px solid #a5a399">'+time[timeindex]+'</td>';
                          }
                          else{
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
                                                TableValues+='<td style="padding:0 10px 0 15px">'+values[r].data.result+'</td>';
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
              TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
             // HematologyTableAlerts.setHtml('Alerts ('+Alert_count_between_dates+')');
    }
    });