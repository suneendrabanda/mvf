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
            var alertInfo='';
            store.load({
                        params:{ chemistryvalue: chemistryvalue,
                                 startdate: startdatevalue,
                                 enddate: enddatevalue},
                                 scope:this,
                        callback:function(records,success){
                            console.log(records[0].data.date+' working');
                            var No_of_Results=store.getCount();
                            console.log(No_of_Results+' fetch');
                            if(success){
                                console.log('in sucee');
                               for(var w=0;w<No_of_Results;w++){
                                   if(records[w].data.result!=='null'){
                                        if(records[w].data.exact ==='null'){
                                            if(records[w].data.result>records[w].data.max){
                                                alertInfo+= records[w].data.date+'<br>'+'High '+chemistryvalue+' count<br>';
                                            }
                                            else if(records[w].data.result<records[w].data.min){
                                                alertInfo+= records[w].data.date+'<br>'+'Low '+chemistryvalue+' count<br>';
                                            }
                                        }
                                        else{
                                            if(records[w].data.min==='null'){
                                                if(records[w].data.result>records[w].data.max){
                                                    alertInfo+= records[w].data.date+'<br>'+'High '+chemistryvalue+' count<br>';
                                                }
                                            }
                                            else if(records[w].data.max==='null'){
                                                if(records[w].data.result<records[w].data.min){
                                                   alertInfo+= records[w].data.date+'<br>'+'Low '+chemistryvalue+' count<br>'; 
                                                }
                                            }
                                        }
                                    }
                               }
                               chemistryalertinfo.setHtml(alertInfo);
                               console.log(alertInfo);
                            }
                        }
                   });
                   var TableStore=  Ext.getStore('ChemistryTableStore');
                    TableStore.load({
                        params:{ 
                                startdate: startdatevalue,
                                enddate: enddatevalue},
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
                result:Result
            },
            scope:this,
            callback:function(records){
                
                alert(records[0].data.information);
                
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
        var time= ['0100','0200','0300','0400','0500','0600','0700','0800','0900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400'];
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
                  while(timeindex<24){// while loop to loop 24 hrs per day
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
             // HematologyTableAlerts.setHtml('Alerts ('+Alert_count_between_dates+')');
    }
    });