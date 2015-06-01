Ext.define("MVF.controller.hematologyController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=hematologyviewbuttonid]',
            HematologyTable:'[itemid=HematologyResultsTable]',
            HematologyUpdateButton:'[itemid=HematologyUpdateButton]',
            HematologyChartViewingPanel:'[itemid=hematologychartviewingid]',
            HematologyAlertPanel:'[itemid=HematologyAlertsCount]',
            hematologyviewingitem:'[itemid=hematologyviewingitem]',
            HematologyTableAlerts:'[itemid=TablealertPanel]',
            HematologyChartAlertCount:'[itemid=hematologyChartAlertsCount]',
            HematologyAlertDates:'[itemid=hematologyalertdate]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            HematologyUpdateButton:{
                tap:'OnHematologyUpdateButtonTap'
            }
        }
    },
    init:function(){
        this.editHematologyValuesfunction();
        //this.CountNO_OFAlerts();
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
                         console.log(records[0].data.result+'working');
                         if(success){
                             for(var p=0;p<No_Of_ResultsFetch;p++){
                                 console.log('in for loop '+p);
                             if(records[p].data.result >= records[p].data.max || records[p].data.result<=records[p].data.min){
                                 console.log('in if loop');
                                 ChartAlertCount++;
                                 if(records[p].data.result >= records[p].data.max){
                                    AlertText+=records[p].data.date+'<br>'+'<p style="color:#ff0000">High '+hematologyvalue+' Count</p> <br>';
                                }
                                else{
                                    AlertText+=records[p].data.date+'<br>'+'<p style="color:#ff0000">Low '+hematologyvalue+' Count</p> <br>';
                                }
                             }
                         }
                          console.log(ChartAlertCount);
                        console.log(AlertText);
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
                                         xtype:'textfield',
                                         name:'Hematologytimeedit',
                                         itemid:'Hematologytimeedit',
                                         placeHolder:'Enter Time',
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
                
		console.log('yes button editHematologyValuesfunction');
            }
        });
   },
    DisplayHematologyResults:function(values,startdate,enddate){
        var ItemStore=Ext.getStore('hematologyDropDownStore');
        var TableStore=Ext.getStore('HematologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        console.log('No_of_Results_Fetch = '+No_of_Results_Fetch);
        var No_of_HematologyItems=ItemStore.getCount();
        console.log(No_of_HematologyItems);       
        var TableValues='<table>';
        var tablepanel=this.getHematologyTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        var date_passed=startdate;
        var for_date=startdate;
        console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Name</td>'+
                      '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Average</td>';
              for(var i=0;i<days;i++){
                  nextdate=startdate;
                  TableValues+='<td style=" padding:0 30px 0 15px">'+nextdate+'</td>';
                  var startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                  
              }
              TableValues+='<td style=" padding:0 30px 0 15px;border-left:1px solid #a5a399">Range</td>'+'</tr>';
        var value=0;
        var Alert_count_between_dates=0;
        var HematologyTableAlerts=this.getHematologyTableAlerts();
        console.log(' for_date ='+ for_date);
        console.log(' result date ='+values[value].data.date);
            for(var j=0;j<No_of_HematologyItems;j++){
                  TableValues+='<tr>'+
                                '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+ItemStore.getAt(j).get('text')+'</td>'+
                                '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+ItemStore.getAt(j).get('range')+'</td>';
                   for(var k=0;k<days;k++){
                       //console.log(values[value].data.date+'IN for loop');
                     if(value<No_of_Results_Fetch && values[value].data.Name ===ItemStore.getAt(j).get('text')){// check if the Hematology name equal or not
                          // console.log(values[value].data.date+' name are equal IN for loop');
                           
                           if(for_date===values[value].data.date){// check for date equal or not
                               console.log('In date if loop'+for_date);
                               if(ItemStore.getAt(j).get('exact')==='null'){
                                   console.log('excat = null if loop');
                                    if(values[value].data.result<=ItemStore.getAt(j).get('max') && values[value].data.result>=ItemStore.getAt(j).get('min')){
                                        TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                                        console.log('result entered for normal range');
                                    }
                                    else{
                                        TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;color:#ff0000">'+values[value].data.result+'</td>';
                                        Alert_count_between_dates++;
                                        console.log('result entered for outof range');
                                    }
                                }
                                else{
                                    TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                                    console.log('result for if range exact not equal to null');
                                }
                               
                               console.log(values[value].data.Name+'result entered for '+ values[value].data.date );
                               console.log(value);
                               value++;
                            }
                            else{
                                    TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                                    console.log('didnt find the result for date entered - in if');
                            }
                       }
                       else{
                               TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                               console.log('didnt find the result for date entered - ');
                      }
                       
                       for_date=Ext.Date.format(Ext.Date.add(new Date(for_date),Ext.Date.DAY,1),'m/d/Y');
                       console.log('incremented for date '+for_date);
                   }
                   TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;border-left:1px solid #a5a399">'+ItemStore.getAt(j).get('range')+'</td>'+'</tr>';
                   for_date=date_passed;
              }
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