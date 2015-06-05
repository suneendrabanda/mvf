Ext.define("MVF.store.ABSResultUpdateStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.ResultUpdateModel',
	    storeId : 'ABSResultUpdateStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/ABSResultUpdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});