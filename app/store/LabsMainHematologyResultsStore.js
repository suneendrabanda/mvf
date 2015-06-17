Ext.define("MVF.store.LabsMainHematologyResultsStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.LabsMainLabResultsModel',
	    storeId : 'LabsMainHematologyResultsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/LabsMainHematologyResults.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});