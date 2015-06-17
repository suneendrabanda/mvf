Ext.define("MVF.store.LabsMainChemistryResultsStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.LabsMainLabResultsModel',
	    storeId : 'LabsMainChemistryResultsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/LabsMainChemistryResults.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});