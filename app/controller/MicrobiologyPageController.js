Ext.define("MVF.controller.MicrobiologyPageController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            microbiologyview:'microbiologyview',
            OnViewClick:'[itemid=MicroBiologyviewbuttonid]',
            microbilogyviewpanel:'[itemid=mbviewingitem]',
            microbiologychartview:'[itemid=mbchartviewingid]',
            MicrobiologyUpdateButton:'[itemid=MicrobiologyUpdateButton]',
            MicrobiologyTable:'[itemid=MBResultsTable]',
            GoToPageDropDownSelect:'[itemid=MBlabsPageId]'
        },
        control:{
            OnViewClick:{
                tap:'OnViewClickFunction'
            },
            MicrobiologyUpdateButton:{
                tap:'MicrobiologyUpdateButtonFunction'
            },
            GoToPageDropDownSelect:{
                change:'GoToPageDropDownSelect'
            }
        }
    },
    init:function(){
        this.MicroBiologyEditFunction();
    },
    GoToPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=MBlabsPageId]')[0].getValue();
        console.log(pagename);
         this.getMicrobiologyview().push({
          xtype:pagename
      });
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
                             this.DisplayMicrobiologyResults(values,StartDate,EndDate);
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
                                         xtype:'selectfield',
                                         itemid:'MBtimeedit',
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
    DisplayMicrobiologyResults:function(values,startdate,enddate){
        var ItemStore=Ext.getStore('microbiologydropdownstore');
        var TableStore=Ext.getStore('MicrobiologyTableStore');
        var No_of_Results_Fetch=TableStore.getCount();
        var No_of_MBItems=ItemStore.getCount();
        var time= ['0100','0200','0300','0400','0500','0600','0700','0800','0900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400'];
        var TableValues='<table><thead>';
        var tablepanel=this.getMicrobiologyTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px">Date</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Time</th>';
              for(var i=0;i<No_of_MBItems;i++){
                  TableValues+='<th style=" padding:0 30px 0 15px">'+ItemStore.getAt(i).get('text')+'</th>';
                }
                TableValues+='</tr></thead><tbody>';
        var r=0;// index for records fetch
        var timeindex=0; //index to loop time array
        for(var j=0;j<days;j++){// for loop to loop number of days select ie.. difference between start date and end date
                  while(timeindex<24){// while loop to loop 24 hrs per day
                      for(var k=0;k<No_of_MBItems+2;k++){// for loop for each row in the table, +2 to add date and time  
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
                      
    }
    });