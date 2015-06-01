Ext.define("MVF.controller.MicrobiologyPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=MicroBiologyviewbuttonid]',
            microbilogyviewpanel:'[itemid=mbviewingitem]',
            microbiologychartview:'[itemid=mbchartviewingid]',
            MicrobiologyUpdateButton:'[itemid=MicrobiologyUpdateButton]',
            MicrobiologyTable:'[itemid=MBResultsTable]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            MicrobiologyUpdateButton:{
                tap:'MicrobiologyUpdateButtonFunction'
            }
        }
    },
    init:function(){
        this.MicroBiologyEditFunction();
    },
    OnViewClickFunction:function(){
        var MBvalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var StartDate=Ext.ComponentQuery.query('[itemid=mbstartdate]')[0].getFormattedValue();
        var EndDate=Ext.ComponentQuery.query('[itemid=mbenddate]')[0].getFormattedValue();
        console.log(MBvalue);console.log(StartDate);console.log(EndDate);
        var store=Ext.getStore('MicrobiologyChartStore');
        store.load({
                params:{ MBvalue: MBvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                         scope:this,
                         callback:function(records){
                             var values= records;
                               var result=values[0].data.microbiologyname;
                                var time=values[0].data.time;
                                var min=values[0].data.minimunvalue;
                                var max=values[0].data.maximumvalue;
                                var date=values[0].data.date;
                                console.log(result);
                                console.log(time);
                                console.log(min); console.log(max);console.log(date);
                         }
                     });
        var microbilogyvaluevalue=Ext.ComponentQuery.query('[itemid=mbdropdownvalueid]')[0].getValue();
        var viewingitem=this.getMicrobilogyviewpanel();
        var chartviewingpanel=this.getMicrobiologychartview();
        viewingitem.setHtml(microbilogyvaluevalue);
        chartviewingpanel.setHtml(microbilogyvaluevalue);        
        var MBTableStore= Ext.getStore('MicrobiologyTableStore');
        MBTableStore.load({
                 params:{ MBvalue: MBvalue,
                         startdate: StartDate,
                         enddate: EndDate},
                        scope:this,
                         callback:function(records){
                             var values=records;
                             this.DisplayHematologyResults(values,StartDate,EndDate);
                         }
             });
    },
    MicroBiologyEditFunction:function(){
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditMicroBiologyvaluesOverlay',
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
                                       store: 'microbiologydropdownstore',
                                       itemid:'mbEditvalueid',
                                       name:'mbEditvalueid',
                                       valueField:'value',
                                       displayField:'text',
                                       style:{
                                               'fontFamily':'openSansRegular',
                                               'font-size':'small'
                                            }   
                                    },
                                    {
                                         xtype:'datepickerfield',
                                         itemid:'MBdateedit',
                                         width:'100%',
                                         name:'MBdateedit',
                                         value: new Date(),
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'MBtimeedit',
                                         itemid:'MBtimeedit',
                                         placeHolder:'Enter Time',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'MBresultedit',
                                         itemid:'MBresultedit',
                                         placeHolder:'Enter Result',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     },
                                     {
                                         xtype:'button',
                                         itemid:'MicrobiologyUpdateButton',
                                         ui:'action',
                                         text:'Update',
                                         style:{
                                             'margin-top':'10px'
                                         }
                                     }
            ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#MBEditValuesicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
               }
        });
    },
    MicrobiologyUpdateButtonFunction:function(){
        var MBEditValue=Ext.ComponentQuery.query('[itemid=mbEditvalueid]')[0].getValue();
        var EditDate=Ext.ComponentQuery.query('[itemid=MBdateedit]')[0].getFormattedValue();
        var EditTime=Ext.ComponentQuery.query('[itemid=MBtimeedit]')[0].getValue();
        var EditResult=Ext.ComponentQuery.query('[itemid=MBresultedit]')[0].getValue();
        var store=Ext.getStore('MicrobiologyResultUpdateStore');
        store.load({
            params:{
                MBEditValue:MBEditValue,
                date:EditDate,
                time:EditTime,
                result:EditResult
            },
            scope:this,
            callback:function(records,success){
                if(success){
                    alert(records[0].data.information);
                }
            }
        });
    },
    DisplayHematologyResults:function(values,startdate,enddate){
        var ItemStore=Ext.getStore('microbiologydropdownstore');
        var TableStore=Ext.getStore('MicrobiologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var No_of_MBItems=ItemStore.getCount();
        var TableValues='<table>';
        var tablepanel=this.getMicrobiologyTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        var date_passed=startdate;
        var for_date=startdate;
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Name</td>';
              for(var i=0;i<days;i++){
                  nextdate=startdate;
                  TableValues+='<td style=" padding:0 30px 0 15px">'+nextdate+'</td>';
                  var startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                }
                TableValues+='<td style=" padding:0 30px 0 15px;border-left:1px solid #a5a399">Range</td>'+'</tr>';
        var value=0;
        for(var j=0;j<No_of_MBItems;j++){
                  TableValues+='<tr>'+
                                '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+ItemStore.getAt(j).get('text')+'</td>';
                                
                   for(var k=0;k<days;k++){
                       //console.log(values[value].data.date+'IN for loop');
                     if(value<No_of_Results_Fetch && values[value].data.Name ===ItemStore.getAt(j).get('text')){// check if the Hematology name equal or not
                          // console.log(values[value].data.date+' name are equal IN for loop');
                           
                           if(for_date===values[value].data.date){// check for date equal or not
                               console.log('In date if loop'+for_date);
                               TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                               console.log(values[value].data.Name+'result entered for '+ values[value].data.date );
                               console.log(value);
                               value++;
                            }
                            else{
                                    TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                            }
                       }
                       else{
                               TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                      }
                       
                       for_date=Ext.Date.format(Ext.Date.add(new Date(for_date),Ext.Date.DAY,1),'m/d/Y');
                       console.log('incremented for date '+for_date);
                   }
                   TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;border-left:1px solid #a5a399">'+ItemStore.getAt(j).get('range')+'</td>'+'</tr>';
                   for_date=date_passed;
              }
              tablepanel.setHtml(TableValues);
                      
    }
    });