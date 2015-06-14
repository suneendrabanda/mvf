
Ext.define("MVF.store.ChemistryResultsUpdateStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ResultUpdateModel',
	    storeId : 'ChemistryResultsUpdateStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ChemistryResultsUpdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});