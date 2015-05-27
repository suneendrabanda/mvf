Ext.define("MVF.controller.hematologyController", {
    extend: "Ext.app.Controller",
    config: {
        refs:{
            OnViewClick:'[itemid=hematologyviewbuttonid]',
            HematologyTable:'[itemid=HematologyResultsTable]',
            HematologyUpdateButton:'[itemid=HematologyUpdateButton]',
            HematologyChartViewingPanel:'[itemid=hematologychartviewingid]',
            HematologyAlertPanel:'[itemid=HematologyAlertsCount]',
            hematologyviewingitem:'[itemid=hematologyviewingitem]'
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
           console.log(hematologyvalue);console.log(StartDate);
           //var nextdate=Ext.Date.format(Ext.Date.add(new Date(StartDate),Ext.Date.DAY,1),'n/j/Y');
           //console.log(nextdate);
           var diff=Ext.Date.getElapsed(new Date(StartDate),new Date(EndDate));
           var days=diff/(1000*60*60*24);
           console.log(days);
            store.load({
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
    DisplayHematologyResults:function(records,startdate,enddate){
        var TableValues='<table>';
        var tablepanel=this.getHematologyTable();
        console.log('IN DisplayHematologyResults function ');
        console.log('start date '+startdate);
        console.log('end date '+enddate);
        var diff=Ext.Date.getElapsed(new Date(startdate),new Date(enddate));
        var days=diff/(1000*60*60*24)+1;
        console.log('difference between start date and end date '+days);
        TableValues+='<tr style="border-bottom:1px solid #a5a399">'+
                      '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">CBC</td>'+
                      '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">Average</td>';
              for(var i=0;i<days;i++){
                  nextdate=startdate;
                  TableValues+='<td style=" padding:0 30px 0 15px">'+nextdate+'</td>';
                  var startdate=Ext.Date.format(Ext.Date.add(new Date(startdate),Ext.Date.DAY,1),'n/j/Y');
                  
              }
              TableValues+='<td style=" padding:0 30px 0 15px;border-left:1px solid #a5a399">Range</td>'+'</tr>';
              tablepanel.setHtml(TableValues);
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
               AlertPanel.setHtml(No_OF_Alerts);
            }
        });
        
        
    }
    });