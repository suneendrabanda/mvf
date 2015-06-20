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
            DisplayChemistryResults:'[itemid=labschemistryresult]',
            DisplayHematologyResults:'[itemid=labshematologyresult]',
            DisplayMicrobiologyResults:'[itemid=labsmicrobiologyresult]',
            DisplayABGResults:'[itemid=labsabgresult]',
            OnLabsMainViewButtonTap:'[itemid=LabsMainviewbuttonid]'
            
        },
        control:{
            GoToChemistryPage:{
                tap:'GoToChemistryPage'
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
            }
        }
    },
    init:function(){
        //MVF.app.LabPageCount++;
        console.log(MVF.app.LabPageCount+' Lab Page Count working');
    },
    GoToChemistryPage:function(){
        this.getLabsMain().push({
                 xtype:'chemistrylabs'
          });
    },
    GoToHematologyPage:function(){
        this.getLabsMain().push({
              xtype:'hematology'
        });
    },
    GoToMicrobiologyPage:function(){
        this.getLabsMain().push({
              xtype:'microbiologyview'
        });
    },
    GoToAbgPage:function(){
        this.getLabsMain().push({
              xtype:'absview'
        });
    },
    DisplayChemistryResultsFunction:function(date){
        var ChemistryStore=Ext.getStore('LabsMainChemistryResultsStore');
        var ChemistryResultsPanel=this.getDisplayChemistryResults();
        var ChemistryResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 110px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        ChemistryStore.load({
            params:{
                date:date
            },
            scope:this,
            callback:function(records,success){
                var No_Of_ResultsFetch=ChemistryStore.getCount();
                console.log('no of che fetch'+No_Of_ResultsFetch);
                if(success){
                    var i=0;
                    for(var i=0;i<No_Of_ResultsFetch;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
                               ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                            else{
                                //red
                                ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                            }
                        }
                        else{
                            if(records[i].data.min==='null'){
                                if(records[i].data.result<=records[i].data.max){
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                            }
                         else if(records[i].data.max==='null'){
                             if(records[i].data.result>=records[i].data.min){
                                    ChemistryResults+='<tr style="padding: 10px 0 0 0"><td>'+records[i].data.name+'</td><td>'+records[i].data.result+'</td><td>'+records[i].data.time+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                                else{
                                    //red
                                    ChemistryResults+='<tr style="color:#ff0000;padding: 10px 0 0 0><td>'+records[i].data.name+'</td><td>'+records[i].data.result+records[i].data.time+'</td><td>'+'</td><td>'+records[i].data.range+'</td></tr>';
                                }
                         }   
                        }
                    }
                    ChemistryResults+='</tbody></table>';
                    ChemistryResultsPanel.setHtml(ChemistryResults);
                    console.log(ChemistryResults);
                }
            }
        });
    },
    GoTOPageDropDownSelect:function(){
        var pagename=Ext.ComponentQuery.query('[itemid=labsPageId]')[0].getValue();
        console.log(pagename);
        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        this.getLabsMain().push({
          xtype:pagename
          });
          //this.getLabsMain().destroy();
    },
    DisplayHemaotologyResultsFunction:function(date){
        var HematologyStore=Ext.getStore('LabsMainHematologyResultsStore');
        var HematologyesultsPanel=this.getDisplayHematologyResults();
        var HematologyResults='<table><thead><tr><th style="padding: 0 120px 0 0">Name</th><th style="padding: 0 105px 0 0">Result</th><th style="padding: 0 80px 0 0">Time</th><th style="padding: 0 10px 0 0">Normal Range</th></tr></thead><tbody>';
        HematologyStore.load({
            params:{
                date:date
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=HematologyStore.getCount();
                console.log('no of Hematology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
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
                date:date
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=MicrobiologyStore.getCount();
                console.log('no of Microbiology results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
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
                date:date
            },
            scope:this,
            callback:function(records,success){
                var No_Of_Results=ABGStore.getCount();
                console.log('no of ABG results fetch'+No_Of_Results);
                if(success){
                    var i=0;
                    for(i=0;i<No_Of_Results;i++){
                        if(records[i].data.exact==='null'){
                            if(records[i].data.result<=records[i].data.max && records[i].data.result>=records[i].data.min){
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
                    console.log(ABGResults);
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
    }
    
});