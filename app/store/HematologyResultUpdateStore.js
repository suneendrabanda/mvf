
Ext.define("MVF.store.HematologyResultUpdateStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ResultUpdateModel',
	    storeId : 'HematologyResultUpdateStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/HematologyResultUpdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});