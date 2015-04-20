

Ext.define("MVF.store.updateVitalsStore",{
    extend: "Ext.data.Store",
     config: {
         //model: 'MVF.model.vitaltablemodel',
	 storeId : 'updateVitalsStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            //method:'GET',
            url: 'php/updatevitaltable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});