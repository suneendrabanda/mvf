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
        //console.log(No_of_ChemistryItems);       
        var TableValues='<table class="scroll"><thead>';
        var tablepanel=this.getChemistryTable();
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        var date_passed=startdate;
        var for_date=startdate;
        //console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Name</th>'+
                      '<th style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Average</th>';
              for(var i=0;i<days;i++){
                  nextdate=startdate;
                  TableValues+='<th style=" padding:0 30px 0 15px">'+nextdate+'</th>';
                  var startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'m/d/Y');
                  
              }
              TableValues+='<th style=" padding:0 70px 0 15px;border-left:1px solid #a5a399">Range</th>'+'</tr></thead><tbody>';
        var value=0;
      //var Alert_count_between_dates=0;
        //var HematologyTableAlerts=this.getHematologyTableAlerts();
       // console.log(' for_date ='+ for_date);
        //console.log(' result date ='+values[value].data.date);
            for(var j=0;j<No_of_ChemistryItems;j++){
                  TableValues+='<tr>'+
                                '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+ItemStore.getAt(j).get('text')+'</td>'+
                                '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+ItemStore.getAt(j).get('range')+'</td>';
                   for(var k=0;k<days;k++){
                       //console.log(values[value].data.date+'IN for loop');
                     if(value<No_of_Results_Fetch && values[value].data.Name ===ItemStore.getAt(j).get('text')){// check if the Hematology name equal or not
                          // console.log(values[value].data.date+' name are equal IN for loop');
                           
                           if(for_date===values[value].data.date){// check for date equal or not
                               //console.log('In date if loop'+for_date);
                               if(ItemStore.getAt(j).get('exact')==='null'){
                                   //console.log('excat = null if loop');
                                    if(values[value].data.result<=ItemStore.getAt(j).get('max') && values[value].data.result>=ItemStore.getAt(j).get('min')){
                                        TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                                        //console.log('result entered for normal range');
                                    }
                                    else{
                                        TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;color:#ff0000">'+values[value].data.result+'</td>';
                                       // Alert_count_between_dates++;
                                        //console.log('result entered for outof range');
                                    }
                                }
                                else{
                                    if(ItemStore.getAt(j).get('min')==='null'){
                                        if(values[value].data.result <= ItemStore.getAt(j).get('max')){
                                            TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                                        }
                                        else{
                                            TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;color:#ff0000">'+values[value].data.result+'</td>';
                                        }
                                    }
                                    else if(ItemStore.getAt(j).get('max')==='null'){
                                        if(values[value].data.result >= ItemStore.getAt(j).get('min')){
                                            TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em">'+values[value].data.result+'</td>';
                                        }
                                        else{
                                            TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;color:#ff0000">'+values[value].data.result+'</td>';
                                        }
                                    }
                                    
                                    //console.log('result for if range exact not equal to null');
                                }
                               
                               //console.log(values[value].data.Name+'result entered for '+ values[value].data.date );
                               //console.log(value);
                               value++;
                            }
                            else{
                                    TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                                    //console.log('didnt find the result for date entered - in if');
                            }
                       }
                       else{
                               TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em ">-</td>'; 
                              // console.log('didnt find the result for date entered - ');
                      }
                       
                       for_date=Ext.Date.format(Ext.Date.add(new Date(for_date),Ext.Date.DAY,1),'m/d/Y');
                       //console.log('incremented for date '+for_date);
                   }
                   TableValues+='<td style="padding:0 30px 0 15px;padding-bottom: 1em;border-left:1px solid #a5a399">'+ItemStore.getAt(j).get('range')+'</td>'+'</tr>';
                   for_date=date_passed;
              }
              TableValues+='</tbody></table>';
              tablepanel.setHtml(TableValues);
             // HematologyTableAlerts.setHtml('Alerts ('+Alert_count_between_dates+')');
    }
    });