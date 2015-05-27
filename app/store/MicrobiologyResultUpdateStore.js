
Ext.define("MVF.store.MicrobiologyResultUpdateStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ResultUpdateModel',
	    storeId : 'MicrobiologyResultUpdateStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/MicrobiologyResultUpdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});