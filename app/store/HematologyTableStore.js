Ext.define("MVF.store.HematologyTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.HematologyTableModel',
	    storeId : 'HematologyTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/HematologyTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});