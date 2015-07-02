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
    DisplaySerologyResults:function(values,startdate,enddate){
        var ItemStore=Ext.getStore('SerologyDropdownStore');
        var No_of_SerologyLabs=ItemStore.getCount();
        var TableStore=Ext.getStore('SerologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var time= ['01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00','05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
                   '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00','24:30'];
        var TableValues='<div><table style="width:540px;height:290px"><thead>';
        var tablepanel=this.getSerologyResultsTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        //console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_of_SerologyLabs;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('text')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<48){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_of_SerologyLabs+2;k++){// for loop for each row in the table, +2 to add date and time  
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
              TableValues+='</tbody></table></div>';
              tablepanel.setHtml(TableValues);
    }
});