Ext.define("MVF.store.HematologyAlertStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.HematologyAlertModel',
	    storeId : 'HematologyAlertStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/HematologyAlert.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});