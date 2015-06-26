
Ext.define("MVF.controller.MainController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            main:'main',
            chemistry:'chemistrylabs',
            vital:'[itemid=vitalname]',
            onupdatevital:'[itemid=updatebutton]',
            shiftselect:'[itemid=shiftname]',
            edittable:'[itemid=edittableicon]',
            vitaltable:'[itemid=tablevitalname]',
            vitaltablepanel:'[itemid=vitaltablepanel]',
            patientsummarybutton:'[itemid=patientsummarybutton]',
            returntovspage:'[itemid=cancelbutton]',
            backtovsiopage:'[itemid=back]',
            gotopage:'[itemid=pageid]',
            editintake:'[itemid=editintakeicon]',
            editoutput:'[itemid=editoutputicon]',
            onoutputupdatebuttonclick:'[itemid=outputupdatebutton]',
            onintakeupdatebuttonclick:'[itemid=intakeupdatebutton]',
            //chemistrydropdownselect:'[itemid=chemisrtydropdownvalueid]',
            viewingpanel:'[itemid=viewingitem]',
            chemistrychartviewpanel:'[itemid=chartviewingid]',
            chemistryalertdatepanel:'[itemid=chealertdate]',
            chemistryalertinfo:'[itemid=chealertinfo]',
            gotoIntakeAndOutputpage:'[itemid=intakeExpand]',
            gotoIntakeAndOutputpageOnOutput:'[itemid=outputExpand]'
            
        },
        control: {

            vital:{
                    change:'OnVitalnameSelect'
                },
                gotoIntakeAndOutputpage:{
                    tap:'gotoIntakeAndOutputpagefunction'
                },
                gotoIntakeAndOutputpageOnOutput:{
                    tap:'gotoIntakeAndOutputpagefunction'
                },               
                onoutputupdatebuttonclick:{
                    tap:'outputupdatebuttontap'
                },
                onintakeupdatebuttonclick:{
                    tap:'intakeupdatebuttontap'
                },
//                editintake:{
//                    tap:'editintakefunction'
//                },
//                editoutput:{
//                    tap:'editoutputfunction'
//                },
                gotopage:{
                    change:'gotopagefunction'
                },
            onupdatevital:{
                tap:'editvitalvaluefunction'
            },    
            shiftselect:{
                    change:'OnVitalnameSelect'
                    
                },
            vitaltable:{
                    change:'loadtabledata'
            },
            //edittable:{
              //  tap:'edittable'
            //},
            patientsummarybutton:{
                tap:'OnVSAndIOpageLoad'
            },
            returntovspage:{
                tap:'returntovspage'
            },
            backtovsiopage:{
                tap:'returntovsiopage'
            }
            
        }
    },
    init: function(){
        this.edittable();
        this.editintakefunction();
        this.editoutputfunction();
    },
    gotoIntakeAndOutputpagefunction:function(){
        console.log('in function');
        this.getMain().push({
          xtype:'IntakeAndOutputView'
          
      });
    },
    OnVitalnameSelect: function(){
            var store=Ext.getStore('LineChart');
            var storebp=Ext.getStore('bpLineChart');
            var vitalvalue=Ext.ComponentQuery.query('#vitalname')[0].getValue();
            var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();
            var startdatevalue=Ext.ComponentQuery.query('#startdate')[0].getFormattedValue();
            var enddatevalue=Ext.ComponentQuery.query('#enddate')[0].getFormattedValue();
            console.log(startdatevalue);
            console.log(enddatevalue);
            //Ext.Msg.alert(startdatevalue);
            this.loadtabledata();
           if(vitalvalue==='bp'){
               storebp.load({
                   params:{ vitalvalue: vitalvalue,
                            shiftvalue: shiftvalue,
                            startdate: startdatevalue,
                            enddate: enddatevalue},
                   scope:this,
                   callback:function(records){
                    var vitals=records;
                    
                    var vitalvalues=vitals[0].data.vitalnum;
                   
                    var timevalue=vitals[0].data.time;
                    var denos=vitals[0].data.vitaldeno;
                    console.log(vitalvalue);
                    console.log(shiftvalue);
                    console.log(vitalvalues);
                    console.log(timevalue);
                    console.log(denos);
                }
               });
               Ext.ComponentQuery.query('#linechartid')[0].hide();
               Ext.ComponentQuery.query('#bplinechartid')[0].show();
               
           } 
           else{
           console.log(vitalvalue);
            store.load({
                params:{ vitalvalue: vitalvalue,
                         shiftvalue: shiftvalue,
                         startdate: startdatevalue,
                         enddate: enddatevalue},
                scope:this,
                callback:function(records){
                    var vitals=records;
                    var vitalvalues=vitals[0].data.vital;
                    var timevalue=vitals[0].data.time;
                    var denos=vitals[0].data.deno;
                    console.log(vitalvalues);
                    console.log(timevalue);
                    console.log(denos);
                    //Ext.Msg.alert(vitalvalues);
                }
            });
            Ext.ComponentQuery.query('#bplinechartid')[0].hide();
            Ext.ComponentQuery.query('#linechartid')[0].show();
        }
//            store.on('load',function(){
//                // Ext.Msg.alert('store is loaded');
//            })
            //Ext.ComponentQuery.query('#linechartid')[0].show();
            //Ext.Msg.alert('vitalval');
    },
    loadtabledata:function(){
        var vitalvalue=Ext.ComponentQuery.query('#tablevitalname')[0].getValue();
        var tablestartdate=Ext.ComponentQuery.query('#tablestartdate')[0].getFormattedValue();
        var tableenddate=Ext.ComponentQuery.query('#tableenddate')[0].getFormattedValue();
        var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();

        //Ext.Msg.alert(vitalvalue);
        // Ext.Msg.alert(selecteddate);
        var vitaltablepanel= this.getVitaltablepanel();
        var store = Ext.StoreMgr.get('vitaltablestore');
        Ext.getStore('vitaltablestore').load({
            params:{ vitalvalue: vitalvalue,
                     shiftvalue: shiftvalue,
                     startdate:tablestartdate,
                     enddate:tableenddate
                      },
             scope:this,
             callback:function(records,operation,success){
                 var no_of_records=store.getCount();
                 var vitaltable='<table><thead>';
                 
                    if(vitalvalue==='all'){
                        vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                          '<td style=" padding:0 0px 0 0px">'+'Date'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'BP'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Height'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Pain'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Pulse'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Resp'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'SaO2'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Temperature'+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+'Weight'+'</td>'+'</tr>';
                    for(var i=0;i<no_of_records;i++){
                               vitaltable += '<tr>'+
                                          '<td style=" padding:0 0px 0 0px">'+records[i].data.date+'</td>'+
                                          '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.BP+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Height+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Pain+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Pulse+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Resp+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.SaO2+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Temp+'</td>'+
                                          '<td style=" padding:0 30px 0 15px">'+records[i].data.Weight+'</td>'+'</tr>';
                    }
                }
                else{
                    vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                          '<td style=" padding:0 30px 0 18px">'+'Date'+'</td>'+
                                          '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                          '<td style=" padding:0 30px 0 18px">'+vitalvalue+'</td>'+'</tr>';
                     for(var i=0;i<no_of_records;i++){
                         vitaltable += '<tr>'+
                                          '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                          '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                          '<td style=" padding:0 30px 0 18px">'+store.getAt(i).get(vitalvalue)+'</td>'+'</tr>';
                         }
                }
                     vitaltablepanel.setHtml(vitaltable);
                }
             });
       
        
    },
    edittable:function(){
      
     var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    //id: 'EditPersonalInfoOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,           
	    width:  Ext.os.deviceType =='Phone' ? 490 : 400,//'500px',
	    height: Ext.os.deviceType =='Phone' ? 400 : 400,
            zIndex:5,
            
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                            {
				    xtype: 'EditTable',
				    width: '98%',
				    height: '98%',
                                    
                                    
			    },
			   
	    ],
	    
        });
	
	Ext.Viewport.on({
            delegate: '#edittableicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
                
		//console.log('yes button');
            }
        });
        

        
       
    },
    editvitalvaluefunction:function(button, e, eOpts){
       var editvitalvalue=Ext.ComponentQuery.query('[itemid=editvitalnameid]')[0].getValue();
       var editdatevalue=Ext.ComponentQuery.query('[itemid=editdatevalue]')[0].getFormattedValue();
       var edittimevalue=Ext.ComponentQuery.query('[itemid=edittimevalue]')[0].getValue();
       var editresultvalue=Ext.ComponentQuery.query('[itemid=vitalsignvalue]')[0].getValue();
       console.log(editvitalvalue);
       console.log(editdatevalue);
       console.log(edittimevalue);
       console.log(editresultvalue);
      
         Ext.getStore('vitalsignupdatestore').load({
                   params:{ vitalvalue: editvitalvalue,
                            datevalue: editdatevalue,
                            timevalue: edittimevalue,
                            vitalresult: editresultvalue
                        },
                   scope:this,
                   callback:function(records,operation,success){

                        Ext.Msg.alert(records[0].data.information);
                       
                   }
                   });
               
                  
   },
   gotopagefunction:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=pageid]')[0].getValue();
        console.log(pagename);
         this.getMain().push({
          xtype:pagename
          });
          if(pagename==='hematology'){
              this.getApplication().getController('hematologyController').CountNO_OFAlerts();
          }
          
    },
   editintakefunction:function(){
      // console.log('in function');
      var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditoutputvaluesOverlay',
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
                                          height:'40px',
                                          itemid:'intakenameedit',
                                           name:'intakenameedit',
                                           
                                           options: [
                                                   {text: 'PO',  value: 'PO'},
                                                   {text: 'IV',  value: 'IV'},
                                                   {text: 'Blood', value: 'Blood'},
                                                   {text: 'IVPB',  value: 'IVPB'},
                                                   {text: 'Tube Fdg',  value: 'Tube Fdg'},
                                                   {text: 'TPN',  value: 'TPN'},
                                                   {text: 'Lipids',  value: 'Lipids'},
                                                   {text: 'Breast Feed',  value: 'Breast Feed'},
                                                   {text: 'Total In',  value: 'Total In'},
                                                   {text: 'Others',  value: 'Others'}
                                               ],
                                               style:{
                                                   'border-width':'2px',
                                                   'border-color':'black'
                                               }
                                           
                                     },
                                     {
                                         xtype:'datepickerfield',
                                         itemid:'intakedateedit',
                                         width:'100%',
                                         name:'intakedate',
                                         value: new Date()
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'intaketimeedit',
                                         itemid:'intaketimeedit',
                                         placeHolder:'Enter Time like "1000" for 10:00 AM'
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'intakeresultedit',
                                         itemid:'intakeresultedit',
                                         placeHolder:'Enter Result'
                                     },
                                      {
				    xtype: 'button',
				    //id: 'SaveButton',
                                    itemid:'intakeupdatebutton',
				    ui: 'action',
				    //margin: 1,
				    text: 'Update'
			    }
                           
			   
	    ]
	    
        });
	
	Ext.Viewport.on({
            delegate: '#editintakeicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
		//console.log('yes button');
            }
        });
   },
   editoutputfunction:function(){
       var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'EditoutputvaluesOverlay',
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
                                          height:'40px',
                                          itemid:'outputname',
                                           name:'outputname',
                                           
                                           options: [
                                                   {text: 'Urine',  value: 'Urine'},
                                                   {text: 'Emesis',  value: 'Emesis'},
                                                   {text: 'Drains', value: 'Drains'},
                                                   {text: 'Stool',  value: 'Stool'},
                                                   {text: 'Ostomy',  value: 'Ostomy'},
                                                   {text: 'Unmeasured',  value: 'Unmeasured'},
                                                   {text: 'Incontinent',  value: 'Incontinent'},
                                                   {text: 'Blood',  value: 'Blood'},
                                                   {text: 'CRRT',  value: 'CRRT'},
                                                   {text: 'Other',  value: 'Other'},
                                                   {text: 'Total Out',  value: 'Total Out'}
                                               ],
                                               style:{
                                                   'border-width':'2px',
                                                   'border-color':'black'
                                               }
                                           
                                     },
                                     {
                                         xtype:'datepickerfield',
                                         itemid:'outputdate',
                                          width:'100%',
                                            name:'outputdate',
                                            //height:'px',
                                            
                                           // border:2,
                                            //style: 'border-color: black; border-style: solid;',
                                            value: new Date()
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'outputtime',
                                         itemid:'outputtime',
                                         placeHolder:'Enter Time like "1000" for 10:00 AM'
                                     },
                                     {
                                         xtype:'textfield',
                                         name:'outputresult',
                                         itemid:'outputresult',
                                         
                                         placeHolder:'Enter Result'
                                     },
                                      {
				    xtype: 'button',
				    //id: 'SaveButton',
                                    itemid:'outputupdatebutton',
				    ui: 'action',
				    //margin: ,
				    text: 'Update',
                                    
			    }
                           
			   
	    ],
	    
        });
	
	Ext.Viewport.on({
            delegate: '#editoutputicon',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
		//console.log('yes button');
            }
        });
   },
   outputupdatebuttontap:function(){
       console.log('in output function');
        var outputname=Ext.ComponentQuery.query('[itemid=outputname]')[0].getValue();
        var outputdate=Ext.ComponentQuery.query('[itemid=outputdate]')[0].getFormattedValue();
        var outputtime=Ext.ComponentQuery.query('[itemid=outputtime]')[0].getValue();
        var outputresult=Ext.ComponentQuery.query('[itemid=outputresult]')[0].getValue();
        console.log(outputname);
        console.log(outputdate);
        console.log(outputtime);
        console.log(outputresult);
        Ext.getStore('outputUpdateStore').load({
            params:{ outputnm: outputname,
                     outputdate: outputdate,
                     outputtime:outputtime,
                     outputresult:outputresult
                      },
                       scope:this,
             
             callback:function(records,operation,success){
                 if(success){
                     Ext.getStore('outputpiechartstore').load({});
                     alert(records[0].data.information);
                 }
             }
             
                  });
   },
   intakeupdatebuttontap:function(){
        var intakename=Ext.ComponentQuery.query('[itemid=intakenameedit]')[0].getValue();
        var intakedate=Ext.ComponentQuery.query('[itemid=intakedateedit]')[0].getFormattedValue();
        var intaketime=Ext.ComponentQuery.query('[itemid=intaketimeedit]')[0].getValue();
        var intakeresult=Ext.ComponentQuery.query('[itemid=intakeresultedit]')[0].getValue();
        console.log(intakename);
        console.log(intakedate);
        console.log(intaketime);
        console.log(intakeresult);
        var intakestore = Ext.StoreMgr.get('intakedataupdatestore');
        Ext.getStore('intakedataupdatestore').load({
            params:{ intakenm: intakename,
                     itkdate: intakedate,
                     itktime:intaketime,
                     itkresult:intakeresult
                      },
                       scope:this,
             
             callback:function(records,operation,success){
                 if(success){
                     Ext.getStore('intakepiechartstore').load({});
                 }
                 alert('Record for '+intakename+' was Updated');
             }
                  });
   },
   OnVSAndIOpageLoad:function(){
       var vitalvalue=Ext.ComponentQuery.query('#tablevitalname')[0].getValue();
       var tablestartdate=Ext.ComponentQuery.query('#tablestartdate')[0].getFormattedValue();
       var tableenddate=Ext.ComponentQuery.query('#tableenddate')[0].getFormattedValue();
       var shiftvalue=Ext.ComponentQuery.query('#shiftname')[0].getValue();
       var vitaltablepanel= this.getVitaltablepanel();
       var store = Ext.StoreMgr.get('vitaltablestore');
       Ext.getStore('vitaltablestore').load({
            params:{ vitalvalue: vitalvalue,
                     shiftvalue: shiftvalue,
                     startdate:tablestartdate,
                     enddate:tableenddate
                      },
             scope:this,
             callback:function(records,operation,success){
                 var no_of_records=store.getCount();
                 var vitaltable='<table><thead>';
                 
                 if(vitalvalue==='all'){
                     vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 0px 0 0px">'+'Date'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'BP'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Height'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Pain'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Pulse'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Resp'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'SaO2'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Temperature'+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+'Weight'+'</td>'+'</tr>';
                 for(var i=0;i<no_of_records;i++){
                            vitaltable += '<tr>'+
                                       '<td style=" padding:0 0px 0 0px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 15px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.BP+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Height+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Pain+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Pulse+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Resp+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.SaO2+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Temp+'</td>'+
                                       '<td style=" padding:0 30px 0 15px">'+records[i].data.Weight+'</td>'+'</tr>';
                 }
             }
             else{
                 vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 30px 0 18px">'+'Date'+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+'Time'+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+vitalvalue+'</td>'+'</tr>';
                  for(var i=0;i<no_of_records;i++){
                      vitaltable += '<tr>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+store.getAt(i).get(vitalvalue)+'</td>'+'</tr>';
                      }
             }
                  vitaltablepanel.setHtml(vitaltable);
             }
         });
   }
   
});