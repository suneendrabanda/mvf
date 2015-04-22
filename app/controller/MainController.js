
Ext.define("MVF.controller.MainController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            main:'main',
            vital:'[itemid=vitalname]',
            onupdatevital:'[itemid=updatebutton]',
            shiftselect:'[itemid=shiftname]',
//          startdayselect:'[itemid=startdate]',
//          enddayselect:'[itemid=enddate]',
            edittable:'[itemid=edittableicon]',
            vitaltable:'[itemid=tablevitalname]',
            vitaltablepanel:'[itemid=vitaltablepanel]',
            patientsummarybutton:'[itemid=patientsummarybutton]',
            returntovspage:'[itemid=cancelbutton]',
            backtovsiopage:'[itemid=back]',
            OnTableVitalChange:'[itemid=tablevitalname]',
            gotopage:'[itemid=pageid]',
            editintake:'[itemid=editintakeicon]',
            editoutput:'[itemid=editoutputicon]',
            onoutputupdatebuttonclick:'[itemid=outputupdatebutton]'
        },
        control: {

            vital:{
                    change:'OnVitalnameSelect'
                },
                onoutputupdatebuttonclick:{
                    tap:'outputupdatebuttontap'
                },
                editintake:{
                    tap:'editintakefunction'
                },
                editoutput:{
                    tap:'editoutputfunction'
                },
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
            edittable:{
                tap:'edittable'
            },
            patientsummarybutton:{
                tap:'gotopatientsummary'
            },
            returntovspage:{
                tap:'returntovspage'
            },
            backtovsiopage:{
                tap:'returntovsiopage'
            }
            
//            startdayselect:{
//                    select:'OnVitalnameSelect'
//                },
//            enddayselect:{
//                    select:'OnVitalnameSelect'
//                },
            
            
        }
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
                 no_of_records=store.getCount();
                 var vitaltable='<table>';
                 if(vitalvalue==='all'){
                 for(var i=0;i<no_of_records;i++){
                     if(i===0){
                         vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t1+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t6+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t3+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t4+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t5+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t2+'</td>'+'</tr>';
                     }
                     else{
                         vitaltable += '<tr>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t1+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t6+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t3+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t4+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t5+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t2+'</td>'+'</tr>';
                     }
                 }
             }
             else{
                  for(var i=0;i<no_of_records;i++){
                      if(i===0){
                              vitaltable += '<tr style="border-bottom:1px solid #a5a399">'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t1+'</td>'+'</tr>';
                      }
                      else{
                          vitaltable += '<tr>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t1+'</td>'+'</tr>';
                      }
                  }
             }
                  vitaltablepanel.setHtml(vitaltable);
             }
             });
       
        
    },
    edittable:function(){
//      console.log(this.getMain());
//      this.getMain().push({
//          xtype:'EditTable',
//          title:'Edit Table',
//         
//      }); 
     var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid: 'Editvitalsigntable',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,          
	    width:  Ext.os.deviceType =='Phone' ? 460 : 400,//'500px',
	    height: Ext.os.deviceType =='Phone' ? 400 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                {
				    xtype: 'EditTable',
				    width: '100%',
				    height: '100%'
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
    gotopatientsummary:function(){
        console.log(this);
        this.getMain().push({
          xtype:'chemistrylabs',
          title:'chemistryLabs'
      });
    },
    returntovspage:function(button, e, eOpts){
         
	this.getMain().pop();
    
   },
   returntovsiopage:function(button, e, eOpts){
       this.getMain().pop();
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
       var store=Ext.getStore('vitalsignupdatestore');
        store.load({
                   params:{ vitalvalue: editvitalvalue,
                            datevalue: editdatevalue,
                            timevalue: edittimevalue,
                            vitalresult: editresultvalue},
                   
                   });
                   
   },
   gotopagefunction:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=pageid]')[0].getValue();
        console.log(pagename);
         this.getMain().push({
          xtype:pagename,
          title:'chemistryLabs'
      });
   },
   editintakefunction:function(){
      // console.log('in function');
       var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    //id: 'EditPersonalInfoOverlay',
            // Make it modal so you can click the mask to hide the overlay
            modal: true,
            hideOnMaskTap: true,
	    centered: true,
//            showAnimation:{
//                type:'popIn',
//                duration:200,
//                easing:'ease-out'
//            },
//             hideAnimation:{
//                type:'popOut',
//                duration:200,
//                easing:'ease-out'
//            },
	    width:  Ext.os.deviceType =='Phone' ? 360 : 400,//'500px',
	    height: Ext.os.deviceType =='Phone' ? 300 : 400,
	    styleHtmlContent: true,
	    // Make it hidden by default
            hidden: true,
	    
	    items: [
                {
				    xtype: 'editintakedata',
				    width: '100%',
				    height: '100%'
			    },
			   
	    ],
	    
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
   }
    
});