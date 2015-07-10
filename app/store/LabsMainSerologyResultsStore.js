Ext.define("MVF.store.LabsMainSerologyResultsStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.LabsMainLabResultsModel',
	    storeId : 'LabsMainSerologyResultsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/LabsMainSerologyResults.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});