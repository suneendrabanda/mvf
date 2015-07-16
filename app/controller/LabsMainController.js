Ext.define("MVF.controller.LabsMainController", {
    extend: "Ext.app.Controller",
    
    config:{
        
        refs:{
            LabsMain:'LabsMainView',
            GoToChemistryPage:'[itemid=labsChemistrypage]',
            GoToHematologyPage:'[itemid=labhematologypage]',
            GoToMicrobiologyPage:'[itemid=labmicrobiologypage]',
            GoToAbgPage:'[itemid=lababgpage]',
            GoTOPageDropDownSelect:'[itemid=labsPageId]',
            GoToSerologyPage:'[itemid=SerologyPage]',
            DisplayChemistryResults:'[itemid=labschemistryresult]',
            DisplayHematologyResults:'[itemid=labshematologyresult]',
            DisplayMicrobiologyResults:'[itemid=labsmicrobiologyresult]',
            DisplayABGResults:'[itemid=labsabgresult]',
            DisplaySerologyResults:'[itemid=labsserologyresult]',
            OnLabsMainViewButtonTap:'[itemid=LabsMainviewbuttonid]',
            OnPatientSummaryButtonTap:'[itemid=patientsummarybuttonid]',
            ChemistrylastupdatePanel:'[itemid=chemistrylastupdate]',
            HematologylastUpdatepanel:'[itemid=hematologylastupdate]',
            MicrobiologylastUpdatePanel:'[itemid=microbiologylastupdate]',
            AbgLastUpdatePanel:'[itemid=abglastupdate]'
        },
        control:{
            GoToChemistryPage:{
                tap:'GoToChemistryPage'
            },
            GoToSerologyPage:{
                tap:'GoToSerologyPage'
            },
            GoToHematologyPage:{
                tap:'GoToHematologyPage'
            },
            GoToMicrobiologyPage:{
                tap:'GoToMicrobiologyPage'
            },
            GoToAbgPage:{
                tap:'GoToAbgPage'
            },
            GoTOPageDropDownSelect:{
                change:'GoTOPageDropDownSelect'
            },
            OnLabsMainViewButtonTap:{
                tap:'OnLabsMainViewButtonTap'
            },
            OnPatientSummaryButtonTap:{
                tap:'OnPatientSummaryButtonTap'
            }
        }
    },
    init:function(){
//        //MVF.app.LabPageCount++;
//        MVF.app.LabsMainLastUpdatedDate=['a','b','c'];
//        for(i=0;i<3;i++){
//            console.log(MVF.app.LabsMainLastUpdatedDate[i]);
//        }
//        console.log(MVF.app.LabPageCount+' Lab Page Count working');
    },
   
    GoToChemistryPage:function(){
        this.getLabsMain().push({
                 xtype:'chemistrylabs'
          });
        this.getApplication().getController('ChemistryLabsController').OnChemistryPageLoad();
    },
    GoToSerologyPage:function(){
        this.getLabsMain().push({
                 xtype:'SerologyView'
          });
    },
    GoToHematologyPage:function(){
        this.getLabsMain().push({
              xtype:'hematology'
        });
        this.getApplication().getController('hematologyController').OnHematologyPageLoad();
    },
    GoToMicrobiologyPage:function(){
        this.getLabsMain().push({
              xtype:'microbiologyview'
        });
        this.getApplication().getController('MicrobiologyPageController').OnMicrobiologyPageLoad();
    },
    GoToAbgPage:function(){
        this.getLabsMain().push({
              xtype:'absview'
        });
        this.getApplication().getController('ABSLabController').OnABGPageLoad();
    },
    DisplayChemistryResultsFunction:function(date){
        var ChemistryStore=Ext.getStore('LabsMainChemistryResultsStore');
        var ChemistryResultsPanel=this.getDisplayChemistryResults();
        var ChemistryResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 110px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        ChemistryStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_ResultsFetch=ChemistryStore.getCount();
                console.log('no of che fetch'+No_Of_ResultsFetch);
                if(success){
                    var i=0;
                    for(var i=0;i<No_Of_ResultsFetch;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                               ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                //red
                                ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            if(records[i].data.min==='null'){
                                if(parseInt(records[i].data.result)<=parseInt(records[i].data.max)){
                                    console.log('result = '+records[i].data.result+' max = '+records[i].data.max);
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    console.log(' RED result = '+records[i].data.result+' max = '+records[i].data.max);
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                            }
                         else if(records[i].data.max==='null'){
                             
                             if(parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                   console.log('result = '+records[i].data.result+' min = '+records[i].data.min);
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    console.log(' RED MIN result = '+records[i].data.result+' min = '+records[i].data.min);
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                         }   
                        }
                    }
                    ChemistryResults+='</tbody></table>';
                    ChemistryResultsPanel.setHtml(ChemistryResults);
                    //console.log(ChemistryResults);
                }
            }
        });
    },
    GoTOPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=labsPageId]')[0].getValue();
        console.log(pagename);
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        if(Ext.getCmp(pagename)){
              console.log(pagename+' exist in stack');
               this.getLabsMain().pop();
            }
        else{
            this.getLabsMain().push({
              xtype:pagename
              });
        }
        if(pagename==='hematology'){
		this.getApplication().getController('hematologyController').OnHematologyPageLoad();
            }
          else if(pagename==='microbiologyview'){
               this.getApplication().getController('MicrobiologyPageController').OnMicrobiologyPageLoad();
          } 
          else if(pagename==='absview'){
              this.getApplication().getController('MicrobiologyPageController').OnABGPageLoad();
          }
          else if(pagename==='chemistrylabs'){
              this.getApplication().getController('ChemistryLabsController').OnChemistryPageLoad();
          }
              //this.getLabsMain().destroy();
    },
    DisplayHemaotologyResultsFunction:function(date){
        var HematologyStore=Ext.getStore('LabsMainHematologyResultsStore');
        var HematologyesultsPanel=this.getDisplayHematologyResults();
        var HematologyResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 105px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        HematologyStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=HematologyStore.getCount();
                console.log('no of Hematology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                HematologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                HematologyResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            HematologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    HematologyResults+='</tbody></table>';
                    HematologyesultsPanel.setHtml(HematologyResults);
                    //console.log(HematologyResults);
                }
            }
        });
    },
    DisplayMicrobiologyResultsFunction:function(date){
         var MicrobiologyStore=Ext.getStore('LabsMainMicrobiologyResultsStore');
        var MicrobiologyresultsPanel=this.getDisplayMicrobiologyResults();
        var MicrobiologyResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 110px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        MicrobiologyStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=MicrobiologyStore.getCount();
                console.log('no of Microbiology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result)<=parseInt(records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                MicrobiologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                MicrobiologyResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            MicrobiologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    MicrobiologyResults+='</tbody></table>';
                    MicrobiologyresultsPanel.setHtml(MicrobiologyResults);
                   // console.log(MicrobiologyResults);
                }
            }
        });
    },
    DisplayABGResultsFunction:function(date){
         var ABGStore=Ext.getStore('LabsMainABGResultsStore');
        var ABGresultsPanel=this.getDisplayABGResults();
        var ABGResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 110px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        ABGStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=ABGStore.getCount();
                console.log('no of ABG results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(parseFloat(records[i].data.result)<=parseFloat(records[i].data.max) && parseFloat(records[i].data.result)>=parseFloat(records[i].data.min)){
                                ABGResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                ABGResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            ABGResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    ABGResults+='</tbody></table>';
                    ABGresultsPanel.setHtml(ABGResults);
                    
                    //console.log(ABGResults);
                }
            }
        });
       
    },
    DisplaySerologyResultsFunction:function(date){
         var SerologyStore=Ext.getStore('LabsMainSerologyResultsStore');
        var SerologyresultsPanel=this.getDisplaySerologyResults();
        var SerologyResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 110px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        SerologyStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=SerologyStore.getCount();
                console.log('no of ABG results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(parseInt(records[i].data.result<=records[i].data.max) && parseInt(records[i].data.result)>=parseInt(records[i].data.min)){
                                SerologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                SerologyResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            SerologyResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                        }
                    }
                    SerologyResults+='</tbody></table>';
                    SerologyresultsPanel.setHtml(SerologyResults);
                    
                    //console.log(ABGResults);
                }
            }
        });
    },
    OnLabsMainViewButtonTap:function(){
        var date=Ext.ComponentQuery.query('[itemid=LabsMainDate]')[0].getFormattedValue();
        console.log(date);
        this.DisplayChemistryResultsFunction(date);
        this.DisplayHemaotologyResultsFunction(date);
        this.DisplayMicrobiologyResultsFunction(date);
        this.DisplayABGResultsFunction(date);
        this.DisplaySerologyResultsFunction(date);
        //console.log(this.DateFlag);
    },
    OnPatientSummaryButtonTap:function(){
        var date=Ext.ComponentQuery.query('[itemid=LabsMainDate]')[0].getFormattedValue();
        //set Chemistry last date
        this.DisplayChemistryResultsFunction(date);
        // set hematology last date
        this.DisplayHemaotologyResultsFunction(date);
        //set MIcrobiology last date
        this.DisplayMicrobiologyResultsFunction(date);
        //set Abg last date
        var datew=this.DisplayABGResultsFunction(date);
        console.log('abgd lst date'+datew);
        var ChemistryStore=Ext.getStore('LabsMainChemistryResultsStore');
        ChemistryStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_ResultsFetch=ChemistryStore.getCount();
                console.log('no of che fetch'+No_Of_ResultsFetch);
                if(success){
                    //insert last updated date in LabsMainLastUpdatedDate array
                   var LastUpdatedDate=records[0].data.date;
                   var ChemistrylastupdatePanel=this.getChemistrylastupdatePanel();
                   ChemistrylastupdatePanel.setHtml(LastUpdatedDate);
                }  
            }
        });
        var HematologyStore=Ext.getStore('LabsMainHematologyResultsStore');
        HematologyStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=HematologyStore.getCount();
                //console.log('no of Hematology results fetch'+No_Of_Results);
                if(No_Of_Results>0){
                    var LastUpdatedDate=records[0].data.date;
                    //console.log(LastUpdatedDate+' date in hematology');
                    var HematologylastUpdatepanel=this.getHematologylastUpdatepanel();
                    HematologylastUpdatepanel.setHtml(LastUpdatedDate);
                }
            }
        });
        var MicrobiologyStore=Ext.getStore('LabsMainMicrobiologyResultsStore');
        MicrobiologyStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=MicrobiologyStore.getCount();
                //console.log('no of Microbiology results fetch'+No_Of_Results);
                if(success){
                    var lastUpdated=records[0].data.date;
                    //console.log(lastUpdated+' date in microbiology');
                    var MicrobiologylastUpdatePanel=this.getMicrobiologylastUpdatePanel();
                    MicrobiologylastUpdatePanel.setHtml(lastUpdated);
                }
            }
        });
        var ABGStore=Ext.getStore('LabsMainABGResultsStore');
        ABGStore.load({
            params:{
                date:date,
                patient_id:MVF.app.patient_id
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=ABGStore.getCount();
                console.log('no of ABG results fetch'+No_Of_Results);
                if(success){
                   var LastUpdatedDate=records[0].data.date;
                    //console.log(LastUpdatedDate+' date im ');
                    var AbgLastUpdatePanel=this.getAbgLastUpdatePanel();
                     AbgLastUpdatePanel.setHtml(LastUpdatedDate);
                 }
             }
         });
    }
    
});