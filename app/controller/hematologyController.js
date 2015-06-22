Ext.define("MVF.controller.hematologyController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            //LabsMain:'LabsMainView',
            hematology:'hematology',
            OnViewClick:'[itemid=hematologyviewbuttonid]',
            HematologyTable:'[itemid=HematologyResultsTable]',
            HematologyUpdateButton:'[itemid=HematologyUpdateButton]',
            HematologyChartViewingPanel:'[itemid=hematologychartviewingid]',
            HematologyAlertPanel:'[itemid=HematologyAlertsCount]',
            hematologyviewingitem:'[itemid=hematologyviewingitem]',
            HematologyTableAlerts:'[itemid=TablealertPanel]',
            HematologyChartAlertCount:'[itemid=hematologyChartAlertsCount]',
            HematologyAlertDates:'[itemid=hematologyalertdate]',
            HematologyGoToPageDropDownSelect:'[itemid=hematologypageid]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            HematologyUpdateButton:{
                tap:'OnHematologyUpdateButtonTap'
            },
            HematologyGoToPageDropDownSelect:{
                change:'HematologyGoToPageDropDownSelect'
            }
        }
    },
    init:function(){
        this.editHematologyValuesfunction();
        //this.CountNO_OFAlerts();
    },
    HematologyGoToPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=hematologypageid]')[0].getValue();
        console.log(pagename);
         //this.getHematology().pop(pagename);
//        if(Ext.getCmp(pagename)){
//              
//               this.getApplication().getController('MainController').getLabsMain().pop();
//            }
         
                    this.getHematology().push({
                     xtype:pagename
                 });
         
    },
    OnViewClickFunction:function(){
            var hematologyvalue=Ext.ComponentQuery.query('[itemid=hematologydropdownvalueid]')[0].getValue();
            var StartDate=Ext.ComponentQuery.query('[itemid=hematologystartdate]')[0].getFormattedValue();
            var EndDate=Ext.ComponentQuery.query('[itemid=hematologyenddate]')[0].getFormattedValue();
            var store=Ext.getStore('HematologyChartStore');
            var HematologyChartViewingPanel=this.getHematologyChartViewingPanel();
            HematologyChartViewingPanel.setHtml(hematologyvalue);
            var hematologyviewingitem=this.getHematologyviewingitem();
            hematologyviewingitem.setHtml(hematologyvalue);
            this.CountNO_OFAlerts();
            var HematologyChartAlertCount=this.getHematologyChartAlertCount();
            var HematologyAlertDates=this.getHematologyAlertDates();
            
           console.log(hematologyvalue);console.log(StartDate);
           //var nextdate=Ext.Date.format(Ext.Date.add(new Date(StartDate),Ext.Date.DAY,1),'n/j/Y');
           //console.log(nextdate);
//           var diff=Ext.Date.getElapsed(new Date(StartDate),new Date(EndDate));
//           var days=diff/(1000*60*60*24);
          // console.log(days);
            store.load({
                params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                     scope:this,
                     callback:function(records,success){
                         var ChartAlertCount=0;
                         var AlertText='';
                         var No_Of_ResultsFetch=store.getCount();
                         console.log('no od results fetch'+No_Of_ResultsFetch);
                         //console.log(records[0].data.result+'working');
                         if(No_Of_ResultsFetch>0){
                             console.log('In Success if condition');
                             for(var p=0;p<No_Of_ResultsFetch;p++){ 
                                 //console.log('in for loop '+p);
                             if(records[p].data.result!=='null' ){
                                 console.log('in if loop');
                                 ChartAlertCount++;
                                if(records[p].data.max<=records[p].data.result){
                                     console.log('in high if loop '+records[p].data.result+' '+records[p].data.max);
                                    AlertText+=records[p].data.date+'<br>'+'<p style="color:#ff0000">High '+hematologyvalue+' Count</p> <br>';
                                }
                                else if(records[p].data.min>=records[p].data.result){
                                    console.log('in low if loop'+records[p].data.result);
                                    AlertText+=records[p].data.date+'<br>'+'<p style="color:#ff0000">Low '+hematologyvalue+' Count</p> <br>';
                                }
                             }
                         }
                            console.log(ChartAlertCount);
                            //console.log(AlertText);
                            HematologyChartAlertCount.setHtml('Alerts ('+ChartAlertCount+')'); 
                            HematologyAlertDates.setHtml(AlertText);
                        } 
                         else{
                             alert('There are no records between these days');
                             HematologyChartAlertCount.setHtml('Alerts ('+ChartAlertCount+')'); 
                             HematologyAlertDates.setHtml(AlertText);
                         }
                     }
                         
                     });
                     
             var TableStore=  Ext.getStore('HematologyTableStore');
             TableStore.load({
                 params:{ hematologyvalue: hematologyvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                        scope:this,
                         callback:function(records){
                             var values=records;
                             this.DisplayHematologyResults(values,StartDate,EndDate);
                         }
             });
    },
    editHematologyValuesfunction:function(){
      console.log('in editHematologyValuesfunction function');
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditHematologyvaluesOverlay',
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
                                       store: 'hematologyDropDownStore',
                                       itemid:'hematologyEditdropdownvalueid',
                                       name:'hematologyEditdropdownvalueid',
                                       valueField:'value',
                                       displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'Hematologydateedit',
                                         width:'100%',
                                         name:'Hematologydateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'selectfield',
                                         itemid:'Hematologytimeedit',
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
                                         name:'Hematologyresultedit',
                                         itemid:'Hematologyresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'HematologyUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#hematologyedittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button editHematologyValuesfunction');
            }
        });
   },
    DisplayHematologyResults:function(values,startdate,enddate){
        var ItemStore=Ext.getStore('hematologyDropDownStore');
        var No_of_LabsInHematology=ItemStore.getCount();
        var TableStore=Ext.getStore('HematologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        //console.log('No_of_Results_Fetch = '+No_of_Results_Fetch);
        var time= ['0100','0200','0300','0400','0500','0600','0700','0800','0900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400'];
        var TableValues='<table><thead>';
        var tablepanel=this.getHematologyTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        //console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_of_LabsInHematology;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('text')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        var Alert_count_between_dates=0;
        var HematologyTableAlerts=this.getHematologyTableAlerts();
       // console.log(' for_date ='+ for_date);
        //console.log(' result date ='+values[value].data.date);
            for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<24){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_of_LabsInHematology+2;k++){// for loop for each row in the table, +2 to add date and time  
                          if(k===0){
				TableValues+='<tr><td style="padding:0 10px 0 0">'+startdate+'</td>';
                          }
                          else if(k===1){
				TableValues+='<td style="padding:0 10px 0 15px;border-right:1px solid #a5a399">'+time[timeindex]+'</td>';
                          }
                          else{
                              if(r< No_of_Results_Fetch && values[r].data.date===startdate && values[r].data.time===time[timeindex]){
					if(values[r].data.Name===ItemStore.getAt(k-2).get('text')){
                                            if(ItemStore.getAt(k-2).get('exact')==='null'){
                                                if(values[r].data.result>=ItemStore.getAt(k-2).get('max')||values[r].data.result<=ItemStore.getAt(k-2).get('min')){
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
              HematologyTableAlerts.setHtml('Alerts ('+Alert_count_between_dates+')');
    },
    OnHematologyUpdateButtonTap:function(){
        var hematologyEditValue=Ext.ComponentQuery.query('[itemid=hematologyEditdropdownvalueid]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=Hematologydateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=Hematologytimeedit]')[0].getValue();
        var Result=Ext.ComponentQuery.query('[itemid=Hematologyresultedit]')[0].getValue();
        console.log(hematologyEditValue); console.log(EditDate); console.log(EditTime);
        console.log(Result);
        var store=Ext.getStore('HematologyResultUpdateStore');
        store.load({
            params:{
                hematologyname:hematologyEditValue,
                date:EditDate,
                time:EditTime,
                result:Result
            },
            scope:this,
            callback:function(records){
                
                alert(records[0].data.information);
                
            }
        });
    },
    CountNO_OFAlerts:function(){
        console.log(' IN Hematology alert count function');
        var AlertStore=Ext.getStore('HematologyAlertStore');
        var AlertPanel=this.getHematologyAlertPanel();
         AlertStore.load({
            callback:function(){
                No_OF_Alerts=AlertStore.getCount();
               console.log('no of alert '+No_OF_Alerts);
               AlertPanel.setHtml('('+No_OF_Alerts+')');
            }
        });
        
        
    }
    });