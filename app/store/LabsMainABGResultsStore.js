Ext.define("MVF.store.LabsMainABGResultsStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.LabsMainLabResultsModel',
	    storeId : 'LabsMainABGResultsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/LabsMainABGResults.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});