
Ext.define("MVF.controller.MainController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            main:'main',
            vital:'[itemid=vitalname]',
            shiftselect:'[itemid=shiftname]',
//          startdayselect:'[itemid=startdate]',
//          enddayselect:'[itemid=enddate]',
            edittable:'[itemid=edittableicon]',
            vitaltable:'[itemid=tablevitalname]',
            vitaltablepanel:'[itemid=vitaltablepanel]',
            patientsummarybutton:'[itemid=patientsummarybutton]',
            returntovspage:'[itemid=cancelbutton]',
            backtovsiopage:'[itemid=back]',
            OnTableVitalChange:'[itemid=tablevitalname]'
        },
        control: {

            vital:{
                    change:'OnVitalnameSelect'
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
        
        //Ext.Msg.alert(vitalvalue);
        // Ext.Msg.alert(selecteddate);
        var vitaltablepanel= this.getVitaltablepanel();
        var store = Ext.StoreMgr.get('vitaltablestore');
        Ext.getStore('vitaltablestore').load({
            params:{ vitalvalue: vitalvalue,
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
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t2+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t3+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t4+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t5+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t6+'</td>'+'</tr>';
                     }
                     else{
                         vitaltable += '<tr>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.date+'</td>'+
                                       '<td style=" padding:0 30px 0 18px;border-right:1px solid #a5a399">'+records[i].data.time+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t1+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t2+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t3+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t4+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t5+'</td>'+
                                       '<td style=" padding:0 30px 0 18px">'+records[i].data.t6+'</td>'+'</tr>';
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
      console.log(this.getMain());
      this.getMain().push({
          xtype:'EditTable',
          title:'Edit Table'
      });
       
    },
    gotopatientsummary:function(){
        console.log(this);
        this.getMain().push({
          xtype:'labs',
          title:'Labs'
      });
    },
    returntovspage:function(button, e, eOpts){
         
	this.getMain().pop();
    
   },
   returntovsiopage:function(button, e, eOpts){
       this.getMain().pop();
   }
    
});