Ext.define("MVF.store.outputUpdateStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.outputUpdateModel',
	    storeId : 'outputUpdateStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/outputUpdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});