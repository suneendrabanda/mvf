Ext.define("MVF.controller.ProviderOrdersController", {
    extend: "Ext.app.Controller",
    config:{
        refs:{
            MedicationsTap:'[itemid=POMedications]',
            MedRecords:'[itemid=MedRecords]',
            NurseOrdersTap:'[itemid=NurseOrders]',
            NurseOrderRecords:'[itemid=NurseRecords]',
            ActDailyLivingTap:'[itemid=ActDailyLiving]',
            ActDailyLivingOrder:'[itemid=ActDailyLivingOrder]'
        },
        control:{
            MedicationsTap:{
                tap:'OnMedicationTap'
            },
            NurseOrdersTap:{
                tap:'OnNurseOrdersTap'
            },
            ActDailyLivingTap:{
                tap:'OnActDailyLivingTap'
            }
        }
    },
    init:function(){
        this.RequestOrderOverlay();
    },
    RequestOrderOverlay:function(){
        var overlay = Ext.Viewport.add({
            xtype: 'panel',
	    itemid:'RequestOrderOvrlay',
            modal: true,
            hideOnMaskTap: true,
	    centered: true,           
	    width:  Ext.os.deviceType ==='Phone' ? 933 : 933,//'500px',
	    height: Ext.os.deviceType ==='Phone' ? 580 : 580,
            zIndex:5,
            styleHtmlContent: true,
	    hidden: true,
	    items: [
                        {
                            xtype:'titlebar',
                            docked:'top',
                            height:'66px',
                              html:'<div style="font-size:30px;float:left;padding:10px;color:white">Request Order</div>',
                              style:{
                                  'background-color': '#4D3462',
                                  'font-family':'openSansLight'
                              }
                        },
                        {
                            xtype: 'RequestOrderView',
			    width: '100%',
			    height: '100%',
                        },
			   
	    ],
	    
        });
	
	Ext.Viewport.on({
            delegate: '[itemid=requestorder]',
            tap: function(button) {
                // When you tap on the button, we want to show the overlay by the button we just tapped.
                overlay.show();
                
		//console.log('yes button');
            }
        });
    },
    OnMedicationTap:function(){
        var MedData=this.getMedRecords();
        //var MedResultsToPrint='';
        console.log(MedData.isHidden());
        if(MedData.isHidden()){
            MedData.show();
            //MedData.setHtml('show');
            Ext.Ajax.request({
            url: 'php/MedicationOrders.php',
            method: 'post',
            params: {
               //NurseID:'S1019'
            },
            scope:this,
            failure : function(response,opts){
		   var MedResultsToPrint=  'There is a problem with the server, please try again later or contact your administrator';
                   MedData.setHtml(MedResultsToPrint);
		},
            success: function(response,opts){
                 var obj = Ext.decode(response.responseText);
                 var  MedResultsToPrint='';
                 for(var i=0;i<obj.length;i++){
                     MedResultsToPrint+='<div style="width:100%;height:50px;padding-bottom:5px;margin-left:38px">';
                     MedResultsToPrint+='<div style="width:14%;float:left;text-align:left;padding: 12px 0 0 8px;">'+obj[i].Name+'</div>'+
                             '<div style="width:20%;float:left;text-align:left">'+'<p>Date:'+obj[i].date+'</p>'+'<p>Time:'+obj[i].time+'</p>'+'</div>'+
                             '<div style="width:20%;float:left;text-align:left">'+'<p>Dose:'+obj[i].dose+'</p>'+'<p>Route:'+obj[i].route+'</p>'+'</div>'+
                             '<div style="width:20%;float:left;text-align:left">'+'<p>Freq:'+obj[i].freq+'</p>'+'</div>'+
                             '<div style="width:20%;float:left;text-align:left">'+'<p>Start:'+'xx/xx/xxxx'+'</p>'+'<p>Stop:'+'xx/xx/xxxx'+'</p>'+'</div>'
                     MedResultsToPrint+='</div>';
                     if(i===obj.length-1){
                         MedResultsToPrint+='<hr>';
                     }
                     else{
                         MedResultsToPrint+='<hr style="margin-right:19px;margin-left:21px">';
                     }
                 }
                 if(obj.length===0){
                     MedResultsToPrint+='<div style="width:100%;height:55px;padding-bottom:5px;margin-left:0px">';'<div style="width:100%;height:55px;padding-bottom:5px;margin-left:38px">';
                     MedResultsToPrint+='<p style="padding:10px 0 0 87px">No records found</p><hr style="margin-top:15px"></div>'
                 }
                 MedData.setHtml(MedResultsToPrint);
            }
            
        });
        
        }
        else{
            MedData.hide();
        }
    },
    OnNurseOrdersTap:function(){
        var NurseData=this.getNurseOrderRecords();
        //var MedResultsToPrint='';
        //console.log(NurseData.isHidden());
        if(NurseData.isHidden()){
            NurseData.show();
            //MedData.setHtml('show');
            Ext.Ajax.request({
            url: 'php/NursingOrders.php',
            method: 'post',
            params: {
               //NurseID:'S1019'
            },
            scope:this,
            failure : function(response,opts){
		   var MedResultsToPrint=  'There is a problem with the server, please try again later or contact your administrator';
                   NurseData.setHtml(MedResultsToPrint);
		},
            success: function(response,opts){
                 var obj = Ext.decode(response.responseText);
                 var  ResultsToPrint='';
                 for(var i=0;i<obj.length;i++){
                     ResultsToPrint+='<div style="width:100%;min-height:50px;overflow:hidden;padding-bottom:5px;margin-left:38px">';
                     ResultsToPrint+='<div style="width:14%;float:left;margin-left:131px;text-align:left;padding: 0 0 0 0">'+'<p>Date:'+obj[i].date+'</p>'+'<p>Time:'+obj[i].time+'</p>'+'</div>'+
                             '<div style="width:60%;float:left;text-align:left;padding-left;60px;margin-top:-19px">'+'<p>'+obj[i].description+'</p>'+'</div>';
                     ResultsToPrint+='</div>';
                     if(i===obj.length-1){
                         ResultsToPrint+='<hr>';  
                     }
                     else{
                       ResultsToPrint+='<hr style="margin-right:19px;margin-left:21px">';  
                     }
                 }
                 //MedResultsToPrint='</table>';
                 //console
                 if(obj.length===0){
                     ResultsToPrint+='<div style="width:100%;height:55px;padding-bottom:5px;margin-left:0px">';'<div style="width:100%;height:55px;padding-bottom:5px;margin-left:38px">';
                     ResultsToPrint+='<p style="padding:10px 0 0 87px">No records found</p><hr style="margin-top:15px"></div>'
                 }
                 NurseData.setHtml(ResultsToPrint);
            }
            
        });
        
        }
        else{
            NurseData.hide();
        }
    },
    OnActDailyLivingTap:function(){
        var ActDailyLivingData=this.getActDailyLivingOrder();
        console.log('in');
        if(ActDailyLivingData.isHidden()){
            ActDailyLivingData.show();
            //MedData.setHtml('show');
            Ext.Ajax.request({
            url: 'php/ActDailyLiving.php',
            method: 'post',
            params: {
               //NurseID:'S1019'
            },
            scope:this,
            failure : function(response,opts){
		   var ResultsToPrint=  'There is a problem with the server, please try again later or contact your administrator';
                   ActDailyLivingData.setHtml(ResultsToPrint);
		},
            success: function(response,opts){
                 var obj = Ext.decode(response.responseText);
                 var  ResultsToPrint='';
                 for(var i=0;i<obj.length;i++){
                     ResultsToPrint+='<div style="width:100%;min-height:50px;overflow:hidden;padding-bottom:5px;margin-left:38px">';
                     ResultsToPrint+='<div style="width:14%;float:left;margin-left:131px;text-align:left;padding: 0 0 0 0">'+'<p>Date:'+obj[i].date+'</p>'+'<p>Time:'+obj[i].time+'</p>'+'</div>'+
                             '<div style="width:60%;float:left;text-align:left;padding-left;60px;margin-top:-19px">'+'<p>'+obj[i].description+'</p>'+'</div>';
                     ResultsToPrint+='</div>';
                     if(i===obj.length-1){
                         ResultsToPrint+='<hr>';  
                     }
                     else{
                       ResultsToPrint+='<hr style="margin-right:19px;margin-left:21px">';  
                     }
                 }
                 //MedResultsToPrint='</table>';
                 //console
                 if(obj.length===0){
                     ResultsToPrint+='<div style="width:100%;height:55px;padding-bottom:5px;margin-left:0px">';'<div style="width:100%;height:55px;padding-bottom:5px;margin-left:38px">';
                     ResultsToPrint+='<p style="padding:10px 0 0 87px">No records found</p><hr style="margin-top:15px"></div>'
                 }
                 ActDailyLivingData.setHtml(ResultsToPrint);
            }
            
        });
        
        }
        else{
            ActDailyLivingData.hide();
        }
    },
    });