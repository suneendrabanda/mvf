
Ext.define("MVF.store.vitalsignupdatestore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.vitalsignsupdatemodel',
	    storeId : 'vitalsignupdatestore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/vitalsignupdate.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});