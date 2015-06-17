Ext.define("MVF.store.LabsMainMicrobiologyResultsStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.LabsMainLabResultsModel',
	    storeId : 'LabsMainMicrobiologyResultsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/LabsMainMicrobiologyResults.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});