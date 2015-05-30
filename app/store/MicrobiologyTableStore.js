Ext.define("MVF.store.MicrobiologyTableStore", {
    extend: "Ext.data.Store",
     config: {
         model: 'MVF.model.MicrobiologyTableModel',
	    storeId : 'MicrobiologyTableStore',
        proxy: {
            type: 'ajax',
            noCache: true, 
            method:'post',
            url: 'php/MicrobiologyTable.php',
            headers: { 'Content-Type': 'application/json' }, 
            reader: Ext.create('Ext.data.reader.Json', {
	            type: 'json'
	            })
        },
       
        autoLoad: true
    }
});