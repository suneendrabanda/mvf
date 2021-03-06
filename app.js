/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MVF',

    requires: [
        'Ext.MessageBox',
        'Ext.device.Camera'
    ],

   views: [
    "linechart",
    "Main",
    "EditTable",
    "outputpiechart",
    "intakepiechart",
    "bplinechart",
    "chemistrylabs",
    "editintakedata",
    "outputupdate",
    "microbiologyview",
    "pageselect",
    "chemistrychartview",
    "hematology",
    "absview",
    "IntakeAndOutputView",
    "abschartview",
    "HematologyChartView",
    "MicrobiologyChartView",
    "IOPageOutputChartView",
    "IOPageIntakeChartView",
    "LabsMainView",
    "VitalsView",
    "SerologyView",
    "SerologyChartView",
    "IntakeEditView",
    "OutputEditView",
    "IOPageIntakeEditView",
    "IOPageOutputEditView",
    "AddLabNotesView",
    "ProviderOrder",
    "RequestOrderView",
    "CameraView"
],
   models:[
	"linechart",
       "vitalsignsupdatemodel",
       "bplinechartmodel",
       "vitaltablemodel",
       "outputpiechartmodel",
       "piechartmodel",
       "DropDownmodel",
       "IOUpdateModel",
       "ABSChartModel",
       "ChartModel",
       "MicrobiologyChartModel",
       "ResultUpdateModel",
       "HematologyAlertModel",
       "TableModel",
       "ABSTableModel",
       //"ABSDropDownModel",
       "LabsNotesModel",
       "LabsMainLabResultsModel",
       "IOPageDropDownModel"
],
    stores:[
	'linechart',
        'SerologyTableStore',
        'vitalsignupdatestore',
        "bplinechartstore",
        "vitaltablestore",
        "outputpiechartstore",
        "intakepiechartstore",
        "intakedataupdatestore",
        "chemistrydropdownstore",
        "microbiologydropdownstore",
        "chemistrychartstore",
        "outputUpdateStore",
        "ABSChartStore",
        "hematologyDropDownStore",
        "HematologyChartStore",
        "MicrobiologyChartStore",
        "IOPageOutputChartStore",
        "IOPageIntakeChartStore",
        "HematologyResultUpdateStore",
        "HematologyAlertStore",
        "MicrobiologyResultUpdateStore",
        "HematologyTableStore",
        "MicrobiologyTableStore",
        "ABSResultUpdateStore",
        "ABSTableStore",
        "ABSDropDownStore",
        "ChemistryResultsUpdateStore",
        "ChemistryTableStore",
        "ABGNotesStore",
        "LabsMainChemistryResultsStore",
        "LabsMainHematologyResultsStore",
        "LabsMainMicrobiologyResultsStore",
        "LabsMainABGResultsStore",
        "LabsMainSerologyResultsStore",
        "IOPageIntakeStore",
        "IOPageOutputStore",
        "IntakeTableStore",
        "OutputTableStore",
        "VitalSignsDropDownStore",
        "SerologyDropdownStore",
        "SerologyChartStore",
        "ChemistryLabNotesStore",
        "MIcrobiologyNotesStore",
        "HematologyNotesStore",
        "SerologyLabNotesStore",
        "IONotesStore",
        "ProviderOrdersStore"
],
controllers: [
	'MainController',
        'ChemistryLabsController',
        'ABSLabController',
        'hematologyController',
        'MicrobiologyPageController',
        'IOPageController',
        'LabsMainController',
        'SerologyController',
        'ProviderOrdersController',
        'ToolBarController'
],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        
        // Initialize the main view
        Ext.Viewport.add(Ext.create('MVF.view.ProviderOrder'));
    },
     'LabPageCount':'0',
     'patient_id':'71013',
     'vitaltextfieldflag':0,
     'vitalsFlag':[0,0,0,0,0,0,0,0],
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
